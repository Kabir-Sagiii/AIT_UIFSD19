import { useContext } from "react";
import loginContext from "./loginContext";
import Signin from "../../pages/sign-in/Signin";
import Home from "../../pages/home/Home";
import Signup from "../../pages/sign-up/Signup";
import Products from "../../pages/products/Products.jsx";
import ProductDetails from "../../pages/product-details/ProductDetails.jsx";
import Cart from "../../pages/cart/Cart.jsx";
import Profile from "../../pages/profile/Profile";
import Contact from "../../pages/contact/Contact.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
function MyContainer() {
  const { isLoggedIn } = useContext(loginContext);

  return (
    <div>
      <Routes>
        <Route path={"/"} element={isLoggedIn ? <Home /> : <Signin />} />
        <Route
          path={"/products"}
          element={isLoggedIn ? <Products /> : <Navigate to="/" />}
        />
        <Route path={"/sign-up"} element={<Signup />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
        <Route
          path={"/cart"}
          element={isLoggedIn ? <Cart /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default MyContainer;
