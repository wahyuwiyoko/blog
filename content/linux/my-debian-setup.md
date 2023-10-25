---
title: "My Debian Setup"
description: "Setup and configuring Debian with window manager."
date: 2023-08-11T10:15:33+08:00
draft: false
---

## Introduction

I have chosen Debian for several reasons over using other
distributions such as Arch, Ubuntu, or any other distribution out there.

Here is why:

### Stable

I don't mind for having older packages because of stable it is. It means I
don't need to update my packages very often and not having broken dependencies
or [broken system](https://wiki.debian.org/DontBreakDebian).

It's fixed release. It's good for me because after
[major update](https://wiki.debian.org/DebianReleases), I can do a
clean installation with the fresh system and have minor bugs from
previous release.

Debian 12 are the best fixed release by now rather than previous release,
because much of the packages are not really behind like Debian 11 does.

### Easy to Install

I used a minimal installer (_TUI-like_) rather than GUI or Calamares installer
because it's easier to navigate using keyboard and only having a core packages
installed.

### Not a Corporation Project

Unlike Ubuntu, Debian are maintained by a huge community and have a
[free software movement](https://www.gnu.org/philosophy/free-software-intro.html)
[philosophy](https://www.debian.org/intro/philosophy).

### A Lot of Packages Available

There are a lot of available packages in Debian official repository. And most
of the applications and tools from outside Debian repository are packaged in
`.deb` that can be easily installed with `apt`.

### Great Wiki

I admit that [Arch wiki](https://wiki.archlinux.org/) are superior by this
point. And I can tell [Debian wiki](https://wiki.debian.org/) are also nice
but not as much Arch wiki have. I often found a solution on those both
wiki site, so they both are great.

## Configure System

These steps are for Debian with minimal installer and only core packages are
installed.

If you have Linux knowledge before and familiar using it with command line,
these steps are easy as you think of.

### Add User to Sudo Group

The first thing after boot up from Debian minimal installer is to get
the root access, update & upgrade the packages, and install `sudo` package.

Debian minimal installation does not have `sudo` installed by default.
So you can either install `sudo` or `doas`.

Here is how:

```sh
su -
apt update
apt upgrade
apt install sudo
```

After installed `sudo`, add user to `sudo` group:

```sh
adduser my-user sudo
```

Logout using `logout` command and login again with that `user`.

### Install Base System

I have scripts for setup that you can find in my
[dotfiles repository](https://github.com/wahyuwiyoko/dotfiles/tree/main/setup).

Clone my dotfiles repository:

```sh
git clone https://github.com/wahyuwiyoko/dotfiles.git
```

Remember to view the script first and change what you needed before start
using it.

Here is what the scripts do:

1. `base.sh` - This includes a core packages such as firmware, build tools,
audio server, GTK+, fonts, and other miscellaneous packages.

2. `rtw88.sh` - This is just a driver setup for my wireless device.

3. `x11.sh` and `x11-wm`, or `sway.sh` - I personally used three window manager,
i3 and bspwm for X11, and Sway for Wayland.

4. `apps.sh` - All applications and tools for everyday tasks that can be run on
either X11 and Wayland.

5. `theme.sh` - I choose [Rosé Pine](https://rosepinetheme.com/) as a color
scheme for my desktop and with
[GTK and icon theme](https://github.com/rose-pine/gtk) as well.

6. `ufw.sh` - This script are just for enable firewall with `ufw`.

7. `development.sh` - For a development environment tools like Neovim, Hugo, etc.

8. `docker.sh` - I separate this script from `development.sh` because it
has more steps to included for Docker, such as uninstalling unofficial
packages, download packages and dependencies, and start the Docker daemon.

### Add SSH & GPG Keys

Add SSH and GPG keys for GitHub authentication by following
the [documentation](https://docs.github.com/en/authentication).

## Software & Utilities

Most of the software that I used are terminal and command line based. It's
configurable with a config files rather than GUI software.

### Terminal Emulator

[Alacritty](https://alacritty.org/), the terminal emulator based on Rust, and
its most people used.

### Text Editor

[Neovim](https://neovim.io/), the keyboard-centric text editor that is
customizable with Lua language and have tons of useful plugins.

### Development Environment

- [PostgreSQL](https://www.postgresql.org/), a database for many applications.
- [Go](https://go.dev/), I may be want to create a command line program with Go.
- [Lua](https://www.lua.org/), just for configure my Neovim.
- [Node.js](https://nodejs.org/) for JavaScript.
- [Docker](https://www.docker.com/), I'm not exploring much yet with Docker.
- [ngrok](https://ngrok.com/) for local tunneling.
- [Hugo](https://gohugo.io/) for this blog.
- [Insomnia](https://insomnia.rest/), an API client.

### Multimedia Player

[mpv](https://mpv.io/) for video player and
[cmus](https://cmus.github.io/) for music player.

### Office Suite

I don't feel comfortable using [LibreOffice](https://www.libreoffice.org/)
because of the UI looks outdated and have weird formatted if I view on other
document viewer. So I decide to use [ONLYOFFICE](https://www.onlyoffice.com/).
The UI are similar to MS Office and it's open source.

### Other Command Line Tools

- [Zathura](https://git.pwmt.org/pwmt/zathura) for PDF viewer.
- [pass](https://www.passwordstore.org/) for password manager.
- [Newsboat](https://newsboat.org/) for reading news.
- [ripgrep](https://github.com/BurntSushi/ripgrep), an alternative to `grep`.
- [fzf](https://github.com/junegunn/fzf), a general-purpose fuzzy finder.
- [yt-dlp](https://github.com/yt-dlp/yt-dlp), a YouTube videos downloader.
- [fd-find](https://github.com/sharkdp/fd), an alternative to `find`.
- [shellcheck](https://www.shellcheck.net/), a linter for shell script.
- [exiftool](https://exiftool.org/), a metadata viewer.
- [trash-cli](https://github.com/andreafrancia/trash-cli), a trashcan utility.
- [tmux](https://tmux.github.io/), a terminal multiplexer.
- [nsxiv](https://codeberg.org/nsxiv/nsxiv) (X11)
  and [swayimg](https://github.com/artemsen/swayimg) (Wayland) for image viewer
- [lf](https://github.com/gokcehan/lf) for file manager.
- [maim](https://github.com/naelstrof/maim) (X11)
  and [grimshot](https://www.mankier.com/1/grimshot) (Wayland) for screenshoter.

## Remove Old Kernel

1. Check current kernel: `uname -r`

2. Show list kernel: `apt list --installed linux-image-*`

3. Remove kernel: `sudo apt purge linux-image-<version>`

4. Update grub: `sudo update-grub2`

## Useful Links

I found these links are for references and troubleshooting.

- [Manage user account](https://wiki.debian.org/UserAccounts)
- [Add user with sudo](https://wiki.debian.org/sudo)
- [Configuring apt source](https://wiki.debian.org/SourcesList)
- [X session wiki](https://wiki.debian.org/Xsession)
- [PipeWire wiki](https://wiki.debian.org/PipeWire)
- [ALSA wiki](https://wiki.debian.org/ALSA)
- [Hardware video acceleration wiki](https://wiki.debian.org/HardwareVideoAcceleration)
- [MTP wiki](https://wiki.debian.org/mtp)
- [SymLink wiki](https://wiki.debian.org/SymLink)
- [Fonts wiki](https://wiki.debian.org/Fonts)
- [File management](https://wiki.debian.org/CommandsFileManager)
- [Export and import GPG keys](https://wiki.debian.org/EvolutionSecurity)
