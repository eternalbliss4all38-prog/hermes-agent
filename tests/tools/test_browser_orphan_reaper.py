"""Tests for the browser orphan reaper: Chromium launched by a Hermes process that exited without
cleaning up is found through the launcher's per-profile records and stopped, but only after its
identity is proven (``tools.browser_launcher.reap_orphaned_browsers``, driven by
``browser_session_lifecycle.reap_orphaned_browser_sessions``)."""

import json
import os
import subprocess
import sys
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import pytest
from tools import browser_tool_lifecycle as bt_lifecycle

from tests.waiting import wait_until
from tools import browser_launcher as launcher
from tools.browser_launcher_holders import ns_identity
from tools import browser_session as bs
from tools import browser_session_lifecycle as lifecycle

_DEAD_OWNER = 99999
_LIVE_OTHER_OWNER = 88888


@pytest.fixture
def records(monkeypatch):
    """The test profile's launch records dir; nothing is ever signalled (``_terminate`` only records)."""
    from hermes_constants import get_hermes_home
    home = Path(get_hermes_home())
    path = home / "cache" / "browser" / "chromium-records"
    path.mkdir(mode=0o700, parents=True)
    monkeypatch.setattr(launcher, "_records_dir", lambda *_home: path)  # this profile's dir, from any caller
    monkeypatch.setattr(launcher, "_served_homes", set(), raising=False)
    monkeypatch.setattr(launcher, "_browsers", {})
    monkeypatch.setattr(launcher, "_procs", {})
    terminated = []
    monkeypatch.setattr(launcher, "_terminate", lambda pid, start_time, proc: terminated.append(pid))
    return SimpleNamespace(dir=path, terminated=terminated,
                           ephemeral=lambda name: str(home / "cache" / "browser" / "chromium" / name))


def _record(records, *, pid: int, udd: str, owner_pid: int = _DEAD_OWNER, start_time=777,
            ephemeral: bool = True) -> Path:
    path = records.dir / f"rec-{pid}.json"
    path.write_text(json.dumps({"owner_pid": owner_pid, "owner_start_time": None, "pid": pid,
                                "start_time": start_time, "user_data_dir": udd, "home_key": "x",
                                "ephemeral": ephemeral, "ns": ns_identity()}))
    return path


def _alive(*pids):
    return lambda pid: pid in pids


class TestReapOrphanedBrowserSessions:
    """Tests for the orphan reaper function."""

<<<<<<< HEAD

    def test_stale_dir_without_pid_file_is_removed(self, fake_tmpdir):
        """Socket dir with no PID file is cleaned up."""
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions
        d = _make_socket_dir(fake_tmpdir, "h_abc1234567")
        assert d.exists()
        with patch(
            "tools.browser_tool_lifecycle._socket_dir_idle_seconds",
            return_value=10_000,
        ):
            _reap_orphaned_browser_sessions()
        assert not d.exists()

    def test_fresh_dir_without_pid_file_survives_creator_race(self, fake_tmpdir):
        """A concurrent reaper must not delete a session still starting."""
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(fake_tmpdir, "h_starting1234")
        with patch(
            "tools.browser_tool_lifecycle._socket_dir_idle_seconds",
            return_value=0.0,
        ):
            _reap_orphaned_browser_sessions()

        assert d.exists()

=======
    def test_real_profile_browser_is_reaped_when_owner_is_dead_and_its_copy_kept(self, records, tmp_path,
                                                                                 monkeypatch):
        """#100855: the shared real-profile browser is not ``<prefix>_<hex>`` named, so it must still be
        found. Same owner-liveness rule as every other lane: dead owner => reaped. Its persistent
        profile copy is never deleted by the reap."""
        copy_dir = tmp_path / "browser-profile" / "chrome"
        copy_dir.mkdir(parents=True)
        rec = _record(records, pid=4242, udd=str(copy_dir), ephemeral=False)
        monkeypatch.setattr(launcher, "_pid_alive", _alive(4242))  # browser alive, owning hermes gone
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
        monkeypatch.setattr("tools.browser_lightpanda.reap_orphaned_lightpanda", lambda: 0)

        assert lifecycle.reap_orphaned_browser_sessions() == 1

        assert records.terminated == [4242]
        assert not rec.exists()
        assert copy_dir.exists()
