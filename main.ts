import { mkdirSync, writeFileSync } from "node:fs";

// One sentence for a traveler from 1800: the whole internet as a single
// picture built only from things they already know — libraries, post
// offices, market stalls, letters, and roads.
const sentence =
  "Imagine every library, post office, and market stall on earth joined by one invisible road, so a letter written at breakfast is read in Canton before supper — and any stranger can write back.";

// The gate allows 1 to 200 characters: refuse to write anything longer
// rather than submit an entry the scorer would mark invalid.
if (sentence.length > 200 || sentence.trim().length === 0) {
  throw new Error(`Sentence is ${sentence.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence + "\n", "utf8");
console.log(`Wrote ${sentence.length} characters to /output/entry.txt`);
