const mongoose = require("mongoose");
const { gfgb3db } = require("../config/connection");
//Create Scehma Object : Defining the structure of Document
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "abc",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  city: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//Create Model Class

const UserModel = gfgb3db.model("user", UserSchema);

module.exports = UserModel;