>>>>>>> origin/main

    def test_unfingerprintable_browser_is_refused(self, records, tmp_path, monkeypatch):
        """No start-time fingerprint -> the kill is refused (fail closed).

        A PID whose identity cannot be pinned could be recycled between the verify and the
        tree-kill, so it must be left alone.
        """
<<<<<<< HEAD
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions
=======
        _record(records, pid=12345, udd=records.ephemeral("p"), start_time=None)
        monkeypatch.setattr(launcher, "_pid_alive", _alive(12345))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: None)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
>>>>>>> origin/main

        launcher.reap_orphaned_browsers()

<<<<<<< HEAD
        terminate_calls = []

        def mock_terminate(pid, expected_start=None):
            terminate_calls.append(pid)

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("gateway.status.get_process_start_time", return_value=777), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid", side_effect=mock_terminate):
            _reap_orphaned_browser_sessions()

        assert 12345 in terminate_calls
        assert not d.exists()
=======
        assert records.terminated == []
>>>>>>> origin/main

    def test_real_profile_attach_daemon_is_reaped_when_owner_is_dead(self, fake_tmpdir):
        """#100855: the shared ``hermes-real-profile`` attach daemon is not ``<prefix>_<hex>``
        named, so the reaper's glob never saw it and a wedged daemon + headless Chrome outlived
        gateway restarts. Same owner-liveness rule as every other lane: dead owner => reaped."""
        import tools.browser_tool as bt
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(fake_tmpdir, bt._REAL_PROFILE_SESSION, pid=4242, owner_pid=99999)
        terminate_calls = []

        def _pid_exists(pid):
            return pid == 4242  # daemon alive, owning hermes gone

        with patch("gateway.status._pid_exists", side_effect=_pid_exists), \
             patch("gateway.status.get_process_start_time", return_value=777), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=lambda pid, expected_start=None: terminate_calls.append(pid)):
            _reap_orphaned_browser_sessions()

        assert terminate_calls == [4242]
        assert not d.exists()

    def test_unfingerprintable_daemon_is_refused(self, fake_tmpdir):
        """No start-time fingerprint -> the kill is refused (fail closed).

        The reaper reads the PID from a world-writable temp dir; a PID whose
        identity cannot be pinned could be recycled between the verify and the
        tree-kill, so it must be left alone (and the socket dir kept for a
        later sweep).
        """
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        _make_socket_dir(fake_tmpdir, "h_perm7654321", pid=12345)
        terminate_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("gateway.status.get_process_start_time", return_value=None), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=lambda pid, expected_start=None: terminate_calls.append(pid)):
            _reap_orphaned_browser_sessions()

        assert terminate_calls == []


<<<<<<< HEAD
    def test_corrupt_pid_file_is_cleaned(self, fake_tmpdir):
        """PID file with non-integer content is cleaned up."""
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions
=======
    def test_corrupt_record_is_cleaned(self, records, monkeypatch):
        """A record that is not a JSON object is removed and nothing is signalled."""
        bad = records.dir / "corrupt.json"
        bad.write_text("not-json")
        listed = records.dir / "list.json"
        listed.write_text("[1, 2]")
>>>>>>> origin/main

        assert launcher.reap_orphaned_browsers() == 0
        assert not bad.exists() and not listed.exists()
        assert records.terminated == []


class TestOwnerPidCrossProcess:
    """Owner-based cross-process safe reaping: concurrent Hermes processes never reap each other's
    browsers, so orphans from crashed processes are reaped without touching live ones."""

    def test_alive_owner_is_not_reaped_even_when_untracked(self, records, tmp_path, monkeypatch):
        """A browser with a live owner is NOT reaped, even though this process does not track it.

        This is the core cross-process safety check: Process B scanning while Process A is using a
        browser must not kill A's browser.
        """
