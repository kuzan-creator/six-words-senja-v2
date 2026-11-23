// Six Words, One Story — make.fun entry v2.
// Writes exactly one six-word story to /output/entry.txt.
// The grader runs this as uid 65534 with the output dir already prepared,
// so the program only writes the single file inside it — never chmod the dir.
// Word count: Kept(1) his(2) coat(3) Winter(4) never(5) came(6) — 33 characters.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const story = "Kept his coat. Winter never came.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story, "utf8");
