"""Page-driven JS must not bypass the browser SSRF guard via URL literals.

``fetch('http://127.0.0.1/secret')`` never updates ``location.href``, so no page-URL recheck can see it.
``browser_exec`` pre-scans every URL literal in the code it runs (``_code_url_verdict``) and
``browser_cdp`` pre-scans ``Runtime.evaluate`` expressions (``expression_targets_private_url``): a
private-host literal is refused before anything reaches the browser.

Sibling fix for the eval return-value path of issue #44731.
"""

import json

import pytest

<<<<<<< HEAD
from tools import browser_tool
from tools import browser_tool_eval_policy as bt_eval_policy
from tools import browser_tool_cloud as bt_cloud
from tools import browser_tool_session as bt_session

=======
from tools import browser_session_cloud, browser_url_policy, browser_use_cli
>>>>>>> origin/main

PRIVATE_URL = "http://127.0.0.1:8080/secret"
PUBLIC_URL = "https://example.com/page"
METADATA_URL = "http://169.254.169.254/latest/meta-data/"


@pytest.fixture(autouse=True)
def _no_policy_or_hybrid(monkeypatch):
    monkeypatch.setattr(browser_url_policy, "check_website_access", lambda url: None)
    monkeypatch.setattr(browser_url_policy, "hybrid_routes_locally", lambda url: False)


class TestExpressionPreScan:
    def _guard_on(self, monkeypatch):
<<<<<<< HEAD
        monkeypatch.setattr(bt_cloud, "_is_local_backend", lambda: False)
        monkeypatch.setattr(browser_tool, "_is_local_sidecar_key", lambda key: False)
        monkeypatch.setattr(bt_cloud, "_allow_private_urls", lambda: False)
=======
        monkeypatch.setattr(browser_session_cloud, "is_local_backend", lambda: False)
        monkeypatch.setattr(browser_session_cloud, "allow_private_urls", lambda: False)
>>>>>>> origin/main

    def test_blocks_private_fetch_literal(self, monkeypatch):
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: False)

        def _never_spawn():
            raise AssertionError("browser-harness must not run for a private URL literal")

        monkeypatch.setattr(browser_use_cli, "_find_cli", _never_spawn)

<<<<<<< HEAD
        monkeypatch.setattr(bt_session, "_run_browser_command", _run)

        result = _eval(f"fetch('{PRIVATE_URL}').then(r => r.text())")
        assert result["success"] is False
=======
        result = json.loads(browser_use_cli.browser_exec(f"js(\"fetch('{PRIVATE_URL}').then(r => r.text())\")"))
>>>>>>> origin/main
        assert "private or internal address" in result["error"]

    def test_blocks_metadata_fetch_literal(self, monkeypatch):
        self._guard_on(monkeypatch)
        # Public-safe to is_safe_url, but the always-blocked floor catches IMDS.
<<<<<<< HEAD
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: True)
        monkeypatch.setattr(
            browser_tool, "_is_always_blocked_url",
            lambda url: "169.254.169.254" in url,
        )
        monkeypatch.setattr(
            bt_session, "_run_browser_command",
            lambda *a, **k: {"success": True, "data": {"result": "creds"}},
        )
=======
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: True)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: "169.254.169.254" in url)
>>>>>>> origin/main

        verdict = browser_use_cli._code_url_verdict(f"js(\"fetch('{METADATA_URL}')\")")
        assert verdict.blocked is not None
        assert "cloud metadata endpoint" in verdict.blocked

    def test_allows_public_fetch_literal(self, monkeypatch):
        self._guard_on(monkeypatch)
<<<<<<< HEAD
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: True)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        # After the (public) eval, the page-URL recheck must also see a public URL.
        monkeypatch.setattr(
            bt_session, "_run_browser_command",
            lambda task_id, command, args=None, **k: (
                {"success": True, "data": {"result": PUBLIC_URL}}
                if args == ["window.location.href"]
                else {"success": True, "data": {"result": "ok"}}
            ),
        )

        result = _eval(f"fetch('{PUBLIC_URL}').then(r => r.text())")
        assert result["success"] is True
        assert result["result"] == "ok"
