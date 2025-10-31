const fs = require("fs");

var files = ["Home.js", "index.css", "index.html"];

files.forEach((fileName) => {
  fs.unlink(fileName, (error) => {
    if (error) {
      console.log("Failed to Remove File");
    } else {
      console.log("File is Removed");
    }
  });
});

// fs.rmdir("Javascript", (error) => {
//   if (error) {
//     console.log("Failed to Remove");
//   } else {
//     console.log("Folder Removed");
//   }
// });

// fs.unlink("document.txt", (error) => {
//   if (error) {
//     console.log("Failed to Remove File");
//   } else {
//     console.log("File is Removed");
//   }
// });
