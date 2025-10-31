const fs = require("fs");

fs.readFile("Create-File.js", "utf-8", (error, data) => {
  if (error) {
    console.log("Failed to access content");
    console.log(error);
  } else {
    console.log(data);
  }
});