=======
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: True)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: False)
>>>>>>> origin/main

        verdict = browser_use_cli._code_url_verdict(f"js(\"fetch('{PUBLIC_URL}').then(r => r.text())\")")
        assert verdict.blocked is None

    def test_skips_prescan_when_allow_private(self, monkeypatch):
<<<<<<< HEAD
        monkeypatch.setattr(bt_cloud, "_is_local_backend", lambda: False)
        monkeypatch.setattr(browser_tool, "_is_local_sidecar_key", lambda key: False)
        monkeypatch.setattr(bt_cloud, "_allow_private_urls", lambda: True)
        monkeypatch.setattr(
            bt_session, "_run_browser_command",
            lambda *a, **k: {"success": True, "data": {"result": "allowed"}},
        )
        result = _eval(f"fetch('{PRIVATE_URL}')")
        assert result["success"] is True


# ---------------------------------------------------------------------------
# Sub-path 2: navigate-then-read (post-eval page-URL recheck)
# ---------------------------------------------------------------------------


class TestCamofoxEvalGuard:
    def _guard_on(self, monkeypatch):
        monkeypatch.setattr(browser_tool, "_is_camofox_mode", lambda: True)
        monkeypatch.setattr(bt_cloud, "_is_local_backend", lambda: False)
        monkeypatch.setattr(browser_tool, "_is_local_sidecar_key", lambda key: False)
        monkeypatch.setattr(bt_cloud, "_allow_private_urls", lambda: False)

    def test_camofox_blocks_private_fetch_literal_before_request(self, monkeypatch):
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)

        import tools.browser_camofox as camofox

        def fail_session(*_args, **_kwargs):
            raise AssertionError("Camofox request should not run for a private URL literal")

        monkeypatch.setattr(camofox, "_ensure_tab", fail_session)

        result = _eval(f"fetch('{PRIVATE_URL}').then(r => r.text())")

        assert result["success"] is False
        assert "private or internal address" in result["error"]
        assert PRIVATE_URL in result["error"]

    def test_camofox_blocks_when_current_page_is_private(self, monkeypatch):
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)

        import tools.browser_camofox as camofox

        monkeypatch.setattr(camofox, "_ensure_tab", lambda task_id: {"tab_id": "tab-1", "user_id": "user-1"})

        def fake_post(path, body=None, **_kwargs):
            if body and body.get("expression") == "window.location.href":
                return {"result": PRIVATE_URL}
            return {"result": "secret DOM text"}

        monkeypatch.setattr(camofox, "_post", fake_post)

        result = _eval("document.body.innerText")

        assert result["success"] is False
        assert "private or internal address" in result["error"]
        assert PRIVATE_URL in result["error"]
        assert "secret DOM text" not in json.dumps(result)

    def test_camofox_uses_raw_task_id_not_resolved_session_key(self, monkeypatch):
        # Camofox keeps its own raw-task_id-keyed session map; eval must pass the
        # raw task_id (like every sibling Camofox tool), NOT the agent-browser
        # _last_session_key-resolved key, or it can hit a different/new tab and
        # skip the pre-scan via a mismatched _is_local_sidecar_key check.
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: True)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        monkeypatch.setattr(
            browser_tool, "_last_session_key", lambda task_id: "resolved-agent-browser-key"
        )

        import tools.browser_camofox as camofox

        seen = {}

        def record_tab(task_id):
            seen["task_id"] = task_id
            return {"tab_id": "tab-1", "user_id": "user-1"}

        monkeypatch.setattr(camofox, "_ensure_tab", record_tab)
        monkeypatch.setattr(
            camofox, "_post", lambda path, body=None, **_kw: {"result": "https://example.com"}
        )

        result = _eval("document.title", task_id="test")

        assert result["success"] is True
        assert seen["task_id"] == "test"