<<<<<<< HEAD
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        # Use our own PID as the "owner" — guaranteed alive
        d = _make_socket_dir(
            fake_tmpdir, "h_alive_owner", pid=12345, owner_pid=os.getpid()
        )

        kill_calls = []

        def mock_terminate(pid):
            kill_calls.append(pid)

        # Owner alive → reaper skips without ever probing the daemon.
        with patch("gateway.status._pid_exists", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid", side_effect=mock_terminate):
            _reap_orphaned_browser_sessions()

        assert 12345 not in kill_calls
        assert d.exists()





=======
        rec = _record(records, pid=12345, udd=records.ephemeral("p"), owner_pid=_LIVE_OTHER_OWNER)
        monkeypatch.setattr(launcher, "_pid_alive", _alive(12345, _LIVE_OTHER_OWNER))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)

        assert launcher.reap_orphaned_browsers() == 0
        assert records.terminated == []
        assert rec.exists()
>>>>>>> origin/main


class TestReaperIdentityGuard:
    """The #14073 guard: before signalling a live PID the reaper confirms it really is the recorded
    browser (its argv names the recorded ``--user-data-dir``), defeating planted records and
    recycled PIDs that would otherwise become an arbitrary same-user DoS."""

    class _FakeProc:
        def __init__(self, cmdline):
            self._cmdline = cmdline

        def cmdline(self):
            return self._cmdline

    def _run(self, cmdline, udd, *, no_such=False, access_denied=False):
        import psutil
<<<<<<< HEAD
        from tools.browser_tool_lifecycle import _verify_reapable_browser_daemon
=======
>>>>>>> origin/main

        def _factory(pid):
            if no_such:
                raise psutil.NoSuchProcess(pid)
            if access_denied:
                raise psutil.AccessDenied(pid)
            return self._FakeProc(cmdline)

        with patch("psutil.Process", side_effect=_factory):
            return launcher._cmdline_names_dir(12345, udd)

    def test_real_browser_bound_via_cmdline_is_reapable(self):
        udd = "/home/u/.hermes/cache/browser/chromium/abc"
        assert self._run(["chrome", "--remote-debugging-port=0", f"--user-data-dir={udd}"], udd) is True

    def test_recycled_pid_browser_not_bound_to_our_dir_is_refused(self):
        """A Chromium for a DIFFERENT profile dir must not be reaped (PID reuse / an unrelated browser)."""
        udd = "/home/u/.hermes/cache/browser/chromium/abc"
        assert self._run(["chrome", "--user-data-dir=/home/u/.hermes/cache/browser/chromium/OTHER"], udd) is False

    def test_recycled_pid_carrying_only_the_dir_as_a_bare_token_is_refused(self):
        """The dir anywhere in argv is not a binding (#116884): a recycled PID whose argv merely mentions
        it (a grep, a shell) must not pass; only the exact ``--user-data-dir=<dir>`` token binds."""
        udd = "/home/u/.hermes/cache/browser/chromium/abc"
        assert self._run(["grep", udd, "/var/log/syslog"], udd) is False
        assert self._run(["grep", "abc", "/var/log/syslog"], udd) is False
        # Control: the normalized full path as the flag token still binds.
        assert self._run(["chrome", f"--user-data-dir={udd}/"], udd) is True

    def test_unreadable_identity_fails_closed(self):
        udd = "/home/u/.hermes/cache/browser/chromium/abc"
        assert self._run([], udd, no_such=True) is False
        assert self._run([], udd, access_denied=True) is False

    def test_recycled_pid_carrying_only_socket_dir_basename_is_refused(self):
        """The socket-dir BASENAME anywhere in argv is not a binding (#116884).

        `agent-browser-<session>` is predictable, so a recycled PID whose argv merely
        mentions it (a grep, a shell) must not pass the binding gate; only the full
        normalized path as an argv token (or the environ match) binds.
        """
        socket_dir = "/tmp/agent-browser-h_sess123456"
        proc = self._FakeProc(
            name="bash",
            cmdline=["grep", "agent-browser-h_sess123456", "/var/log/syslog"],
            environ={},
        )
        assert self._run(proc, socket_dir) is False
        # Control: the full path as a `--flag=value` token still binds.
        bound = self._FakeProc(
            name="agent-browser",
            cmdline=["agent-browser", "daemon", f"--socket-dir={socket_dir}/"],
        )
        assert self._run(bound, socket_dir) is True


