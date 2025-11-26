function getAllUsers(req, res) {
  res.send("working");
}

function updateUser(req, res) {
  res.send("working");
}

function deleteUser(req, res) {
  res.send("working");
}

function getSingleUser(req, res) {
  //accessing path params data
  const idValue = req.params.id;
  const cityValue = req.params.city;
  //
  res.send({ ok: "working", id: idValue, city: cityValue });
}

function getUsersBasedOnGender(req, res) {
  //accessing query params data
  const Value = req.query;
  res.json({ ok: true, queryParams: Value });
}

module.exports = {
  getAllUsers,
  getUsersBasedOnGender,
  updateUser,
  deleteUser,
  getSingleUser,
};
