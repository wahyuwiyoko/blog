---
title: Ricing Journey
description: History of my Linux desktop rice.
date: 2024-01-03
tags:
  - linux
  - window-manager
toc: false
draft: false
---

## First Road

It started when I was using Linux since around 2018 - 2019. Back in the day, I
exploring how much Linux offers me to customize everything, from functionality
and appearance. Around in that year, my first desktop environment was Cinnamon,
and of course with Linux Mint as my first Linux distribution.

Cinnamon was very easy to customize with their GUI settings, almost every
aspect such as title bar, status bar, and animation. But I realize that much of
GUI customization in Cinnamon was quite heavy for my old laptop and trying to
making the desktop look simple and clean. When I know Cinnamon was a based of
GNOME 3, that way I think it's a bit hungry resources just like GNOME. And I
already know GNOME was not fit to my laptop, so I decide to not ever use GNOME.

I was wasted my time that year for looking a simple and lightweight
distribution instead of desktop environment. Been trying the lightweight
flavor from Ubuntu and the other derivatives such as Xubuntu, Lubuntu, Linux
Lite, SparkyLinux, antiX Linux, and more of them. I'm surprised their
distribution it's like any Linux distribution, but with different desktop
environment.

By far the most longest term desktop environment I used was Xfce, alongside
with Debian. The customization is also simple and many themes available to
download from [xfce-look.org](https://www.xfce-look.org/).

Making desktop simple, minimal, and no distraction was my goal, and ended up
with customize keyboard shortcuts for easier to navigate with Xfce. Xfce was my
favorite desktop environment, ever.

![Debian with Xfce desktop](/images/debian-xfce.png "Debian Xfce")

## Lazy and Boring Way

I was happy with my setup, and never looked back to other desktop environment.
But when I saw someone's desktop, how they can have a desktop with just a
window and status bar that can have a gap and border color around the window,
and it was called a window manager. So it's basically just a window that
manage your window position, size, and rearrange the application window only
using keyboard and without any extra software that comes like every desktop
environment do. This is the start of where I ask on a community, which one
is the beginner friendly window manager, and the answer is i3.

In that case, I had to use the software I needed for that particular window
manager. I learned how to use i3 window manager was from
[Alex Booker videos about i3](https://youtube.com/playlist?list=PL5ze0DjYv5DbCv9vNEzFmP6sU7ZmkGzcf&si=vbMB7D-8rTZDZ2li).
I'm impress that every aspect for window manager like i3 does
do everything with keyboard, which I likely loved to make my workflow fast and
easier.

It took me around 3 days to understand every functionality that I needed for
understanding i3 and reading the
[documentation](https://i3wm.org/docs/userguide.html). And also with the basic
desktop rice that still not completed.

![Debian with i3 and active window](/images/debian-i3-window.png "Debian i3")

Color schemes, icons, and window configuration, all those things took me very
much time to make it "perfect" desktop. But ended up with unconsistency within
the color scheme for status bar, window, and terminal.

These is my first desktop rice with i3, most of color scheme I used that day
was [Dracula](https://draculatheme.com/) and [Decay](https://github.com/decaycs).

![Debian with i3 window manager](/images/debian-i3.png "Debian i3")

## Much Simpler

2023 was the year where Wayland came hype to Linux desktop. Especially
Hyprland and Sway window manager. Hyprland looks really cool with their
animation without sacrifing performance, very smooth and sleek. But the current
status are still experimental, which is unlikely will have some glitches or
bugs for certain GPU's.

So I would prefer Sway, the i3-like for Wayland. Where there's just a little
different in the configuration file that make it more simple and easier. You
don't even need to add `--no-startup-id` for executing programs with keybinds.

Many built-in configuration are available without need an external software,
such as setting an input device with `input` command (in X11 need `xinput`),
set wallpaper and configure monitors with `output` command (in X11 need
`xrandr`), and hiding a cursor while typing with `seat` command. That is just a
few, you can check more of them at
[Sway documentation](https://github.com/swaywm/sway/wiki).

![Debian with Sway window manager](/images/debian-sway.png "Debian Sway")

## Conclusion

At the end of the day, I would just let my desktop to be even minimal and
boring and had enough to rice more. And I would say that keyboard-centric
workflows are much better and faster than GUI-centric workflows, at least for
me.

If you want to know about my setup, you can read
[my Debian setup post](https://wahyuwiyoko.github.io/blog/post/my-debian-setup/).

And hey, thanks for reading until the end. Hope everyone start making a better
workflow on their desktop with their own journey on Linux!