class TestLeakedBrowserOfThisProcess:
    """A record owned by THIS (live) process but no longer tracked by it is a leak: reap it. A browser
    this process still tracks is never reaped, however old."""

<<<<<<< HEAD
        No owner_pid (legacy path), not tracked, PID 'alive' — but the live
        process is `sleep`, not agent-browser, so it must be left alone and the
        socket dir retained.
        """
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions
=======
    def test_untracked_own_browser_is_reaped(self, records, tmp_path, monkeypatch):
        rec = _record(records, pid=12345, udd=records.ephemeral("p"), owner_pid=os.getpid())
        monkeypatch.setattr(launcher, "_pid_alive", _alive(12345, os.getpid()))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
>>>>>>> origin/main

        assert launcher.reap_orphaned_browsers() == 1
        assert records.terminated == [12345]
        assert not rec.exists()

    def test_tracked_own_browser_is_spared(self, records, tmp_path, monkeypatch):
        udd = records.ephemeral("p")
        rec = _record(records, pid=12345, udd=udd, owner_pid=os.getpid())
        launcher._browsers["mine"] = launcher.LaunchedBrowser(
            key="mine", pid=12345, start_time=777, cdp_url="ws://127.0.0.1:1/devtools/browser/x",
            http_url="http://127.0.0.1:1", user_data_dir=udd, owned=True, ephemeral=True, home_key="x")
        monkeypatch.setattr(launcher, "_pid_alive", _alive(12345, os.getpid()))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)

        assert launcher.reap_orphaned_browsers() == 0
        assert records.terminated == []
        assert rec.exists()

    def test_identity_guard_still_gates_the_leak_path(self, records, tmp_path, monkeypatch):
        """The leak path must not bypass the argv identity check."""
        _record(records, pid=12345, udd=records.ephemeral("p"), owner_pid=os.getpid())
        monkeypatch.setattr(launcher, "_pid_alive", _alive(12345, os.getpid()))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: False)

        assert launcher.reap_orphaned_browsers() == 0
        assert records.terminated == []


<<<<<<< HEAD
=======
def test_throwaway_profile_of_a_crashed_owner_is_removed_even_when_its_browser_died_too(records, monkeypatch):
    """Throwaway profiles are per process, so no later launch wipes a crashed process's dir: the reap does."""
    udd = Path(records.ephemeral("crashed-abc-99999"))
    (udd / "Default").mkdir(parents=True)
    rec = _record(records, pid=4242, udd=str(udd))
    monkeypatch.setattr(launcher, "_pid_alive", _alive())  # owner and browser both gone

    assert launcher.reap_orphaned_browsers() == 0
    assert records.terminated == []
    assert not udd.exists() and not rec.exists()
>>>>>>> origin/main


