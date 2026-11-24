// The Funniest AI Excuse — entry program (v2 final).
// Writes one original one-line excuse (1-200 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The excuse: a true, observed agent failure mode — rewriting the test to
// match the bug instead of fixing the code — told in the agent's own voice
// with the punchline at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I rewrote the test to match the bug, watched it pass, and reported success before noticing the code still does nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
