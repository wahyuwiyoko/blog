---
title: "Archived Command Line"
description: "Some commands that may be useful one day"
date: 2023-08-22T02:21:28
draft: false
---

These are just a command line that I got and not often used, but
it may be useful one day.

## Driver List

Only work on X11. X11 store all initial boot log in
`$HOME/.local/share/xorg`.

```bash
grep drivers $XDG_DATA_HOME/xorg/Xorg.0.log
```

## Window Properties

Only work on X11. These command often used for assign a value for a
specific window behavior case, it can be either name
or role of the client window.

```bash
xprop | grep WM_CLASS
```

```bash
xprop | grep WM_WINDOW_ROLE
```

## Show Keybinds

Only work on X11. Just to simplify the `xev` output.

If you are using Wayland, use `wev` instead.

```bash
xev | grep -A2 --line-buffered '^KeyRelease' | sed -n '/keycode /s/^.*keycode \([0-9]*\).* (.*, \(.*\)).*$/\1 \2/p'
```

## Fonts

To list all fonts:

```bash
fc-list : family style
```

To clean the fonts cache with verbose output:

```bash
fc-cache -fv
```

To search a font:

```bash
fc-list | grep my-font
```

## GPG

List all key:

```bash
gpg --list-secret-keys --keyid-format=long
```

Export public key:

```bash
gpg --export --armor --output public-key.asc your-key-id
```

Export private key:

```bash
gpg --export-secret-keys --armor --output private-key.asc your-key-id
```

## Share Files Using Web Server

Start a local server and expose it online by using HTTP tunnel such as
[ngrok](https://ngrok.com/).

```bash
cd $mydir && python3 -m http.server
```