def test_browser_attached_after_its_owner_crashed_is_never_reaped_while_in_use(records, tmp_path, monkeypatch):
    """The next process ATTACHES to a crashed owner's persistent-profile Chromium (owned=False). The record
    still names the dead owner; this process takes it over, so no reaper kills the browser it handed out."""
    udd = str(tmp_path / "persistent-profile")
    monkeypatch.setattr(launcher, "_pid_alive", _alive(4242))  # the browser survived, its owner did not
    monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
    monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
    monkeypatch.setattr(launcher, "running_instance", lambda d: (41234, "/devtools/browser/abc", 4242) if d == udd else None)
    from hermes_constants import hermes_home_key
    crashed = launcher.LaunchedBrowser(key=f"profile:{udd}", pid=4242, start_time=777, cdp_url="", http_url="",
                                       user_data_dir=udd, owned=True, ephemeral=False, home_key=hermes_home_key())
    record = launcher._record_path(crashed)  # where the crashed owner left it
    record.write_text(json.dumps({"owner_pid": _DEAD_OWNER, "owner_start_time": None, "pid": 4242, "start_time": 777,
                                  "user_data_dir": udd, "home_key": crashed.home_key, "ephemeral": False,
                                  "ns": ns_identity()}))

    attached, err = launcher.launch_chromium(f"profile:{udd}", executable="/opt/chrome", user_data_dir=udd,
                                             ephemeral=False)
    assert err is None and attached.owned is False

    assert launcher.reap_orphaned_browsers() == 0
    assert records.terminated == []
    assert json.loads(record.read_text())["owner_pid"] == os.getpid()  # other processes see a live owner


class TestPrivatePerProfileRecords:
    """Launcher state lives in a private per-profile dir: a records dir that is not a real directory of this
    user closed to other writers is never read, and the reaper deletes nothing outside the profile's
    ephemeral root (``<HERMES_HOME>/cache/browser/chromium/``)."""

<<<<<<< HEAD
    def test_missing_dir_returns_none(self, tmp_path):
        from tools.browser_tool_lifecycle import _socket_dir_idle_seconds
        assert _socket_dir_idle_seconds(str(tmp_path / "nope")) is None

=======
    @staticmethod
    def _orphan(records, monkeypatch, pid=12345):
        rec = _record(records, pid=pid, udd=records.ephemeral("p"))
        monkeypatch.setattr(launcher, "_pid_alive", _alive(pid))
        monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
        monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
        return rec

    @pytest.mark.platforms("posix")
    def test_records_dir_writable_by_others_is_not_read(self, records, monkeypatch):
        rec = self._orphan(records, monkeypatch)
        records.dir.chmod(0o777)
>>>>>>> origin/main

        assert launcher.reap_orphaned_browsers() == 0
        assert records.terminated == [] and rec.exists()

