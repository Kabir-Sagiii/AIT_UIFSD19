import "./App.css";

import Navbar from "./components/nav-bar/Navbar.jsx";
import Products from "./pages/products/Products.jsx";
import Signin from "./pages/sign-in/Signin.jsx";
import Signup from "./pages/sign-up/Signup.jsx";
import Home from "./pages/home/Home.jsx";

import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/sign-in"} element={<Signin />} />
        <Route path={"/sign-up"} element={<Signup />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
