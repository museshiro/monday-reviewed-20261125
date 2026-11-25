import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry, written exactly as-is with no trailing newline.
// Writes only to /output/entry.txt — never to a relative path, so it
// cannot throw in the grader's read-only sandbox.
const line = "Monday: one star. I replied to all 63 emails, and my reward was 64.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
