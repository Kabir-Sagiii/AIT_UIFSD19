const fs = require("fs");

fs.mkdir("Javascript", (error) => {
  if (error) {
    console.log("Failed to Create Folder");
  } else {
    console.log("Folder Created");
  }
});
