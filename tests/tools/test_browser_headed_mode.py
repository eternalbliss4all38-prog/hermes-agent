"""Tests for headed browser mode: config resolution, the headed local launch, and the per-turn
cleanup skip that keeps headed sessions alive between turns.

Salvaged from PR #24064 (fixes #11020 lead bug).
"""

from types import SimpleNamespace
from unittest.mock import patch

import pytest
from tools import browser_tool_session as bt_session

from tools import browser_launcher as launcher
from tools import browser_session as bs
from tools import browser_session_cloud as bs_cloud


@pytest.fixture(autouse=True)
def _clean_headed_cache(monkeypatch, tmp_path):
    from pathlib import Path

    monkeypatch.setattr(Path, "home", lambda: tmp_path)
    monkeypatch.setenv("HERMES_HOME", str(tmp_path / ".hermes"))
    monkeypatch.setenv("HERMES_RUNTIME_DIR", str(tmp_path / "tools"))
<<<<<<< HEAD
    _reset_headed_cache()
=======
    bs_cloud.reset_caches()
>>>>>>> origin/main
    yield
    bs_cloud.reset_caches()


# ---------------------------------------------------------------------------
# is_headed_mode resolution
# ---------------------------------------------------------------------------

class TestIsHeadedMode:

    def test_config_true(self):
<<<<<<< HEAD
        from tools.browser_tool_cloud import _is_headed_mode
=======
>>>>>>> origin/main
        cfg = {"browser": {"headed": True}}
        with patch("hermes_cli.config_effective.load_user_config_effective", return_value=cfg):
            assert bs_cloud.is_headed_mode() is True




# ---------------------------------------------------------------------------
# Per-turn cleanup skip (agent/chat_completion_helpers.cleanup_task_resources)
# ---------------------------------------------------------------------------

def _make_agent(verbose=False):
    return SimpleNamespace(verbose_logging=verbose)


class TestCleanupTaskResourcesHeadedSkip:
    def test_headless_still_cleans_browser(self):
        from agent.chat_completion_helpers import cleanup_task_resources
        with (
<<<<<<< HEAD
            patch("tools.browser_tool_cloud._is_headed_mode", return_value=False),
=======
            patch("tools.browser_session_cloud.is_headed_mode", return_value=False),
>>>>>>> origin/main
            patch("run_agent.cleanup_vm"),
            patch("run_agent.cleanup_browser") as mock_cb,
            patch(
                "agent.chat_completion_helpers.is_persistent_env",
                return_value=False,
            ),
        ):
            cleanup_task_resources(_make_agent(), "task-x")
            mock_cb.assert_called_once_with("task-x")


    def test_headed_skips_browser_cleanup(self):
        """A headed session survives the turn; the inactivity reaper closes it when idle."""
        from agent.chat_completion_helpers import cleanup_task_resources
        with (
            patch("tools.browser_session_cloud.is_headed_mode", return_value=True),
            patch("run_agent.cleanup_vm"),
            patch("run_agent.cleanup_browser") as mock_cb,
            patch(
                "agent.chat_completion_helpers.is_persistent_env",
                return_value=False,
            ),
        ):
            cleanup_task_resources(_make_agent(), "task-x")
            mock_cb.assert_not_called()


    def test_headed_does_not_skip_vm_cleanup(self):
        """Headed mode only affects the browser; VM teardown is untouched."""
        from agent.chat_completion_helpers import cleanup_task_resources
        with (
<<<<<<< HEAD
            patch("tools.browser_tool_cloud._is_headed_mode", return_value=True),
=======
            patch("tools.browser_session_cloud.is_headed_mode", return_value=True),
>>>>>>> origin/main
            patch("run_agent.cleanup_vm") as mock_vm,
            patch("run_agent.cleanup_browser"),
            patch(
                "agent.chat_completion_helpers.is_persistent_env",
                return_value=False,
            ),
        ):
            cleanup_task_resources(_make_agent(), "task-x")
            mock_vm.assert_called_once_with("task-x")


# ---------------------------------------------------------------------------
# Headed local launch vs cloud sessions
# ---------------------------------------------------------------------------

class TestHeadedLaunch:
    @pytest.mark.platforms("posix")
    def test_headed_window_in_local_mode(self, monkeypatch, tmp_path):
        """browser.headed + a display: the local Chromium launches without --headless."""
        monkeypatch.setattr(bs_cloud, "is_headed_mode", lambda: True)
        monkeypatch.setattr(bs_cloud, "chromium_args", list)
        monkeypatch.setattr(launcher, "needs_chromium_sandbox_bypass", lambda: False)
        captured = []

        class _Proc:
            pid = 4321

