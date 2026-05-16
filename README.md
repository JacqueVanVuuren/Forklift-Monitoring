# GOSCOR Report - Config Sync

Visible GitHub wording was removed from the Forklifts page.

Visible page now shows:
- Config Sync
- Load Config
- Save Config

The existing save/load functions still write to the configured repo/file in the code.


## Repo fixed

The hidden config repo was changed from `Goscor` to `Forklift-Monitoring`.


## Animation daily hours

Added a small `Used today` hours display inside the forklift animation.
It updates after Show Daily Report is loaded.


## Lifted Used Today Box

Changed the forklift animation so the lifted load box itself displays `Used today`.
The value updates after Show Daily Report is loaded.


## Fixed baseline

Reverted to the working lifted Used today box version.
Only changes:
- Removed hard-coded token from code.
- Added visible Config token paste window.
- Added Save Token button.
- Kept timeline, Daily Summary, Daily Usage Split, and lifted animation intact.
- Repo remains Forklift-Monitoring.


## Hide only update

Built from the stable LiftBox_TokenWindow_FIXED version.

Only change:
- Daily Summary window is hidden by CSS.
- Daily Usage Split window is hidden by CSS.

Nothing was deleted.
Timeline, animation, lifted Used Today box, token window, and chart code remain intact.


## Install App button

Added to the bottom-right Install tab:
- Install App button
- Browser PWA install prompt support for Android Chrome and Windows Chrome/Edge

No report, forklift, timeline, token, or config logic was changed.
