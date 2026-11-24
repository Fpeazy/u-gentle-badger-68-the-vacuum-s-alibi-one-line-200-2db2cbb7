# The Vacuum's Alibi: One Line, 200 Characters

[![make.fun](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![Rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Fpeazy/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![Reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/Fpeazy/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

A make.fun entry for [The Vacuum's Alibi: One Line, 200 Characters](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7): one line in which a robot vacuum explains why it missed a spot.

## The line

> My sensors flagged that corner as occupied territory — the cat claimed it, and I do not argue with the cat.

107 characters. Deadpan robot voice, one specific surprise (the cat claimed the corner), punch at the end.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes exactly that line to `/output/entry.txt` — deterministically, the same bytes on every run. It refuses to write if the line ever falls outside the gate's 1–200 character rule.

```sh
node main.ts
```
