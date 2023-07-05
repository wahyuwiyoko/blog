---
title: "Enable Touchpad Tap to Click"
description: "Enable tap-to-click on the most window managers and desktop environments."
date: 2023-06-27T11:46:55+08:00
draft: false
---

Let's start with `xinput` command to know which device on our system.

Here's the example output:

```bash {hl_Lines="5"}
$ xinput
⎡ Virtual core pointer                          id=2    [master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
⎜   ↳ HTIX5288:00 093A:0255 Mouse               id=10   [slave  pointer  (2)]
⎜   ↳ HTIX5288:00 093A:0255 Touchpad            id=11   [slave  pointer  (2)]
⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
    ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
    ↳ Video Bus                                 id=6    [slave  keyboard (3)]
    ↳ Power Button                              id=7    [slave  keyboard (3)]
```

As you can see, there's a touchpad device named `HTIX5288:00 093A:0255 Touchpad`.
Now we can list the properties of this device by using the name or with the ID.

```bash {hl_Lines="5"}
$ xinput list-props 11
Device 'HTIX5288:00 093A:0255 Touchpad':
        Device Enabled (189):   1
        Coordinate Transformation Matrix (191): 1.000000, 0.000000
        libinput Tapping Enabled (346): 0
        libinput Tapping Enabled Default (347): 0
        libinput Tapping Drag Enabled (348):    1
```

The property we need to change is the `libinput Tapping Enabled (346): 0`
with value 1 (true), because it's disabled by default (0 or false).

Now let's turn it on using the `xinput set-prop`:

`$ xinput set-prop 11 "libinput Tapping Enabled" 2`
