<<<<<<< HEAD
"""Desktop (dashboard API) sign-in over a Nous free-tier identity.

``POST /api/providers/oauth/nous/start`` registers the connector transfer with the account service
and hands the renderer the transfer's code and consent URL; the poller waits for the transfer, then
takes the token grant, persists the account, and settles the default model. Driven through the real
FastAPI routes against a fake account service (the same fake ``hermes auth upgrade`` is tested with).
=======
"""Desktop (dashboard API) Nous sign-in: the plain device-code login, then the free tier's handoff.

``POST /api/providers/oauth/nous/start`` hands the renderer the device page and code; the poller
takes the token grant, persists the account, moves a replaced free tier's apps, and settles the
default model. Driven through the real FastAPI routes against a fake portal (the same fake
``hermes auth upgrade`` is tested with).
>>>>>>> origin/main
"""

from __future__ import annotations

import time

import pytest
from fastapi.testclient import TestClient

from hermes_cli import anon_auth
from hermes_cli.auth import _load_auth_store
from hermes_cli.web_server import _SESSION_TOKEN, app
from tests.hermes_cli.anon_portal import as_local_desktop_backend, claimed_trial
from tests.hermes_cli.test_anon_upgrade import (
    EMAIL, FREE_PICK, INFERENCE, PORTAL, WELCOME, _model_config, _write_model_config, free_account, portal)

client = TestClient(app)
HEADERS = {"X-Hermes-Session-Token": _SESSION_TOKEN}

__all__ = ["free_account", "portal"]  # fixtures imported from the CLI test module


def _wait_for_terminal(session_id: str, timeout: float = 10.0) -> dict:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        body = client.get(f"/api/providers/oauth/nous/poll/{session_id}", headers=HEADERS).json()
        if body["status"] != "pending":
            return body
        time.sleep(0.05)
    pytest.fail("poller never left pending")


<<<<<<< HEAD
def test_start_registers_the_transfer_and_completion_settles_the_account(portal, free_account):
=======
def test_start_shows_the_device_code_and_completion_reports_what_moved(portal, free_account):
>>>>>>> origin/main
    anon_auth.ensure_portal_identity(explicit=True)
    _write_model_config({"provider": "nous", "default": anon_auth.GUEST_MODEL, "base_url": WELCOME})

    resp = client.post("/api/providers/oauth/nous/start", headers=HEADERS)
    assert resp.status_code == 200, resp.text
    start = resp.json()
<<<<<<< HEAD
    # The renderer shows the transfer's code and consent page, not the generic device page.
    assert start["user_code"] == "clm_1"
    assert start["verification_url"] == f"{PORTAL}/device"
    assert portal.intent_bodies[0]["user_code"] == portal.user_code
    assert portal.intent_bodies[0]["device_code"] == portal.device_code
=======
    assert start["user_code"] == portal.user_code
    assert start["verification_url"] == f"{PORTAL}/device?user_code={portal.user_code}"
>>>>>>> origin/main

    body = _wait_for_terminal(start["session_id"])
    assert body["status"] == "approved"
    assert body["account_email"] == EMAIL
    assert body["model"] == FREE_PICK
<<<<<<< HEAD
=======
    assert body["handoff"] == [f"Your apps moved to {EMAIL}: Gmail."]
    assert not [p for _, p in portal.calls if "promotion" in p]
>>>>>>> origin/main
    state = _load_auth_store()["providers"]["nous"]
    assert "anon_token" not in state and not anon_auth.is_guest_state(state)
    model_cfg = _model_config()
    assert model_cfg["default"] == FREE_PICK
    assert model_cfg["base_url"] == INFERENCE.rstrip("/")
    assert not anon_auth.route_is_welcome_host(model_cfg["base_url"])


<<<<<<< HEAD
def test_a_transfer_the_user_declined_is_reported_with_its_reason_and_keeps_the_free_tier(portal, free_account):
    guest = anon_auth.ensure_portal_identity(explicit=True)
    portal.status_sequence = [{"status": "voided", "reason": "user_declined"}]

    start = client.post("/api/providers/oauth/nous/start", headers=HEADERS).json()
    body = _wait_for_terminal(start["session_id"])
    assert body["status"] == "denied"
    assert body["reason"] == "user_declined"
    assert body["error_message"] == anon_auth.UPGRADE_REASON_COPY["user_declined"]
    assert portal.token_grants == 0
=======
def test_an_expired_code_reports_the_timeout_reason_and_keeps_the_free_tier(portal):
    guest = anon_auth.ensure_portal_identity(explicit=True)
    portal.token_pending, portal.expires_in = True, 1

    start = client.post("/api/providers/oauth/nous/start", headers=HEADERS).json()
    body = _wait_for_terminal(start["session_id"])
    assert body["status"] == "error"
    assert body["reason"] == "timeout"
>>>>>>> origin/main
    assert _load_auth_store()["providers"]["nous"]["anon_token"] == guest["anon_token"]


def test_status_routes_report_the_free_tier(portal, monkeypatch):
    claimed_trial(monkeypatch)
    portal_status = client.get("/api/portal", headers=HEADERS).json()
    assert portal_status["free_tier"] is True
    assert portal_status["account_tier"] == "anonymous"
    providers = client.get("/api/providers/oauth", headers=HEADERS).json()["providers"]
    nous = next(p for p in providers if p["id"] == "nous")
    assert nous["status"]["free_tier"] is True


def test_a_connector_only_guest_is_not_reported_as_the_free_tier(portal, monkeypatch):
    as_local_desktop_backend(monkeypatch)
    anon_auth.ensure_portal_identity(explicit=True)
    assert client.get("/api/portal", headers=HEADERS).json()["free_tier"] is False
    providers = client.get("/api/providers/oauth", headers=HEADERS).json()["providers"]
    nous = next(p for p in providers if p["id"] == "nous")
    assert not nous["status"].get("free_tier")


<<<<<<< HEAD
def test_a_sign_in_cancelled_while_waiting_never_persists_the_account(portal, free_account, monkeypatch):
    """The poller is blocked on the transfer when the user cancels; when the wait returns completed,
    nothing may reach the auth store."""
    import threading
    from hermes_cli import web_server_oauth
    guest = anon_auth.ensure_portal_identity(explicit=True)
    release = threading.Event()

    def _wait_until_released(client, portal_base_url, claim_code, *, expires_in, interval, cancelled=None):
        release.wait(10)
        return {"status": "completed", "user_id": "nas_user:9", "account_email": EMAIL}
    monkeypatch.setattr(anon_auth, "wait_for_promotion", _wait_until_released)
=======
def test_a_sign_in_cancelled_while_waiting_stops_the_token_poll_and_persists_nothing(portal, free_account):
    """The poller is blocked on the token endpoint when the user cancels: the poll stops, and
    nothing reaches the auth store."""
    import threading
    from hermes_cli import web_server_oauth
    guest = anon_auth.ensure_portal_identity(explicit=True)
    portal.token_pending = True
>>>>>>> origin/main

    threads_before = set(threading.enumerate())
    start = client.post("/api/providers/oauth/nous/start", headers=HEADERS).json()
    assert client.delete(f"/api/providers/oauth/sessions/{start['session_id']}", headers=HEADERS).json()["ok"] is True
<<<<<<< HEAD
    release.set()
    # Let the poller finish whatever it does with the "completed" result before asserting.
    for t in set(threading.enumerate()) - threads_before:
        t.join(timeout=5)
=======
    for t in set(threading.enumerate()) - threads_before:
        t.join(timeout=5)
        assert not t.is_alive()
    portal.token_pending = False
>>>>>>> origin/main
    assert portal.token_grants == 0
    state = _load_auth_store()["providers"]["nous"]
    assert state["anon_token"] == guest["anon_token"] and anon_auth.is_guest_state(state)
    assert web_server_oauth._oauth_sessions.get(start["session_id"]) is None
