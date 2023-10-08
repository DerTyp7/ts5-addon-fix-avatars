# Fix TS5-Avatars

This is a simple script that fixes the bug that avatars are not fully displayed and cut off at the bottom.
This addon uses a workaround due to limitations in the TS5 addon integration.

## Installation

1. Download the latest release from [here](https://github.com/DerTyp7/ts5-addon-fix-avatars/releases/latest).
2. Download the latest release of the [TS5AddonInstaller](https://github.com/FelixVolo/TS5AddonInstaller/releases/latest).
3. Run the TS5AddonInstaller and select the downloaded zip file.
4. Click on `Install` and restart the TeamSpeak 5 client.

> **Note:** For installation issues or similar read the documentation of the [TS5AddonInstaller](https://github.com/FelixVolo/TS5AddonInstaller).

## Description of the workaround

I noticed that when the user clicks out of the TS5 window, it adds `ts-frame=1` to the image element of the avatar. Chromium behaves strangely with this changing `src`. I didn't see the purpose of this added parameter, so I copied the old image and replaced the new one, which isn't affected by the code.
