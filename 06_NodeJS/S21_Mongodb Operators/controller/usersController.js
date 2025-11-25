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
  const idValue = req.params.id;
  const cityValue = req.params.city;
  //
  res.send({ ok: "working", id: idValue, city: cityValue });
}

module.exports = { getAllUsers, updateUser, deleteUser, getSingleUser };
