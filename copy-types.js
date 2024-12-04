import fs from "fs";
import path from "path";

const source = path.resolve("src/global.d.ts");
const destination = path.resolve("dist/global.d.ts");

fs.copyFileSync(source, destination);
console.log(`Copied ${source} to ${destination}`);