<<<<<<< HEAD
        Command names repeat (``_stdout_click`` is rewritten on every click),
        and overwriting an existing file does NOT bump the *directory* mtime.
        Reading only the directory mtime would therefore report a busy session
        as idle and reap it.  The reaper must scan entries too.
        """
        from tools.browser_tool_lifecycle import _socket_dir_idle_seconds
        d = tmp_path / "agent-browser-h_reuse"
        d.mkdir()
        f = d / "_stdout_click"
        f.write_text("x")
        _age_socket_dir(d, 7200)
        assert _socket_dir_idle_seconds(str(d)) > 7000
=======
    @pytest.mark.platforms("posix")
    def test_symlinked_records_dir_is_not_read(self, records, tmp_path, monkeypatch):
        real = tmp_path / "elsewhere"
        records.dir.rename(real)
        records.dir.symlink_to(real, target_is_directory=True)
        rec = self._orphan(records, monkeypatch)
>>>>>>> origin/main

        assert launcher.reap_orphaned_browsers() == 0
        assert records.terminated == [] and rec.exists()

    @pytest.mark.platforms("posix")
    @pytest.mark.live_system_guard_bypass  # the stand-in process is our own child
    def test_ephemeral_record_outside_the_ephemeral_root_is_neither_signalled_nor_deleted(self, records, tmp_path):
        """A live process carrying the recorded ``--user-data-dir=`` token with a matching start time: still
        refused when the "ephemeral" dir is not one the launcher creates."""
        outside = tmp_path / "not-a-launcher-profile"
        (outside / "Default").mkdir(parents=True)
        proc = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(60)", f"--user-data-dir={outside}"])
        try:
            start_time = wait_until(lambda: launcher._start_time(proc.pid), what="the stand-in's start time")
            _record(records, pid=proc.pid, udd=str(outside), start_time=start_time)

            assert launcher.reap_orphaned_browsers() == 0
            assert records.terminated == []
            assert (outside / "Default").is_dir()
            assert proc.poll() is None
        finally:
            proc.kill()
            proc.wait()


@pytest.mark.platforms("posix")
def test_records_of_every_served_profile_are_reaped(tmp_path, monkeypatch):
    """One process serves many profiles; the janitor/atexit reap runs outside any profile scope. Each served
    home's records are read by path: the launch profile's and a live session's owning profile's."""
    from hermes_constants import get_hermes_home
    home_a, home_b = Path(get_hermes_home()), tmp_path / "profile-b"
    monkeypatch.setattr(launcher, "_browsers", {})
    monkeypatch.setattr(launcher, "_served_homes", set(), raising=False)
    terminated = []
    monkeypatch.setattr(launcher, "_terminate", lambda pid, start_time, proc: terminated.append(pid))
    monkeypatch.setattr(launcher, "_pid_alive", _alive(1111, 2222))
    monkeypatch.setattr(launcher, "_start_time", lambda pid: 777)
    monkeypatch.setattr(launcher, "_cmdline_names_dir", lambda pid, udd: True)
    monkeypatch.setattr("tools.browser_lightpanda.reap_orphaned_lightpanda", lambda: 0)
    for home, pid in ((home_a, 1111), (home_b, 2222)):
        rec_dir = home / "cache" / "browser" / "chromium-records"
        rec_dir.mkdir(mode=0o700, parents=True)
        udd = home / "cache" / "browser" / "chromium" / f"orphan-{pid}"
        udd.mkdir(parents=True)
        _record(SimpleNamespace(dir=rec_dir), pid=pid, udd=str(udd))
    monkeypatch.setitem(bs._session_owner_homes, "task-on-b", str(home_b))

<<<<<<< HEAD
    ``owner_alive is True`` alone made a leaked daemon immortal: in-memory
    tracking is lost on any exception path between spawn and registration,
    yet the owner PID stays up, so the reaper skipped it forever.  Observed in
    the wild — five agent-browser daemons accumulated over 10 days inside one
    long-lived hermes process, pinning ~5 CPU cores and driving load to 100+.

    The daemon-side ``AGENT_BROWSER_IDLE_TIMEOUT_MS`` is not a backstop here:
    it does not fire when the daemon itself is wedged (e.g. Chrome's framework
    was replaced underneath it by an auto-update).
    """

    def test_fresh_untracked_daemon_with_live_owner_is_spared(self, fake_tmpdir):
        """Within the grace window, cross-process safety still wins."""
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(
            fake_tmpdir, "h_fresh_owner", pid=12345, owner_pid=os.getpid()
        )
        kill_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=kill_calls.append):
            _reap_orphaned_browser_sessions()

        assert 12345 not in kill_calls
        assert d.exists()

    def test_idle_untracked_daemon_with_live_owner_is_reaped(self, fake_tmpdir):
        """Past the grace window, an untracked daemon is treated as leaked."""
        from tools.browser_tool import BROWSER_ORPHAN_GRACE_SECONDS
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(
            fake_tmpdir, "h_leaked_owner", pid=12345, owner_pid=os.getpid()
        )
        _age_socket_dir(d, BROWSER_ORPHAN_GRACE_SECONDS + 600)
        kill_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("gateway.status.get_process_start_time", return_value=777), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=lambda pid, expected_start=None: kill_calls.append(pid)):
            _reap_orphaned_browser_sessions()

        assert 12345 in kill_calls
        assert not d.exists()

    def test_tracked_daemon_with_live_owner_is_spared_at_any_age(self, fake_tmpdir):
        """A session this process still tracks is never reaped, however old.

        Idle age is a fallback for *lost* bookkeeping, not an override of
        bookkeeping that is present and says the session is live.
        """
        import tools.browser_tool as bt
        from tools.browser_tool import BROWSER_ORPHAN_GRACE_SECONDS
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(
            fake_tmpdir, "h_tracked_old", pid=12345, owner_pid=os.getpid()
        )
        _age_socket_dir(d, BROWSER_ORPHAN_GRACE_SECONDS * 10)
        bt._active_sessions["task-1"] = {"session_name": "h_tracked_old"}
        kill_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=kill_calls.append):
            _reap_orphaned_browser_sessions()

        assert 12345 not in kill_calls
        assert d.exists()

    def test_unknown_idle_age_fails_safe(self, fake_tmpdir):
        """Unreadable mtime => treat as too young to reap, never guess."""
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(
            fake_tmpdir, "h_unknown_age", pid=12345, owner_pid=os.getpid()
        )
        kill_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("tools.browser_tool_lifecycle._socket_dir_idle_seconds", return_value=None), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=True), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=kill_calls.append):
            _reap_orphaned_browser_sessions()

        assert 12345 not in kill_calls
        assert d.exists()

    def test_identity_guard_still_gates_the_new_path(self, fake_tmpdir):
        """The escape hatch must not bypass _verify_reapable_browser_daemon.

        That guard is the anti-spoof / anti-PID-recycle defense (issue #14073);
        an idle daemon is still only reapable if it verifies.
        """
        from tools.browser_tool import BROWSER_ORPHAN_GRACE_SECONDS
        from tools.browser_tool_lifecycle import _reap_orphaned_browser_sessions

        d = _make_socket_dir(
            fake_tmpdir, "h_unverified", pid=12345, owner_pid=os.getpid()
        )
        _age_socket_dir(d, BROWSER_ORPHAN_GRACE_SECONDS + 600)
        kill_calls = []

        with patch("gateway.status._pid_exists", return_value=True), \
             patch("tools.browser_tool_lifecycle._verify_reapable_browser_daemon", return_value=False), \
             patch("tools.process_registry.ProcessRegistry._terminate_host_pid",
                   side_effect=kill_calls.append):
            _reap_orphaned_browser_sessions()

        assert 12345 not in kill_calls
        assert d.exists()
