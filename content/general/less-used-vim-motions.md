---
title: "Less-Used Vim Motions"
description: "Discovering some less-known Vim motions tips for faster editing."
date: 2023-11-26T14:56:15+08:00
draft: false
---

## Introduction

These Vim motions is often I used, so to just a note that will be useful for
such a case that I need to get it faster to navigate or editing some files.

Some of the motions will be used with several modes below.

## Normal Mode

`Shift+s` to insert mode and make the cursor to the correct indentation.

`Ctrl+w Shift+{h,j,k,l}` to change window position.

`Ctrl+^` to alternate between buffer.

`zf` to fold code. `zo` to open and `zc` to close fold. `za` to toggle open and
close fold. `zd` to delete fold and `zD` to delete fold recursively. To show
fold column, enter `:set foldcolumn=1` command.

`"{character} p` to paste from registers. For example, `"a p` is to paste
register "a". To list all register, enter `:reg` or `:registers` command.

`{` go to previous paragraph and `}` go to next paragraph.

`q{character}` to record macros. For example to record macros with "a", use
`qa` and do actions. To exit macros, use `q` again. To use the macros, do
`{number-action}@a` will repeat macros with the number of actions. For
example, `3@a` will do 3 times from "a" recorded macros.

## Insert Mode

`Ctrl+w` to delete single word from behind cursor.

`Ctrl+u` to delete all words from behind cursor.

`Ctrl+o` to normal mode for a while and will go to insert mode after doing some
motion or commands.

## Visual Mode

`%` to highlight closing characters.

`Ctrl+v g Ctrl+a` to increment numbers or characters and`Ctrl+v g Ctrl+x` to
decrement.

`~` to toggle uppercase of lowercase characters.

`gu` to lowercase and `gU` to uppercase characters.

`Shift+semicolon s/old-char/new-char` to replace characters with regex. To
replace all within the block, use `Shift+semicolon s/old-char/new-char/g`.

## Command Mode

`:sort` to sort numbers or characters.

`:vim` or `:vimgrep` to add a matched pattern that used for quickfix list.
The complete command is  `:vim match <file-pattern>`. For example,
`:vim /event/ src/js/*` or `:vim /event/ src/js/**` for recursively search. Or
using external tools for alternative such as `:vimgrep` or `:grep` that is
much faster.

`:copen` to show list available items for quickfix list. `:colder` to see
older list and `:cnewer` to newer list.

## Others

`i` for "inside" and `a` for "around" that used to combine with
`c`, `y`, or `d` motion. For example, to change around the word, use `caw`.

`Ctrl+z` or `:suspend` to suspend Vim session. To return to the suspended Vim,
enter `fg` in terminal.

## References

- [Learn Vim the Smart Way](https://learnvim.irian.to/)
