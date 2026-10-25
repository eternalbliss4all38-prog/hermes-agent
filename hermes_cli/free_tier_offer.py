<<<<<<< HEAD
"""When the free tier's "sign in for more" offer is due: after finished tasks, backing off.
=======
"""When a free-tier "sign in" offer is due: after finished tasks, backing off.

Two offers share one schedule. ``trial`` is the welcome trial's "sign in for more"; a finished task
is ``tui_gateway.free_tier_task_done``'s call. ``connector`` is for a guest that has connected an app
on its own model key; each app that connects counts as a finished task (``note_app_connected``).
>>>>>>> origin/main

The first offer comes ``OFFER_DELAY_S`` after the first finished task. Each later offer needs another
finished task after the previous offer, comes ``OFFER_DELAY_S`` after that task, and never sooner than
``REOFFER_AFTER_S[n]`` after the previous offer, so a user who keeps saying "Not now" hears it less
<<<<<<< HEAD
often. "Finished task" is ``tui_gateway.free_tier_task_done``'s call. The record is install-wide, at
``<default root>/free_tier/sign_in_offer.json``. Signing in ends the free tier, and with it every offer.
=======
often. Each record is install-wide, under ``<default root>/free_tier/``. Signing in ends the guest,
and with it every offer.
>>>>>>> origin/main
"""

from __future__ import annotations

import json
<<<<<<< HEAD
=======
import logging
>>>>>>> origin/main
import math
import threading
import time
from contextlib import contextmanager
<<<<<<< HEAD
from typing import Any, Dict, Iterator, Optional
=======
from typing import Any, Iterator, Optional

logger = logging.getLogger(__name__)
>>>>>>> origin/main

OFFER_DELAY_S = 180
REOFFER_AFTER_S = (60 * 60, 4 * 60 * 60, 24 * 60 * 60)  # after the 1st, 2nd, then every later offer

<<<<<<< HEAD
=======
TRIAL = "trial"
CONNECTOR = "connector"
CONNECTED_APP_FLAG = "has_connected_app"

_RECORDS = {TRIAL: "sign_in_offer.json", CONNECTOR: "connector_offer.json"}

>>>>>>> origin/main
_LOCK = threading.local()
_clock = time.time  # tests swap this for a fake clock


<<<<<<< HEAD
def _path():
    from hermes_constants import get_default_hermes_root
    return get_default_hermes_root() / "free_tier" / "sign_in_offer.json"


def _read() -> dict[str, Any]:
    try:
        data = json.loads(_path().read_text(encoding="utf-8-sig"))
=======
def _path(kind: str):
    from hermes_constants import get_default_hermes_root
    return get_default_hermes_root() / "free_tier" / _RECORDS[kind]


def _read(kind: str) -> dict[str, Any]:
    try:
        data = json.loads(_path(kind).read_text(encoding="utf-8-sig"))
>>>>>>> origin/main
    except (OSError, ValueError):
        return {}
    return data if isinstance(data, dict) and isinstance(data.get("first_task_at"), (int, float)) else {}


@contextmanager
<<<<<<< HEAD
def _transaction() -> Iterator[tuple[dict[str, Any], Any]]:
    from hermes_cli.auth import _file_lock
    from utils import atomic_write_text
    path = _path()
    with _file_lock(path.with_suffix(".lock"), _LOCK, 5.0, f"Timed out waiting for the sign-in offer record ({path})"):
        yield _read(), lambda data: atomic_write_text(path, json.dumps(data))


def _on_free_tier() -> bool:
    from hermes_cli import anon_auth
    return anon_auth.free_inference_active()
=======
def _transaction(kind: str) -> Iterator[tuple[dict[str, Any], Any]]:
    from hermes_cli.auth import _file_lock
    from utils import atomic_write_text
    path = _path(kind)
    with _file_lock(path.with_suffix(".lock"), _LOCK, 5.0, f"Timed out waiting for the sign-in offer record ({path})"):
        yield _read(kind), lambda data: atomic_write_text(path, json.dumps(data))


def _eligible(kind: str) -> bool:
    """``trial``: the welcome trial carries inference. ``connector``: a guest that connected an app,
    guests are still allowed (``nous.guest``), and no trial makes its own offer."""
    from hermes_cli import anon_auth
    if kind == TRIAL:
        return anon_auth.free_inference_active()
    state = anon_auth.current_nous_state()
    return (anon_auth.is_guest_state(state) and state.get(CONNECTED_APP_FLAG) is True and anon_auth.guest_allowed()
            and not anon_auth.free_inference_active(state))
>>>>>>> origin/main


def _due_at(state: dict[str, Any]) -> Optional[float]:
    if not state:
        return None
    offers = int(state.get("offers") or 0)
    last_task = float(state.get("last_task_at") or state["first_task_at"])
    if offers == 0:
        return float(state["first_task_at"]) + OFFER_DELAY_S
    last_offer = float(state.get("last_offered_at") or 0)
    if last_task <= last_offer:
        return None  # nothing finished since the last offer
    return max(last_task + OFFER_DELAY_S, last_offer + REOFFER_AFTER_S[min(offers, len(REOFFER_AFTER_S)) - 1])


<<<<<<< HEAD
def _due_in(state: dict[str, Any]) -> Optional[int]:
    due_at = _due_at(state)
    if due_at is None or not _on_free_tier():
=======
def _due_in(kind: str, state: dict[str, Any]) -> Optional[int]:
    due_at = _due_at(state)
    if due_at is None or not _eligible(kind):
>>>>>>> origin/main
        return None
    return max(0, math.ceil(due_at - _clock()))


<<<<<<< HEAD
def record_task_done() -> None:
    """A task finished on the free tier: the first one starts the offer clock, later ones re-arm it."""
    with _transaction() as (state, write):
=======
def record_task_done(kind: str = TRIAL) -> None:
    """A task finished: the first one starts the offer clock, later ones re-arm it."""
    with _transaction(kind) as (state, write):
>>>>>>> origin/main
        now = _clock()
        write({**state, "first_task_at": state.get("first_task_at", now), "last_task_at": now})


<<<<<<< HEAD
def offer_due_in() -> Optional[int]:
    """Seconds until the offer is due (0 = now); None when none is pending or the user is not on the
    free tier. A pure read."""
    return _due_in(_read())


def claim_offer() -> bool:
    """Compare-and-set under the lock: True for exactly one caller each time an offer comes due."""
    with _transaction() as (state, write):
        if _due_in(state) != 0:
=======
def note_app_connected() -> None:
    """An app finished connecting. On a guest identity, count a finished task for the connector offer,
    then flag the guest (so the flag dies with it). The flag ends list-read sightings, so it is set only
    once the task is recorded. Never fails the connection."""
    from hermes_cli import anon_auth
    try:
        if anon_auth.is_guest_state(anon_auth.current_nous_state()):
            record_task_done(CONNECTOR)
            anon_auth.set_guest_flag(CONNECTED_APP_FLAG)
    except Exception:
        logger.debug("connector sign-in offer record failed", exc_info=True)


def note_connected_apps_seen(rows: list[Any]) -> None:
    """A connector list read (agent status, the Connectors page). The first one that shows a guest an
    app connected counts as the connect: a connect by link (messaging, one-shot runs) never passes the
    operation watcher, and an older Hermes connected apps without setting the flag."""
    from hermes_cli import anon_auth
    if not any(isinstance(row, dict) and row.get("connected") for row in rows):
        return
    state = anon_auth.current_nous_state()
    if anon_auth.is_guest_state(state) and not state.get(CONNECTED_APP_FLAG):
        note_app_connected()


def offer_due_in(kind: str = TRIAL) -> Optional[int]:
    """Seconds until the offer is due (0 = now); None when none is pending or the user is not
    eligible for it. A pure read."""
    return _due_in(kind, _read(kind))


def claim_offer(kind: str = TRIAL) -> bool:
    """Compare-and-set under the lock: True for exactly one caller each time an offer comes due."""
    with _transaction(kind) as (state, write):
        if _due_in(kind, state) != 0:
>>>>>>> origin/main
            return False
        write({**state, "offers": int(state.get("offers") or 0) + 1, "last_offered_at": _clock()})
    return True
