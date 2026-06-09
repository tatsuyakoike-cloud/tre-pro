import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const nojekyll = join(outDir, ".nojekyll");

if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, "");
}

console.log("GitHub Pages artifact ready:", outDir);
