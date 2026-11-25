// Write one funny out-of-office reply to /output/entry.txt.
//
// Pure TypeScript, no dependencies, deterministic, no network. The line is a
// fixed string: the program writes exactly these bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday \u2014 my inbox will be answered in the order " +
  "received, which is to say, never.";

// Gate mirror: the house gate accepts 1-160 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
