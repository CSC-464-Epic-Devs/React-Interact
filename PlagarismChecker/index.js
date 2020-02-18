const g = require("@stewartmcgown/grammarly-api");
const fs = require("fs");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*
const files = [
  "counterapp.mdx",
  "index.mdx",
  "jsx.mdx",
  "props_new.mdx",
  "props_old.mdx",
  "state.mdx"
];*/

/*export async function TestForPlagarism(files) {
  var flaggedFiles = [];
  for (const file of files) {
    if (fs.existsSync(file)) {
      const text = fs.readFileSync(file, "utf8");
      const result = await g.plagiarism(text);
      if (result.hasPlagiarism) {
        flaggedFiles.push(file);
      }
      await sleep(1000);
    }
  }

  return { flaggedFiles: flaggedFiles };
}*/

async function f() {
  var flaggedFiles = [];
  var files = process.argv.slice(2);
  console.log("Changed Content Files");
  console.log(files);
  for (const file of files) {
    if (fs.existsSync(file)) {
      const text = fs.readFileSync(file, "utf8");
      const result = await g.plagiarism(text);
      if (result.hasPlagiarism) {
        flaggedFiles.push(file);
      }
      await sleep(1000);
    }
  }
  if (flaggedFiles.length !== 0) {
    console.log("Plagarism Detected");
    console.log(flaggedFiles);
    return 1;
  }
  return 0;
}

f();
