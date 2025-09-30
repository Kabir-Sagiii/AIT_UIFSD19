const jwt = require("jsonwebtoken");
const secret_key =
  "vdkjbvdklsbvsbclscnkjsdbfsjcxcvbdjksb124jjvjkxbbvjfbvjdjjvfdvkjdfbvjkfdbvjdfbvkdjf";

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    var mytoken = token.slice(7);
    jwt.verify(mytoken, secret_key, (error) => {
      if (error) {
        res.send({ ok: false, message: "Invalid Token", results: null });
      } else {
        next();
      }
    });
  } else {
    res.json({ ok: false, message: "Token is missing", results: null });
  }
  console.log(token);
}

module.exports = { verifyToken };
