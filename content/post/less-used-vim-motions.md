---
title: Less-Used Vim Motions
description: Discovering some less-known Vim motions tips for faster editing.
date: 2023-11-26
tags:
  - vim
toc: true
draft: false
---

## Introduction

These Vim motions is often I used, so to just a note that will be useful for
such a case that I need to get it faster to navigate or editing some files.

Some of the motions will be used with several modes below.

## Normal Mode

`Shift+s` to insert mode and make the cursor to the correct indentation.

`Ctrl+w Shift+{h,j,k,l}` to change window position.

`Ctrl+6` to alternate between buffer.

`{bufnr} Ctrl+6` to switch buffer with buffer number. Use `:ls` command to list
all available buffers. And to switch the buffer, use the buffer number for
example, `5 Ctrl+6`. The simpler way is using `<Tab>` with `:b` command, for
example `:b <Tab>` after pressing tab, it will give a buffers completion.

`zf` to fold code. `zo` to open and `zc` to close fold. `za` to toggle open and
close fold. `zd` to delete fold and `zD` to delete fold recursively. To show
fold column, enter `:set foldcolumn=1` command.

`"{character}{motion}` to yank to the register. For example `"ayaw` will yank
"around" a word in register `"a`.

`"{character} p` to paste from registers. For example, `"a p` is to paste
register "a". To list all register, enter `:reg` or `:registers` command.

`{` go to previous paragraph and `}` go to next paragraph.

`f{character}` to find character forward and `F{character}` to find character
backward in line. To repeat the `f` motion, use `;` to repeat find forward and
`,` to repeat find backward. It can also using motion for repeating `f` like
`3;` or `3,`. It's also the same for `t{character}` but the cursor will be the
behind of the character.

`q{character}` to record macros. For example to record macros with "a", use
`qa` and do actions. To exit macros, use `q` again. To use the macros, do
`{number-action}@a` will repeat macros with the number of actions. For
example, `3@a` will do 3 times from "a" recorded macros.

`>>` to indent and `<<` to unindent line.

`m{character}` to mark position. For example `ma` to set the mark position. To
go to the marked column use `` `a ``. To go to the marked line use `'a`.
Using lowercase character will only set a marks in each own buffer. To set
global marks, use uppercase like `mA`. To list all marks, use `:marks` command.
For more details, see `:help mark-motions`.

`Ctrl+o` to jump to the older cursor position in jump list. And `Ctrl+i` to jump
to the newer cursor position in jump list. To see all list of jump list, use
`:jumps` command.

`Ctrl+]` to jump to the definition of the keyword or to the file that has
references under the cursor.

`Shift+k` to jump to the documentation under the cursor.

`@:` to repeat previous command.

`{num}i{char}<Esc>` to repeat characters. For example, to repeat character 10
times, use `10ihello<Esc>` will result `hello` 10 times.

`[{surrounding}` to go surrounding brackets. For example, `[{` will go to the
opening surrounding and `]}` go to the closing surrounding.

`gf` to go to the file under cursor. And `Ctrl+w f` will open the file under
cursor in new window.

`z=` to give a word suggestion under the cursor for spelling.

`]s` to go to the next misspelled word. `[s` to go to the previous misspelled
word.

`zg` to add word under the cursor as a good word in `spellfile`.

## Insert Mode

`Ctrl+w` to delete single word from behind cursor.

`Ctrl+u` to delete all words from behind cursor.

`Ctrl+o` to normal mode for a while and will go to insert mode after doing some
motion or commands.

`Ctrl+r {register}` to paste from registers. For example, to paste from
register `"a`, use `Ctrl+r a`.

## Visual Mode

`%` to highlight closing characters.

`Ctrl+v g Ctrl+a` to increment numbers or characters and`Ctrl+v g Ctrl+x` to
decrement.

`~` to toggle uppercase of lowercase characters.

`gu` to lowercase and `gU` to uppercase characters.

`Shift+semicolon s/old-char/new-char` to replace characters with regex. To
replace all within the block, use `Shift+semicolon s/old-char/new-char/g`.

## Command Mode

`:g/char/d` to delete a characters globally. For example , `:g/show/d` will
delete all `show` word in the buffer.

`:vsplit +b{bufnr}`, `:vsplit #{bufnr}`, `:vert sb {bufnr}` to split buffer in
vertical split by buffer number, same as horizontal split using `:split` or
`:horizontal`. For example, `:vsplit +b5` to split buffer vertically at buffer
number 5. Use `:ls` or `:buffers` to show all available buffers.

`:bdelete {bufnr}` to delete a buffer. For example, `:bdelete 5` will delete a
buffer at number 5.

`:windo diffthis` to show a diff between two split window.

`:sort` to sort numbers or characters.

`:vim` or `:vimgrep` to add a matched pattern that used for quickfix list.
The complete command is  `:vim match <file-pattern>`. For example,
`:vim /event/ src/js/*` or `:vim /event/ src/js/**` for recursively search. Or
using external tools for alternative such as `:vimgrep` or `:grep` that is
much faster.

`:copen` to show list available items for quickfix list. `:colder` to see
older list and `:cnewer` to newer list.

`:e **/*<file-name><Tab>` will show a completion list for matched file name
recursively. For example, `:e **/*main` and press `Tab` will show matched file
named `main` in the directories.

`:retab` to replace all sequences of white-space containing a `<Tab>` with new
strings of white-space using the new `tabstop` value given.

`:make` to build source from compiler. See `:help :compiler` for more details.

## Others

`i` for "inside" and `a` for "around" that used to combine with
`c`, `y`, or `d` motion. For example, to change around the word, use `caw`.

`Ctrl+z` or `:suspend` to suspend Vim session. To return to the suspended Vim,
enter `fg` in terminal.

## References

- [Learn Vim the Smart Way](https://learnvim.irian.to/)
- [jdhao's digital space](https://jdhao.github.io/)
- [Neovim documentation](https://neovim.io/doc/)
- [Andrew Courter's YouTube channel](https://www.youtube.com/@ascourter)
- [Nir Lichtman's YouTube channel](https://www.youtube.com/@nirlichtman)
