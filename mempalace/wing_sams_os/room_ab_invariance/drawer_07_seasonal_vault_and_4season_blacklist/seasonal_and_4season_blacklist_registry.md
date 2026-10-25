# A/B Drawer 07: Seasonal Retry Vault & 4-Season Permanent Blacklist
- **Wing**: `wing_sams_os` | **Room**: `room_ab_invariance` | **Drawer**: `drawer_07_seasonal_vault_and_4season_blacklist`
- **Category**: `failures` | **Season**: `FALL` | **Updated**: 2026-10-22T12:25:00-07:00

4-Season Rule: Variants failing in one season (FALL) are held with timestamp + season tag to re-test in WINTER, SPRING, and SUMMER. Once tried across all 4 seasons and failed in all 4, they are permanently blacklisted and removed across all analytics.
