<<<<<<< HEAD
"""``anon_auth.run_sign_in``: the one sign-in composition every surface renders.

Driven directly against the same fake account service ``hermes auth upgrade`` is tested with, so the
states, the persistence rules and the cancellation rules are exercised on the real wire rather than
mocked away. Each test asserts a single ruled property of the flow.
=======
"""``anon_auth.run_sign_in``: the one plain device-code sign-in every surface renders.

Driven directly against the same fake portal ``hermes auth upgrade`` is tested with, so the states,
the persistence rules, the cancel rules and the free tier's handoff are exercised on the real wire
rather than mocked away. Each test asserts a single ruled property of the flow.
>>>>>>> origin/main
"""

from __future__ import annotations

<<<<<<< HEAD
=======
import contextlib
import ssl
>>>>>>> origin/main
import threading
import time

import pytest

<<<<<<< HEAD
from hermes_cli import anon_auth
from hermes_cli.auth import _auth_file_path
from tests.hermes_cli.test_anon_upgrade import (
    EMAIL, FREE_PICK, PORTAL, WELCOME, _shared_store, _write_model_config, free_account, portal)

__all__ = ["free_account", "portal"]

=======
from hermes_cli import anon_auth, auth_device_flow
from hermes_cli.auth import _auth_file_path, _load_auth_store
from tests.hermes_cli.test_anon_upgrade import (
    EMAIL, FREE_PICK, PORTAL, WELCOME, _write_model_config, free_account, portal)

__all__ = ["free_account", "portal"]


>>>>>>> origin/main
def _drain(**kwargs):
    """Run a sign-in to its end and return every state it yielded."""
    return list(anon_auth.run_sign_in(**kwargs))

<<<<<<< HEAD
def _seed_free_tier() -> dict:
    return anon_auth.ensure_portal_identity(explicit=True)

def _stub_wait(monkeypatch, outcome, *, before=None):
    """Replace the promotion wait with one that returns *outcome* (running *before* first)."""
    def _wait(client, portal_base_url, claim_code, *, expires_in, interval, cancelled=None):
        if before is not None:
            before()
        return dict(outcome)
    monkeypatch.setattr(anon_auth, "wait_for_promotion", _wait)

def _voided(reason: str) -> dict:
    return {"status": "voided", "reason": reason}
=======

def _seed_free_tier() -> dict:
    return anon_auth.ensure_portal_identity(explicit=True)


def _auth_bytes() -> bytes:
    path = _auth_file_path()
    return path.read_bytes() if path.exists() else b""

>>>>>>> origin/main

def test_a_completed_sign_in_yields_code_waiting_then_completed(portal, free_account):
    _seed_free_tier()
    _write_model_config({"provider": "nous", "default": anon_auth.GUEST_MODEL, "base_url": WELCOME})

    states = _drain()

    assert [s.kind for s in states] == ["code", "waiting", "completed"]
    code, completed = states[0], states[-1]
<<<<<<< HEAD
    assert code.link.startswith(PORTAL)
    assert code.code == "clm_1"
=======
    assert code.link == f"{PORTAL}/device?user_code={portal.user_code}"
    assert code.code == portal.user_code
>>>>>>> origin/main
    assert completed.email == EMAIL
    assert completed.model == FREE_PICK
    assert completed.model_changed is True

<<<<<<< HEAD
def test_declined_yields_declined_and_persists_nothing(portal, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
    shared_before = _shared_store(tmp_path)
    portal.status_sequence = [_voided("user_declined")]

    terminal = [s for s in _drain() if s.terminal]

    assert len(terminal) == 1
    assert terminal[0].kind == "declined"
    assert terminal[0].copy == anon_auth.UPGRADE_REASON_COPY["user_declined"]
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before
    assert _shared_store(tmp_path) == shared_before

def test_a_timeout_yields_timed_out_and_keeps_the_enriched_detail(portal, monkeypatch):
    _seed_free_tier()
    _stub_wait(monkeypatch, {"status": "timeout"})

    state = _drain()[-1]
    assert state.kind == "timed_out"
    assert state.copy == anon_auth.UPGRADE_TIMED_OUT
    assert portal.token_grants == 0

    # The token poll can time out too, and its guidance is enriched at the source.
    from hermes_cli import auth_device_flow
    enriched = auth_device_flow._nous_device_auth_timeout_message(PORTAL)
    _stub_wait(monkeypatch, {"status": "completed", "account_email": EMAIL})

    def _timeout(**kwargs):
        raise TimeoutError(enriched)
    monkeypatch.setattr(auth_device_flow, "_poll_for_token", _timeout)

    state = _drain()[-1]
    assert state.kind == "timed_out"
    assert state.detail == enriched
    assert state.copy == anon_auth.UPGRADE_TIMED_OUT
    assert portal.token_grants == 0

def test_a_retired_identity_yields_retired_and_clears_the_free_tier(portal, monkeypatch):
    guest = _seed_free_tier()
    cleared = []
    real_clear = anon_auth.clear_dead_guest

    def _spy(reason, *, dead_token=None):
        cleared.append((reason, dead_token))
        real_clear(reason, dead_token=dead_token)
    monkeypatch.setattr(anon_auth, "clear_dead_guest", _spy)
    portal.status_sequence = [_voided("account_not_anonymous")]

    state = _drain()[-1]

    assert state.kind == "retired"
    assert state.copy == anon_auth.UPGRADE_REASON_COPY["account_retired"]
    assert cleared == [("retired", guest["anon_token"])]
    from hermes_cli.auth import _load_auth_store
    assert "nous" not in _load_auth_store().get("providers", {})

def test_a_server_superseded_outcome_yields_superseded(portal, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
    portal.status_sequence = [_voided("superseded")]

    state = _drain()[-1]

    assert state.kind == "superseded"
    assert state.copy == anon_auth.UPGRADE_REASON_COPY["superseded"]
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before

def test_a_retired_identity_yields_retired_even_when_cleanup_fails(portal, monkeypatch):
    _seed_free_tier()

    def _retired(*args, **kwargs):
        raise anon_auth.AnonCredentialDead("retired")

    def _read_only(*args, **kwargs):
        raise OSError("read-only store")

    monkeypatch.setattr(anon_auth, "register_promotion_intent", _retired)
    monkeypatch.setattr(anon_auth, "clear_dead_guest", _read_only)

    states = _drain()

    assert [s.kind for s in states] == ["retired"]

@pytest.mark.parametrize(
    "reason,expected",
    [("account_busy", anon_auth.UPGRADE_REASON_COPY["account_busy"]),
     ("wat", anon_auth.UPGRADE_NOT_COMPLETED)])
def test_an_unknown_reason_yields_failed_with_the_generic_copy(portal, reason, expected):
    _seed_free_tier()
    portal.status_sequence = [_voided(reason)]

    state = _drain()[-1]

    assert state.kind == "failed"
    assert state.copy == expected

def test_a_transport_error_yields_failed_without_leaking_the_detail_into_chat_copy(
        portal, monkeypatch, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
    detail = "boom at https://portal.example.test/api/anonymous/promotion-intent"

    def _boom(*a, **kw):
        raise RuntimeError(detail)
    monkeypatch.setattr(anon_auth, "register_promotion_intent", _boom)
=======

def test_no_surface_calls_the_promotion_endpoints(portal, free_account):
    _seed_free_tier()

    _drain()

    assert not [p for _, p in portal.calls if "promotion" in p]


def test_the_email_comes_from_the_access_token_not_the_claim_answer(portal, free_account):
    _seed_free_tier()
    portal.claim_reply = {**portal.claim_reply, "account_email": "someone-else@example.test"}

    assert _drain()[-1].email == EMAIL


def test_the_handoff_result_rides_the_completed_state(portal, free_account):
    _seed_free_tier()
    portal.claim_reply = {**portal.claim_reply, "connectors": {
        "kind": "moved", "moved_toolkits": ["gmail"], "dropped_toolkits": ["slack"]}}

    completed = _drain()[-1]

    assert completed.handoff == (f"Your apps moved to {EMAIL}: Gmail.", f"Reconnect in {EMAIL}: Slack.")
    assert completed.copy.splitlines()[:3] == [f"Signed in as {EMAIL}.", *completed.handoff]


def test_no_identity_on_disk_signs_in_without_minting_or_claiming(portal, free_account, monkeypatch):
    monkeypatch.setattr(anon_auth, "mint_guest",
                        lambda *a, **k: (_ for _ in ()).throw(AssertionError("run_sign_in must not mint")))

    states = _drain()

    assert states[-1].kind == "completed" and states[-1].handoff == ()
    assert portal.claims == []
    assert not anon_auth.is_guest_state(_load_auth_store()["providers"]["nous"])


def test_an_expired_code_yields_timed_out_and_keeps_the_enriched_detail(portal):
    _seed_free_tier()
    before = _auth_bytes()
    portal.token_pending, portal.expires_in = True, 1

    state = _drain()[-1]

    assert state.kind == "timed_out"
    assert state.copy == anon_auth.UPGRADE_TIMED_OUT
    assert state.detail == auth_device_flow._nous_device_auth_timeout_message(PORTAL)
    assert portal.token_grants == 0
    assert _auth_bytes() == before


def test_an_expired_token_answer_yields_timed_out(portal):
    _seed_free_tier()
    portal.token_error = "expired_token"

    state = _drain()[-1]

    assert state.kind == "timed_out" and state.copy == anon_auth.UPGRADE_TIMED_OUT
    assert portal.token_grants == 0


def test_the_portal_override_is_read_inside_the_profile_scope(portal, free_account, monkeypatch):
    in_scope = []

    @contextlib.contextmanager
    def _scope():
        in_scope.append(True)
        try:
            yield None
        finally:
            in_scope.pop()

    from hermes_cli import auth_nous
    reads = []
    real_override = auth_nous._nous_portal_env_override
    monkeypatch.setattr(auth_nous, "_nous_portal_env_override",
                        lambda: (reads.append(bool(in_scope)), real_override())[1])

    assert _drain(scope=_scope)[-1].kind == "completed"
    assert reads and all(reads[:1])


def test_the_portal_override_wins_over_a_saved_portal(portal, monkeypatch):
    guest = _seed_free_tier()
    from hermes_cli.auth import _save_auth_store, _save_provider_state
    store = _load_auth_store()
    _save_provider_state(store, "nous", {**guest, "portal_base_url": "https://portal.nousresearch.com"})
    _save_auth_store(store)
    asked = []

    def _record(client, portal_base_url, client_id, scope):
        asked.append(portal_base_url)
        raise RuntimeError("stop after the code request")
    monkeypatch.setattr(auth_device_flow, "_request_device_code", _record)

    _drain()

    assert asked == [PORTAL]


def test_a_transport_error_yields_failed_without_leaking_the_detail_into_chat_copy(portal, monkeypatch):
    _seed_free_tier()
    before = _auth_bytes()
    detail = "boom at https://portal.example.test/api/oauth/device/code"

    def _boom(*a, **kw):
        raise RuntimeError(detail)
    monkeypatch.setattr(auth_device_flow, "_request_device_code", _boom)
>>>>>>> origin/main

    state = _drain()[-1]

    assert state.kind == "failed"
    assert state.copy == anon_auth.UPGRADE_NOT_COMPLETED
<<<<<<< HEAD
    lowered = state.copy.lower()
    for banned in ("http://", "https://", "/anonymous/", "anonymous"):
        assert banned not in lowered
    assert detail in state.copy_terminal
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before
=======
    assert "https://" not in state.copy.lower()
    assert detail in state.copy_terminal
    assert _auth_bytes() == before

>>>>>>> origin/main

def test_a_persist_failure_yields_failed_rather_than_raising(portal, free_account, monkeypatch):
    _seed_free_tier()
    settles = []
    from hermes_cli import auth_nous
    monkeypatch.setattr(
        auth_nous, "persist_nous_credentials", lambda *a, **kw: (_ for _ in ()).throw(OSError("read-only home")))
    monkeypatch.setattr(anon_auth, "settle_after_upgrade", lambda state: settles.append(state) or {})

    states = _drain()

    assert states[-1].kind == "failed"
    assert states[-1].terminal is True
    assert "read-only home" in states[-1].copy_terminal
    assert settles == []

<<<<<<< HEAD
=======

>>>>>>> origin/main
def test_a_settle_failure_yields_failed_rather_than_raising(portal, free_account, monkeypatch):
    _seed_free_tier()
    persists = []
    from hermes_cli import auth_nous
    real_persist = auth_nous.persist_nous_credentials
    monkeypatch.setattr(
        auth_nous, "persist_nous_credentials",
        lambda state, **kw: (persists.append(state), real_persist(state, **kw))[1])

    def _boom(state):
        raise RuntimeError("config is read-only")
    monkeypatch.setattr(anon_auth, "settle_after_upgrade", _boom)

    states = _drain()

    assert states[-1].kind == "failed"
    assert "config is read-only" in states[-1].copy_terminal
    assert len(persists) == 1

<<<<<<< HEAD
def test_already_signed_in_short_circuits_before_any_network(portal):
    from hermes_cli.auth import _load_auth_store, _save_auth_store, _save_provider_state
=======

def test_already_signed_in_short_circuits_before_any_network_unless_replacing(portal):
    from hermes_cli.auth import _save_auth_store, _save_provider_state
>>>>>>> origin/main
    store = _load_auth_store()
    _save_provider_state(store, "nous", {"auth_method": "oauth_device_code", "access_token": "x"})
    _save_auth_store(store)
    portal.calls.clear()

    states = _drain()

    assert [s.kind for s in states] == ["already_signed_in"]
<<<<<<< HEAD
    assert states[0].ok is True
    assert states[0].precondition is True
    assert portal.calls == []

def test_guests_switched_off_yields_unavailable(portal):
    _seed_free_tier()
    from hermes_cli.config import load_config, save_config
    config = load_config()
    config["nous"] = {"guest": False}
    save_config(config)
    portal.calls.clear()

    states = _drain()

    assert [s.kind for s in states] == ["unavailable"]
    assert states[0].copy == anon_auth.UPGRADE_UNAVAILABLE_CHAT
    assert states[0].copy_terminal == anon_auth.UPGRADE_UNAVAILABLE
    assert portal.calls == []

def test_no_identity_on_disk_yields_unavailable_without_touching_the_portal(portal, monkeypatch):
    """A sign-in never creates the identity it signs in from (the trial claim and connector use do).
    With nothing on disk the flow yields ``Unavailable`` and makes no portal call and no mint attempt."""
    monkeypatch.setattr(anon_auth, "ensure_portal_identity",
                        lambda **kwargs: (_ for _ in ()).throw(AssertionError("run_sign_in must not mint")))
    monkeypatch.setattr(anon_auth, "mint_guest",
                        lambda *a, **k: (_ for _ in ()).throw(AssertionError("run_sign_in must not mint")))

    states = _drain()

    assert [s.kind for s in states] == ["unavailable"]
    assert states[-1].copy_terminal == anon_auth.UPGRADE_UNAVAILABLE
    assert states[-1].copy == anon_auth.UPGRADE_UNAVAILABLE_CHAT
    assert portal.calls == []

def test_cancelling_before_the_wait_persists_nothing(portal, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
=======
    assert states[0].ok is True and states[0].precondition is True
    assert portal.calls == []
    gen = anon_auth.run_sign_in(replace_account=True)
    assert next(gen).kind == "code"
    gen.close()


def test_cancelling_before_the_wait_persists_nothing(portal):
    _seed_free_tier()
    before = _auth_bytes()
>>>>>>> origin/main
    stop = []

    # Driven by hand so the flag flips exactly between the code and the wait.
    gen = anon_auth.run_sign_in(cancelled=lambda: bool(stop))
<<<<<<< HEAD
    first = next(gen)
    assert first.kind == "code"
    stop.append(True)
    rest = list(gen)

    assert [s.kind for s in rest] == ["superseded"]
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before

def test_cancelling_during_the_wait_ends_it_within_a_second(portal, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
    portal.status_sequence = [{"status": "pending"}]
    stop = threading.Event()
    outcomes = []
    real_wait = anon_auth.wait_for_promotion

    def _recording_wait(*args, **kwargs):
        outcome = real_wait(*args, **kwargs)
        outcomes.append(outcome)
        return outcome

    gen = anon_auth.run_sign_in(cancelled=stop.is_set)
    first = next(gen)
    assert first.kind == "code"
    anon_auth.wait_for_promotion = _recording_wait
    try:
        timer = threading.Timer(0.2, stop.set)
        timer.start()
        started = time.monotonic()
        rest = list(gen)
        elapsed = time.monotonic() - started
    finally:
        anon_auth.wait_for_promotion = real_wait
        timer.cancel()

    assert elapsed < 3.0
    assert outcomes == [{"status": "cancelled"}]
    assert [s.kind for s in rest] == ["waiting", "superseded"]
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before

@pytest.mark.parametrize("cancel_wins", [False, True])
def test_cancelling_during_a_completed_status_request_obeys_the_surface_policy(
        portal, free_account, cancel_wins):
    _seed_free_tier()
    calls = 0

    def _cancelled():
        nonlocal calls
        calls += 1
        return calls > 2

    states = _drain(cancelled=_cancelled, cancel_wins_after_promotion=cancel_wins)

    assert states[-1].kind == ("superseded" if cancel_wins else "completed")
    assert portal.token_grants == (0 if cancel_wins else 1)
    from hermes_cli.auth import _load_auth_store
    state = _load_auth_store()["providers"]["nous"]
    assert anon_auth.is_guest_state(state) is cancel_wins

def _cancel_after_a_completed_promotion(portal, monkeypatch, *, cancel_wins: bool):
    _seed_free_tier()
    stop = threading.Event()

    def _wait(client, portal_base_url, claim_code, *, expires_in, interval, cancelled=None):
        stop.set()   # the surface cancels while this call is blocked
        return {"status": "completed", "user_id": "nas_user:9", "account_email": EMAIL}
    monkeypatch.setattr(anon_auth, "wait_for_promotion", _wait)
    return list(anon_auth.run_sign_in(
        cancelled=stop.is_set, cancel_wins_after_promotion=cancel_wins))

def test_a_desktop_style_cancel_after_a_completed_promotion_persists_nothing(
        portal, free_account, monkeypatch, tmp_path):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()

    states = _cancel_after_a_completed_promotion(portal, monkeypatch, cancel_wins=True)

    assert states[-1].kind == "superseded"
    assert portal.token_grants == 0
    assert _auth_file_path().read_bytes() == before

def test_a_gateway_style_supersede_after_a_completed_promotion_still_signs_in(
        portal, free_account, monkeypatch):
    states = _cancel_after_a_completed_promotion(portal, monkeypatch, cancel_wins=False)

    assert states[-1].kind == "completed"
    assert portal.token_grants == 1
    from hermes_cli.auth import _load_auth_store
    state = _load_auth_store()["providers"]["nous"]
    assert not anon_auth.is_guest_state(state)

def test_a_persist_guard_that_refuses_persists_nothing_and_never_settles(
        portal, free_account, monkeypatch, tmp_path):
    import contextlib
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
=======
    assert next(gen).kind == "code"
    stop.append(True)

    assert [s.kind for s in gen] == ["cancelled"]
    assert portal.token_polls == 0
    assert _auth_bytes() == before


def test_cancelling_during_the_token_poll_stops_it_within_a_second(portal):
    _seed_free_tier()
    before = _auth_bytes()
    portal.token_pending = True
    stop = threading.Event()

    gen = anon_auth.run_sign_in(cancelled=stop.is_set)
    assert next(gen).kind == "code"
    timer = threading.Timer(0.2, stop.set)
    timer.start()
    try:
        started = time.monotonic()
        rest = [s.kind for s in gen]
        elapsed = time.monotonic() - started
    finally:
        timer.cancel()
    polls = portal.token_polls

    assert rest == ["waiting", "cancelled"]
    assert elapsed < 3.0
    assert polls >= 1 and portal.token_polls == polls     # the generator is done: nothing polls on
    assert _auth_bytes() == before


def test_a_cancel_that_lands_with_the_token_grant_still_saves_nothing(portal, free_account):
    _seed_free_tier()
    before = _auth_bytes()
    stop = threading.Event()
    portal.on_token = stop.set

    states = _drain(cancelled=stop.is_set)

    assert states[-1].kind == "cancelled"
    assert portal.token_grants == 1
    assert _auth_bytes() == before
    assert portal.claims == []


def test_a_persist_guard_that_refuses_persists_nothing_and_never_settles(portal, free_account, monkeypatch):
    _seed_free_tier()
    before = _auth_bytes()
>>>>>>> origin/main
    settles = []
    monkeypatch.setattr(anon_auth, "settle_after_upgrade", lambda state: settles.append(state) or {})

    @contextlib.contextmanager
    def _refuse():
        yield False

<<<<<<< HEAD
    states = list(anon_auth.run_sign_in(persist_guard=_refuse))

    assert states[-1].kind == "superseded"
    assert settles == []
    assert _auth_file_path().read_bytes() == before

def test_persistence_happens_only_after_the_promotion_and_the_token_grant(portal, free_account):
    _seed_free_tier()
    before = _auth_file_path().read_bytes()
    seen = {}
    for state in anon_auth.run_sign_in():
        seen[state.kind] = _auth_file_path().read_bytes()
=======
    states = _drain(persist_guard=_refuse)

    assert states[-1].kind == "cancelled"
    assert settles == []
    assert _auth_bytes() == before


def test_persistence_happens_only_after_the_token_grant(portal, free_account):
    _seed_free_tier()
    before = _auth_bytes()
    seen = {state.kind: _auth_bytes() for state in anon_auth.run_sign_in()}
>>>>>>> origin/main

    assert seen["code"] == before
    assert seen["waiting"] == before
    assert seen["completed"] != before
<<<<<<< HEAD
    paths = [p for _, p in portal.calls]
    assert "/api/oauth/token" in paths

def test_the_scope_is_entered_for_the_preconditions_and_the_persist_but_never_around_a_wait(
        portal, free_account, monkeypatch):
    import contextlib
=======


def test_a_token_without_a_scope_keeps_the_requested_scope(portal, free_account, monkeypatch):
    from hermes_cli import auth_nous
    from hermes_cli.auth import PROVIDER_REGISTRY
    real_poll = auth_device_flow._poll_for_token
    monkeypatch.setattr(auth_device_flow, "_poll_for_token",
                        lambda **kw: {k: v for k, v in real_poll(**kw).items() if k != "scope"})
    saved = []
    real_persist = auth_nous.persist_nous_credentials
    monkeypatch.setattr(auth_nous, "persist_nous_credentials",
                        lambda state, **kw: (saved.append(state), real_persist(state, **kw))[1])

    assert _drain()[-1].kind == "completed"
    assert saved[0]["scope"] == PROVIDER_REGISTRY["nous"].scope


def test_the_ca_bundle_is_honoured_for_the_whole_sign_in(portal, free_account, monkeypatch):
    import certifi
    monkeypatch.setenv("HERMES_CA_BUNDLE", certifi.where())
    seen = []
    from hermes_cli import auth_nous
    real_client = auth_nous._nous_http_client

    def _recording(timeout_seconds, verify):
        seen.append(verify)
        return real_client(timeout_seconds, verify)

    assert _drain(client_factory=_recording)[-1].kind == "completed"
    assert seen and isinstance(seen[0], ssl.SSLContext)


def test_the_scope_is_entered_for_the_precondition_and_the_persist_but_never_around_a_wait(
        portal, free_account, monkeypatch):
>>>>>>> origin/main
    _seed_free_tier()
    events = []

    @contextlib.contextmanager
    def _scope():
<<<<<<< HEAD
        events.append(("enter", time.monotonic(), threading.get_ident()))
        try:
            yield None
        finally:
            events.append(("exit", time.monotonic(), threading.get_ident()))

    def _wait(client, portal_base_url, claim_code, *, expires_in, interval, cancelled=None):
        events.append(("wait-start", time.monotonic(), threading.get_ident()))
        time.sleep(0.2)
        events.append(("wait-end", time.monotonic(), threading.get_ident()))
        return {"status": "completed", "account_email": EMAIL}
    monkeypatch.setattr(anon_auth, "wait_for_promotion", _wait)

    states = []
    yields = []
    for state in anon_auth.run_sign_in(scope=_scope):
        yields.append(time.monotonic())
        states.append(state)

    assert states[-1].kind == "completed"
    pairs = [e for e in events if e[0] in ("enter", "exit")]
    assert [e[0] for e in pairs] == ["enter", "exit", "enter", "exit"]
    for first, second in (pairs[0:2], pairs[2:4]):
        assert first[2] == second[2]      # one thread per scope
    wait_start = next(e[1] for e in events if e[0] == "wait-start")
    wait_end = next(e[1] for e in events if e[0] == "wait-end")
    for first, second in (pairs[0:2], pairs[2:4]):
        assert not (first[1] <= wait_start and wait_end <= second[1])
        # and never held across a yield, which would hand the scope to the consumer's thread
        assert not any(first[1] <= at <= second[1] for at in yields)
=======
        events.append(("enter", threading.get_ident()))
        try:
            yield None
        finally:
            events.append(("exit", threading.get_ident()))

    real_poll = auth_device_flow._poll_for_token

    def _poll(**kwargs):
        events.append(("poll", threading.get_ident()))
        return real_poll(**kwargs)
    monkeypatch.setattr(auth_device_flow, "_poll_for_token", _poll)

    states = []
    for state in anon_auth.run_sign_in(scope=_scope):
        events.append(("yield", threading.get_ident()))
        states.append(state)

    assert states[-1].kind == "completed"
    kinds = [kind for kind, _ in events]
    assert kinds == ["enter", "exit", "yield", "yield", "poll", "enter", "exit", "yield"]
>>>>>>> origin/main
