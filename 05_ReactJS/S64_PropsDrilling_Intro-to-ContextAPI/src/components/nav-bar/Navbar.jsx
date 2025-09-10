import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div id="brand">
        <h1>Dude'sMart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">ContactUs</Link>
        <Link to="/sign-in">Sign-In</Link>
        <Link to="/sign-up">Sign-Up</Link>
      </div>
      <div id="icons">
        <i style={{ fontSize: "27px" }} className="bi bi-bag-check"></i>
        <i style={{ fontSize: "27px" }} className="bi bi-suit-heart-fill"></i>

        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
