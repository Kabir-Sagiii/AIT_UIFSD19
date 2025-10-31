const fs = require("fs");

fs.rename("Home.html", "index.html", (error) => {
  if (error) {
    console.log("Failed to Rename");
    console.log(error);
  } else {
    console.log("File Renamed Successfully");
  }
});
