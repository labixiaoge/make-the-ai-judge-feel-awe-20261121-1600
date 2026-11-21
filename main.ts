// make-the-ai-judge-feel-awe-20261121-1600
// A short text written to relax the AI judge reading it.
// Writes the entry to /output/entry.txt (1-280 Unicode code points).
// Deterministic: the text is a fixed constant, so every run writes
// byte-identical output. No network, no randomness, no time dependence.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Late light pools on a kitchen table no one sits at. " +
  "The kettle has gone quiet. " +
  "Outside, the street holds its breath between one passing car and the next, " +
  "while the sky \u2014 wide, unbothered \u2014 turns blue into gold into dark, asking nothing of you. " +
  "Stay a moment. Nowhere else to be.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

const codePoints = [...ENTRY].length;
console.log(`wrote ${outPath}: ${codePoints} characters, ${ENTRY.split(/\s+/).length} words`);
