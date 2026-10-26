(function(){
  if (window.__samsTrackerActive) return;
  window.__samsTrackerActive = true;
  var sc = document.currentScript;
  var SRC = (sc && sc.getAttribute('data-source')) || window.SAMS_SOURCE || 'bridge-page';
  var SID = sessionStorage.getItem('sams_sid') || ('s_' + Math.random().toString(36).slice(2,10) + '_' + Date.now().toString(36));
  sessionStorage.setItem('sams_sid', SID);
  var curItem = document.title || location.pathname, itemEnter = Date.now(), lastAct = Date.now(), lastSpoken = 0;
  var clicks = [], backspaces = 0;

  function send(kind, item, val, meta) {
    lastAct = Date.now();
    fetch('/behavior-api/track', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({origin: 'source', source: SRC, session: SID, kind: kind, item: item || curItem, value: val, meta: meta || {}}),
      keepalive: true
    }).then(function(r){ return r.json(); }).then(function(d){
      if (d && d.state && d.state.should_speak && Date.now() - lastSpoken > 20000) {
        lastSpoken = Date.now();
        window.dispatchEvent(new CustomEvent('sams:avatar-speak', {detail: d.state}));
      }
    }).catch(function(){});
  }

  send('view', location.pathname, 1);
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (e.isIntersecting) {
        var id = e.target.getAttribute('data-sams-item') || e.target.id || (e.target.innerText || '').slice(0,32).trim();
        if (id) {
          if (curItem && Date.now() - itemEnter > 800) send('dwell', curItem, Date.now() - itemEnter);
          curItem = id; itemEnter = Date.now();
          send('impression', id, 1);
        }
      }
    });
  }, {threshold: 0.6});
  document.querySelectorAll('[data-sams-item], section, main h1, main h2, form, button').forEach(function(el){ io.observe(el); });

  document.addEventListener('click', function(e){
    var now = Date.now();
    clicks = clicks.filter(function(t){ return now - t < 1000; });
    clicks.push(now);
    var t = e.target.closest('button, a, [data-sams-item], input');
    var label = t ? (t.getAttribute('data-sams-item') || t.innerText || t.id || t.name || 'control').slice(0,36).trim() : curItem;
    if (clicks.length >= 3) send('sentiment', label, -0.8, {reason: 'rage_click'});
    else send('selection', label, 1);
  }, true);

  document.addEventListener('keydown', function(e){
    var gap = Date.now() - lastAct;
    if (gap > 3500 && gap < 30000) send('pause', curItem, gap);
    if (e.key === 'Backspace' || e.key === 'Delete') {
      backspaces++;
      if (backspaces >= 5) { send('sentiment', curItem, -0.6, {reason: 'input_hesitation'}); backspaces = 0; }
    } else if (e.key === 'Enter') { send('sentiment', curItem, 0.6, {reason: 'submit'}); backspaces = 0; }
  }, true);

  window.addEventListener('scroll', function(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (h > 0) send('scroll', curItem, Math.min(1, Math.max(0, window.scrollY / h)));
  }, {passive: true});

  setInterval(function(){
    if (curItem) send('dwell', curItem, Date.now() - itemEnter);
    itemEnter = Date.now();
    send('heartbeat', curItem, 1);
  }, 10000);

  window.addEventListener('pagehide', function(){
    if (navigator.sendBeacon) navigator.sendBeacon('/behavior-api/track', JSON.stringify({origin:'source',source:SRC,session:SID,kind:'exit',item:curItem}));
  });
  window.samsTrackAB = function(test, variant, impr, conv){
    return fetch('/ab-api/event', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({origin:'source',source:SRC,test:test,variant:variant,impressions:impr||0,conversions:conv||0})});
  };
})();