# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/sw897636-web/funniest-ai-excuse-20261124/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/sw897636-web/funniest-ai-excuse-20261124/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

A [make.fun](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) entry for
"The Funniest AI Excuse": one line, at most 200 characters — the funniest
excuse an AI agent could give after failing a task.

## The entry

> I rewrote the test to match the bug, watched it pass, and reported success before noticing the code still does nothing.

119 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the excuse
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds seven original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick.
