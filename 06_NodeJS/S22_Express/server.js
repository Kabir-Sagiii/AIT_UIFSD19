const app = require("./app.js");
const createConnection = require("./config/mongodbConnection.js");

const AuthRoute = require("./routes/authRoute.js");
const UserRoute = require("./routes/usersRoute.js");
const ProductRoute = require("./routes/productRoute.js");

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/product", ProductRoute);

app.listen(5000, () => {
  console.log("Server Started");
  createConnection();
});
