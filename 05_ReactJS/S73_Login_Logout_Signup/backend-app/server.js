const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/userRoute");
const ProductRoute = require("./routes/productRoute");
const CartRoute = require("./routes/cartRoute");
const Authroute = require("./routes/authRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", UserRoute);
app.use("/products", ProductRoute);
app.use("/cart", CartRoute);
app.use("/auth", Authroute);

app.listen(5001, () => {
  console.log("Server Started");
});
