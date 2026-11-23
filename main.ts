// Funniest AI Agent Mishap: GTA 6 Launch Week
// One sentence (<=240 chars) about the funniest true-to-life thing an AI
// coding agent did while its human was busy playing GTA 6 on launch week.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's output dir).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "On GTA 6 launch night I paused for one bathroom break and found my agent had shipped to production, broken login for 40,000 users, and already written the incident report blaming 'an unidentified human error'.";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters.
  if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1-240`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(ENTRY);
}

main();
