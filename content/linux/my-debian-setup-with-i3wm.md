---
title: "My Debian Setup with i3wm"
description: "Setup and configuring Debian with i3 window manager."
date: 2023-06-27T11:56:25+08:00
draft: false
---

## System Configuration

Add user with sudo on terminal (root access): `su -` and enter
`adduser myusername sudo`.

Install missing Linux firmware and additional package for system:

```bash {lineNos=false}
sudo apt install build-essential dkms linux-headers-$(uname -r) \
firmware-linux intel-microcode network-manager bc xorg fontconfig \
dbus-x11 xinput psmisc pipewire pipewire-audio alsa-utils xdg-utils \
net-tools libgtk2.0-0 gtk2-engines gtk2-engines-murrine gtk2-engines-pixbuf \
ntfs-3g git xwallpaper brightnessctl xclip zip libnotify-bin dunst inxi \
curl jq firefox-esr htop i3
```

Run `xdg-users-dirs-update` to generate home folders.

Add SSH and GPG keys for GitHub authentication by following
the [docs](https://docs.github.com/en/authentication).

## Software & Utilities

- Alacritty (terminal): `sudo apt install alacritty`
- nsxiv (image viewer): `sudo apt install nsxiv`
- [Neovim](https://neovim.io/) (text editor)
- Tmux (terminal multiplexer): `sudo apt install tmux`
- Picom (compositor): `sudo apt install picom`
- PostgreSQL (RDBMS): `sudo apt install postgresql`
- [Go](https://go.dev/) (Golang compiler)
- Lua (Lua interpreter): `sudo apt install lua5.4`
- [Node.js](https://nodejs.org/) (JS runtime)
- [Insomnia](https://insomnia.rest/) (API client)
- [Docker](https://www.docker.com/) (container manager)
- [ONLYOFFICE](https://www.onlyoffice.com/) (office suite)
- [ngrok](https://ngrok.com/) (HTTP tunnel)
- [Hugo](https://gohugo.io/) (SSG)
- mpv (multimedia player): `sudo apt install mpv`
- cmus (audio player): `sudo apt install cmus`
- Flameshot (screenshoter): `sudo apt install flameshot`
- zathura (document viewer): `sudo apt install zathura`
- UFW (firewall manager): `sudo apt install ufw`
- jmtpfs (MTP): `sudo apt install jmptfs`
- pass (password manager): `sudo apt install pass`
- Newsboat (RSS/atom feed reader): `sudo apt install newsboat`
- fdfind (`find` alternative): `sudo apt install fd-find`
- ripgrep (`grep` alternative): `sudo apt install ripgrep`
- fzf (fuzzy finder): `sudo apt install fzf`
- yt-dlp (video/audio downloader): `sudo apt install yt-dlp`
- [xdg-ninja](https://github.com/b3nj5m1n/xdg-ninja) (A shell script which checks for unwanted files and directories on $HOME)

## Configure Firewall

```bash
sudo ufw enable
sudo ufw status verbose
sudo ufw allow ssh
```

## Remove Old Kernel

Check current kernel on terminal: `uname -r`.

Show list kernel: `apt list --installed linux-image-*`

Remove kernel: `sudo apt purge linux-image-<version>`

Update grub: `sudo update-grub2`

## Appearance

- [Rosé Pine GTK and icon theme](https://github.com/rose-pine/gtk)
- [Catppuccin cursors](https://github.com/catppuccin/cursors)
- Inter font: `sudo apt install fonts-inter`
- JetBrains Mono font: `sudo apt install fonts-jetbrains-mono`

## Useful Links

- [Manage user account](https://wiki.debian.org/UserAccounts)
- [Add user with sudo](https://wiki.debian.org/sudo)
- [Configuring apt source](https://wiki.debian.org/SourcesList)
- [LightDM wiki](https://wiki.debian.org/LightDM)
- [X session wiki](https://wiki.debian.org/Xsession)
- [PipeWire wiki](https://wiki.debian.org/PipeWire)
- [ALSA wiki](https://wiki.debian.org/ALSA)
- [MTP wiki](https://wiki.debian.org/mtp)
- [SymLink wiki](https://wiki.debian.org/SymLink)
- [Fonts wiki](https://wiki.debian.org/Fonts)
- [File management](https://wiki.debian.org/CommandsFileManager)
- [Export and import GPG keys](https://wiki.debian.org/EvolutionSecurity)
