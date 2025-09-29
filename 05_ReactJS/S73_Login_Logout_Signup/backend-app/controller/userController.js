const User = require("../model/userSchema");

function getUsers(req, res) {
  User.find()
    .then((data) => {
      res.json({ ok: true, results: data });
    })
    .catch((error) => {
      res.json({ ok: false, error: error.message });
    });
}

function getSingleUser(req, res) {
  User.findOne({ _id: req.params.id })
    .then((data) => {
      res.json({ ok: true, user: data });
    })
    .catch((error) => {
      res.json({ ok: false, error: error.message });
    });
}

function createUser(req, res) {
  const userdata = req.body;

  const newuser = new User(userdata);

  newuser
    .save()
    .then(() => {
      res.send({ ok: true, result: "User Created successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });
}

function updateUser(req, res) {
  const idValue = req.params.id;

  User.updateOne({ _id: idValue }, { $set: req.body })
    .then(() => {
      res.send({ ok: true, result: "User Updated" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: error.message });
    });
}

async function deleteUser() {
  try {
    const id = req.query.id;
    const result = await User.deleteOne({ _id: id });
    res.send({
      ok: true,
      message: "User Removed Successfully",
      result: result,
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
};
