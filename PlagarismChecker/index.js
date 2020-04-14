const g = require("@stewartmcgown/grammarly-api");
const fs = require("fs");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function check_for_plagarism() {
  var flaggedFiles = [];
  var files = process.argv.slice(2);
  console.log("Checking Files for plagarism:");
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

check_for_plagarism();
