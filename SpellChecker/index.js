const Grammarbot = require("grammarbot");
const fs = require("fs");

const bot = new Grammarbot();

function check_for_spelling() {
  var flaggedFiles = [];
  var files = process.argv.slice(2);
  console.log("Checking Files for spelling:");
  console.log(files);
  for (const file of files) {
    if (fs.existsSync(file)) {
      var text_data = fs.readFileSync(file, "utf8");
      var parsed_data = text_data.replace(/^---[\s\S]+?---/gm, ""); // take out frontmatter
      parsed_data = parsed_data.replace(/^```[\s\S]+?```/gm, ""); // take out code
      parsed_data = parsed_data.replace(/<[^>]*>/gim, ""); // take out any html tags
      parsed_data = parsed_data.replace(/\[(.*)\]\(.*\)/gm, "$1"); // take out any html tags but keep text

      // Callback style
      bot.check(parsed_data, function(error, result) {
        if (result.matches.length !== 0) {
          // it has a recommendation for the text
          flaggedFiles.push([file, result.matches]);
        }
      });
    }
  }

  if (flaggedFiles.length !== 0) {
    console.log("Potential spelling mistakes found.");
    for (const file of flaggedFiles) {
      console.log(file[0]);
      console.log(file[1]);
    }
    return 1;
  }
  return 0;
}

check_for_spelling();
