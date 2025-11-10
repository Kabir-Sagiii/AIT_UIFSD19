const { readFile } = require("fs");

function readFileContent(fileName, res) {
  readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      res.end("{ok:false,error:'Failed to Access Web page'}");
    } else {
      res.end(data);
    }
  });
}

module.exports = readFileContent;