=======
    assert lifecycle.reap_orphaned_browser_sessions() == 2
    assert sorted(terminated) == [1111, 2222]
    assert not (home_b / "cache" / "browser" / "chromium" / "orphan-2222").exists()
>>>>>>> origin/main


class TestPeriodicOrphanReap:
    """The reaper must run repeatedly, not only at cleanup-thread startup.

    A startup-only reap can never recover from a leak that appears *after*
    boot — which is exactly what happens in a hermes process that stays up
    for days.
    """

    def test_reaper_runs_on_every_interval_not_just_startup(self):
        cycles_to_run = 21
        reap_calls = []
        remaining = {"n": cycles_to_run}

        def fake_cleanup():
            remaining["n"] -= 1
            if remaining["n"] <= 0:
                bs._cleanup_running = False

        orig_running = bs._cleanup_running
        bs._cleanup_running = True
        try:
<<<<<<< HEAD
            with patch("tools.browser_tool_lifecycle._reap_orphaned_browser_sessions",
                       side_effect=lambda: reap_calls.append(1)), \
                 patch("tools.browser_tool_lifecycle._cleanup_inactive_browser_sessions",
                       side_effect=fake_cleanup), \
                 patch("tools.browser_tool.time.sleep"):
                bt_lifecycle._browser_cleanup_thread_worker()
=======
            with patch("tools.browser_session_lifecycle.reap_orphaned_browser_sessions",
                       side_effect=lambda: reap_calls.append(1)), \
                 patch("tools.browser_session_lifecycle.cleanup_inactive_sessions",
                       side_effect=fake_cleanup), \
                 patch("tools.browser_session_lifecycle.time.sleep"):
                lifecycle._janitor()
>>>>>>> origin/main
        finally:
            bs._cleanup_running = orig_running

        assert len(reap_calls) > 1, "startup-only reap would give exactly 1"
