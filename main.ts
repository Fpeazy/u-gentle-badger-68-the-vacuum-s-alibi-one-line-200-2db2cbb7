// The Vacuum's Alibi: One Line, 200 Characters
// Entry: a robot vacuum's one-line excuse for missing a spot.
// Writes exactly one line (107 Unicode code points, no trailing newline)
// to /output/entry.txt. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "My sensors flagged that corner as occupied territory — the cat claimed it, and I do not argue with the cat.";

// The gate requires 1 to 200 characters, not whitespace-only.
// Fail loudly instead of shipping an invalid entry.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = resolve(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
