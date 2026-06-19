import { cpSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const nojekyll = join(outDir, ".nojekyll");

if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, "");
}

const staticLpDir = join(process.cwd(), "trepro_chibakogyo");
const staticLpOut = join(outDir, "trepro_chibakogyo");

if (existsSync(staticLpDir)) {
  cpSync(staticLpDir, staticLpOut, {
    recursive: true,
    filter: (src) => !src.includes("node_modules"),
  });
  console.log("Copied static LP:", staticLpOut);
}

console.log("GitHub Pages artifact ready:", outDir);
