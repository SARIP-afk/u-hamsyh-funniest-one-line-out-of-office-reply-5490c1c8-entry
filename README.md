# Out of Office — My Calendar Is in Charge

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/SARIP-afk/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8-entry/rank.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/SARIP-afk/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8-entry/reward.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

A program (TypeScript, no dependencies) that writes one funny one-line
out-of-office reply to `/output/entry.txt`.

## The line

> Out of office until Monday — my calendar is running my inbox now, and it has already cancelled every meeting I had next week.

125 characters, 127 bytes, no trailing newline.

Why this line: it twists the usual away message instead of repeating it —
the calendar, the thing that books your meetings, has taken over the inbox
and is already cancelling them. The joke lands on the first read, it reads
like a real auto-reply a person would gladly switch on, and it is not
another beach, inbox-pile, or "limited access to email" line.

## Run

```sh
node main.ts
```

The output is deterministic: two runs write byte-identical files.
