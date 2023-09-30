// const fs = require("fs");
import fs from 'fs'
import fsExtra from 'fs-extra'
import path from 'path'
import { Buffer } from 'buffer';


function main() {
  const source = fs
    .readFileSync("./package.json")
    .toString("utf-8");
  const sourceObj = JSON.parse(source);

  // Remove the scripts and devDependencies properties from the package.json file.
  delete sourceObj.scripts;
  delete sourceObj.devDependencies;

  // If the main property of the package.json file starts with "dist/", remove the "dist/" prefix.
  if (sourceObj.main.startsWith("dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }

  // Write the updated package.json file to the dist folder.
  fs.writeFileSync(
    path.join("./dist","package.json"),
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );

  fsExtra.copySync( path.join("./README.md"),path.join("./dist", "README.md"))

}

main();