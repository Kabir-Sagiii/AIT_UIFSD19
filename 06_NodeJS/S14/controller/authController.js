function createUserAccount(req, res) {
  //manage request of signup
  const data = req.body;
  console.log(data);
  res.send("Account Created");
}

function handleLogin(req, res) {}

module.exports = { createUserAccount, handleLogin };
