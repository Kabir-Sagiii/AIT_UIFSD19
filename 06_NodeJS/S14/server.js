const app = require("./app.js");

const AuthRoute = require("./routes/authRoute.js");
const UserRoute = require("./routes/usersRoute.js");

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

app.listen(5000, () => {
  console.log("Server Started");
});
