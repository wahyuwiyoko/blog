---
title: Archived Command Line
description: Some commands that may be useful one day.
date: 2023-08-22
tags:
  - linux
  - command-line
draft: false
---

These are just a command line that I got and not often used, but
it may be useful one day.

## Driver List

Only work on X11. X11 store all initial boot log in
`$HOME/.local/share/xorg`.

```sh
grep drivers $XDG_DATA_HOME/xorg/Xorg.0.log
```

## Window Properties

Only work on X11. These command often used for assign a value for a
specific window behavior case, it can be either name
or role of the client window.

```sh
xprop | grep WM_CLASS
```

```sh
xprop | grep WM_WINDOW_ROLE
```

## Show Keybinds

Only work on X11. Just to simplify the `xev` output.

If you are using Wayland, use `wev` instead.

```sh
xev | grep -A2 --line-buffered '^KeyRelease' | sed -n '/keycode /s/^.*keycode \([0-9]*\).* (.*, \(.*\)).*$/\1 \2/p'
```

## Fonts

To list all fonts:

```sh
fc-list : family style
```

To clean the fonts cache with verbose output:

```sh
fc-cache -fv
```

To search a font:

```sh
fc-list | grep my-font
```

## GPG

List all key:

```sh
gpg --list-secret-keys --keyid-format=long
```

Export public key:

```sh
gpg --export --armor --output public-key.asc your-key-id
```

Export private key:

```sh
gpg --export-secret-keys --armor --output private-key.asc your-key-id
```

## Share Files Using Web Server

Start a local server and expose it online by using HTTP tunnel such as
[ngrok](https://ngrok.com/).

```sh
cd $mydir && python3 -m http.server
```

## Mount/Unmount MTP Devices

Require `jmtpfs` package installed. Make sure the screen unlocked and the
directory that will be the mount point have write access.

To mount device:

```sh
jmtpfs directory-name
```

To unmount device:

```sh
fusermount -u directory-name
```

Note: if you get `input/output error` output, try unmount and mount the device
again without unplug the cable.
