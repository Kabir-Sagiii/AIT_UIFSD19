const mongoose = require("mongoose");
const db1 = "mongodb://localhost:27017/mytestdb";
const db2 = "mongodb://localhost:27017/mytestcartdb";

const gfgb3db = mongoose.createConnection(db1);
const gfgcartdb = mongoose.createConnection(db2);

gfgb3db.on("connected", () => {
  console.log("Connected with", gfgb3db.name, " Database Successfully");
});

gfgcartdb.on("connected", () => {
  console.log("Connected with", gfgcartdb.name, " Database Successfully");
});

gfgb3db.on("error", () => {
  console.log("Failed to Connect with", gfgb3db.name);
});

gfgcartdb.on("error", () => {
  console.log("Failed to Connect with", gfgcartdb.name);
});

module.exports = { gfgb3db, gfgcartdb };