<<<<<<< HEAD
        mock_stdout = (
            '{"success": true, "data": {"snapshot": '
            '"- heading \\"Hi\\" [ref=e1]", "refs": {"e1": {}}}}'
        )
        with patch("subprocess.Popen", side_effect=capture_popen), \
             patch("os.open", return_value=99), \
             patch("os.close"), \
             patch("os.unlink"), \
             patch("os.makedirs"), \
             patch("builtins.open", MagicMock(return_value=MagicMock(
                 __enter__=MagicMock(return_value=MagicMock(
                     read=MagicMock(return_value=mock_stdout))),
                 __exit__=MagicMock(return_value=False),
             ))), \
             patch("tools.interrupt.is_interrupted", return_value=False), \
             patch("tools.browser_tool_lifecycle._write_owner_pid"):
            bt_session._run_browser_command("task1", "snapshot", [], _engine_override="auto")
        return captured_cmds

    @patch("tools.browser_tool_session._get_session_info")
    @patch("tools.browser_tool_install._find_agent_browser", return_value="/usr/bin/agent-browser")
    @patch("tools.browser_tool_cloud._is_local_mode", return_value=True)
    @patch("tools.browser_tool_install._chromium_installed", return_value=True)
    @patch("tools.browser_tool_cloud._get_cloud_provider", return_value=None)
    @patch("tools.browser_tool_cdp._get_cdp_override", return_value="")
    @patch("tools.browser_tool._is_camofox_mode", return_value=False)
    def test_headed_flag_added_in_local_mode(
        self, _camofox, _cdp, _cloud, _chromium, _local, _find, _session
    ):
        import tools.browser_tool as bt
        bt._cached_headed_mode = True
        bt._headed_mode_resolved = True
        _session.return_value = {"session_name": "test-sess"}
=======
            def poll(self):
                return 1

        def capture_spawn(argv, env, user_data_dir):
            captured.append(argv)
            return _Proc()

        monkeypatch.setattr(launcher, "_spawn", capture_spawn)
        monkeypatch.setattr(launcher, "_start_time", lambda pid: None)
        monkeypatch.setattr(launcher, "_terminate", lambda pid, start_time, proc: None)
        launcher.launch_chromium("headed", executable="chromium", user_data_dir=str(tmp_path / "udd"),
                                 env={"DISPLAY": ":1"}, timeout=1)
>>>>>>> origin/main

        assert len(captured) == 1
        assert not any(arg.startswith("--headless") for arg in captured[0])


<<<<<<< HEAD
    @patch("tools.browser_tool_session._get_session_info")
    @patch("tools.browser_tool_install._find_agent_browser", return_value="/usr/bin/agent-browser")
    @patch("tools.browser_tool_cloud._is_local_mode", return_value=True)
    @patch("tools.browser_tool_install._chromium_installed", return_value=True)
    @patch("tools.browser_tool_cloud._get_cloud_provider", return_value=None)
    @patch("tools.browser_tool_cdp._get_cdp_override", return_value="")
    @patch("tools.browser_tool._is_camofox_mode", return_value=False)
    def test_headed_flag_not_added_in_cloud_mode(
        self, _camofox, _cdp, _cloud, _chromium, _local, _find, _session
    ):
        """Cloud (CDP) sessions never get --headed — it's a local-only flag."""
        import tools.browser_tool as bt
        bt._cached_headed_mode = True
        bt._headed_mode_resolved = True
        _session.return_value = {
            "session_name": "test-sess",
            "cdp_url": "wss://example.invalid/cdp",
        }
=======
    def test_auto_started_screen_is_up_before_the_profile_is_chosen(self, monkeypatch):
        """browser.headed + bot_desktop.auto_start on a headless host: the first local launch brings the screen
        up and then uses the Bot Desktop profile (the dock Browser's cookie jar), not a throwaway one."""
        from tools.bot_desktop import browser as bd_browser, placement, runtime
        screen = {}
        monkeypatch.setattr(bs_cloud, "is_headed_mode", lambda: True)
        monkeypatch.setattr(runtime, "tool_placement", lambda: placement.GATEWAY)
        monkeypatch.setattr(runtime, "published_env", lambda: dict(screen))
        monkeypatch.setattr(runtime, "ensure_started_for_tool", lambda: screen.update(DISPLAY=":99"))
        monkeypatch.setattr(bd_browser, "profile_dir", lambda: "/bot-desktop/browser-profile")
        monkeypatch.setattr(bd_browser, "executable", lambda: "/usr/bin/chromium")
        launches = []
>>>>>>> origin/main

        def launch(key, **kwargs):
            launches.append((key, kwargs))
            return SimpleNamespace(cdp_url="ws://127.0.0.1:9/devtools/browser/x", pid=1), None

        monkeypatch.setattr(launcher, "launch_chromium", launch)

        bs._create_chromium_session("task1")

        assert screen == {"DISPLAY": ":99"}
        assert launches == [("profile:/bot-desktop/browser-profile", {
            "executable": "/usr/bin/chromium", "user_data_dir": "/bot-desktop/browser-profile", "ephemeral": False,
            "extra_args": bd_browser.SHARED_PROFILE_ARGS})]


    def test_headed_not_applied_in_cloud_mode(self, monkeypatch):
        """Cloud (CDP) sessions never launch a local (headed) Chromium: headed is a local-only knob."""
        monkeypatch.setattr(bs_cloud, "is_headed_mode", lambda: True)
        monkeypatch.setattr("tools.browser_session_cdp.get_cdp_override", lambda: "")
        provider = SimpleNamespace(create_session=lambda key: {
            "session_name": "cloud", "bb_session_id": "bb-1",
            "cdp_url": "wss://example.invalid/devtools/browser/cloud", "features": {},
        })
        monkeypatch.setattr(bs_cloud, "get_cloud_provider", lambda: provider)
        monkeypatch.setattr(launcher, "launch_chromium",
                            lambda *a, **kw: pytest.fail("a cloud session must not launch local Chromium"))
        screen = []
        monkeypatch.setattr(bs, "ensure_screen_for_headed_chromium", lambda: screen.append(1))

        session = bs._create_session_for_key("task1", force_local=False)

        assert session["cdp_url"] == "wss://example.invalid/devtools/browser/cloud"
        assert screen == []
