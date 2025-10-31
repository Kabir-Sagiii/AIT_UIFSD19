import fs from "fs";

fs.readFile("delete.js", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
