const fs = require("fs");

fs.writeFile("document.txt", "Hello, This is my data", (error) => {
  if (error) {
    console.log("Failed to Create File");
    console.log(error);
  } else {
    console.log("File Created");
  }
});
