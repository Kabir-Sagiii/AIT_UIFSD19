const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const secret_key =
  "vdkjbvdklsbvsbclscnkjsdbfsjcxcvbdjksb124jjvjkxbbvjfbvjdjjvfdvkjdfbvjkfdbvjdfbvkdjf";
async function signIn(req, res) {
  try {
    const user = req.body;

    const user_data = await User.findOne({ email: user.email });

    if (user_data) {
      if (user_data.password === user.password) {
        jwt.sign(req.body, secret_key, (error, token) => {
          if (error) {
            throw Error("Failed to Create a Token");
          } else {
            res.json({
              ok: true,
              userData: user_data,
              message: "User Loggedin",
              token: token,
            });
          }
        });
      } else {
        throw Error("email or password is invalid");
      }
    } else {
      throw Error("User Does not Exist !!!");
    }
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error: error.message });
  }
}

async function signUp(req, res) {
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

module.exports = { signIn, signUp };
