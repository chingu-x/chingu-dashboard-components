import fs from "fs";
import path from "path";

// Define the root path of your dist and types folders
const distPath = "./dist";

// Read all directories in the components folder
const components = fs.readdirSync(distPath).filter((file) => {
  return fs.statSync(path.join(distPath, file)).isDirectory();
});

// Generate exports object
const exportsObject = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/types/index.d.ts",
  },
  "./styles": {
    import: "./dist/style.css",
  },
};

components.forEach((component) => {
  exportsObject[`./${component}`] = {
    import: `./dist/${component}/index.js`,
    types: `./dist/types/${component}/index.d.ts`,
  };
});

// Write the generated exports to the package.json file
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
packageJson.exports = exportsObject;

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

console.log("exports field generated and saved to package.json");
