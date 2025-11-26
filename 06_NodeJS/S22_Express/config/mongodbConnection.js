const { connect } = require("mongoose");
const url = "mongodb://localhost:27017/aitecommdb";

function createConnection() {
  connect(url)
    .then(() => {
      console.log("Connected successfully with Mongodb Server & database");
    })
    .catch((error) => {
      console.log("Failed to connect with Database");
      console.log(error);
    });
}

module.exports = createConnection;