class TestPostEvalPageRecheck:
    def _guard_on(self, monkeypatch):
        monkeypatch.setattr(bt_cloud, "_is_local_backend", lambda: False)
        monkeypatch.setattr(browser_tool, "_is_local_sidecar_key", lambda key: False)
        monkeypatch.setattr(bt_cloud, "_allow_private_urls", lambda: False)

    def test_blocks_when_page_navigated_private(self, monkeypatch):
        self._guard_on(monkeypatch)
        # Expression itself has no URL literal (reads the DOM), so the pre-scan
        # passes; the danger is that the page was navigated to a private URL by
        # an earlier eval. The recheck must catch it.
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        monkeypatch.setattr(
            bt_session, "_run_browser_command",
            lambda task_id, command, args=None, **k: (
                {"success": True, "data": {"result": PRIVATE_URL}}
                if args == ["window.location.href"]
                else {"success": True, "data": {"result": "secret DOM text"}}
            ),
        )

        result = _eval("document.body.innerText")
        assert result["success"] is False
        assert "private or internal address" in result["error"]
        assert PRIVATE_URL in result["error"]

    def test_allows_when_page_public(self, monkeypatch):
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: True)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        monkeypatch.setattr(
            bt_session, "_run_browser_command",
            lambda task_id, command, args=None, **k: (
                {"success": True, "data": {"result": PUBLIC_URL}}
                if args == ["window.location.href"]
                else {"success": True, "data": {"result": "public DOM text"}}
            ),
        )

        result = _eval("document.body.innerText")
        assert result["success"] is True
        assert result["result"] == "public DOM text"

    def test_fail_open_when_url_probe_fails(self, monkeypatch):
        """If the window.location.href probe errors, don't block (fail-open)."""
        self._guard_on(monkeypatch)
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)

        def _run(task_id, command, args=None, **k):
            if args == ["window.location.href"]:
                return {"success": False, "error": "CDP probe failed"}
            return {"success": True, "data": {"result": "dom text"}}

        monkeypatch.setattr(bt_session, "_run_browser_command", _run)

        result = _eval("document.body.innerText")
        assert result["success"] is True
        assert result["result"] == "dom text"


# ---------------------------------------------------------------------------
# Helper-level unit tests
# ---------------------------------------------------------------------------
=======
        monkeypatch.setattr(browser_session_cloud, "is_local_backend", lambda: False)
        monkeypatch.setattr(browser_session_cloud, "allow_private_urls", lambda: True)
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: False)

        verdict = browser_use_cli._code_url_verdict(f"js(\"fetch('{PRIVATE_URL}')\")")
        assert verdict.blocked is None
>>>>>>> origin/main


class TestExpressionScanHelper:
    def test_returns_first_private_literal(self, monkeypatch):
<<<<<<< HEAD
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: "127.0.0.1" not in url)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        out = bt_eval_policy._expression_targets_private_url(
=======
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: "127.0.0.1" not in url)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: False)
        out = browser_url_policy.expression_targets_private_url(
>>>>>>> origin/main
            "fetch('https://example.com'); fetch('http://127.0.0.1/x')"
        )
        assert out == "http://127.0.0.1/x"

    def test_strips_trailing_punctuation(self, monkeypatch):
<<<<<<< HEAD
        monkeypatch.setattr(browser_tool, "_is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_tool, "_is_always_blocked_url", lambda url: False)
        out = bt_eval_policy._expression_targets_private_url("location.href='http://10.0.0.1/';")
=======
        monkeypatch.setattr(browser_url_policy, "is_safe_url", lambda url: False)
        monkeypatch.setattr(browser_url_policy, "is_always_blocked_url", lambda url: False)
        out = browser_url_policy.expression_targets_private_url("location.href='http://10.0.0.1/';")
>>>>>>> origin/main
        assert out == "http://10.0.0.1/"
