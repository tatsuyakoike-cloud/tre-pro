import { cpSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const nojekyll = join(outDir, ".nojekyll");

if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, "");
}

const staticLpDirs = ["trepro_chibakogyo", "trepro_is_fs", "trepro_email_warmup"];

for (const dir of staticLpDirs) {
  const staticLpDir = join(process.cwd(), dir);
  const staticLpOut = join(outDir, dir);

  if (existsSync(staticLpDir)) {
    cpSync(staticLpDir, staticLpOut, {
      recursive: true,
      filter: (src) => !src.includes("node_modules"),
    });
    console.log("Copied static LP:", staticLpOut);
  }
}

console.log("GitHub Pages artifact ready:", outDir);
