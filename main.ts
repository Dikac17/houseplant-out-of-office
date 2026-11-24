// The Houseplant Out-of-Office
// make.fun entry for u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.
// Writes one out-of-office auto-reply as a houseplant (100 characters) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader's
// container). Node 22, stdlib only, no network, deterministic: the same
// bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of the office, probably dead. Water me when you get back. Or don't. You haven't since March.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
