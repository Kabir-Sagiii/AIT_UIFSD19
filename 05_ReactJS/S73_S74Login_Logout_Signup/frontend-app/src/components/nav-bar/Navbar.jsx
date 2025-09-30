import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import loginContext from "../context-api/loginContext";
function Navbar() {
  const { logout, isLoggedIn } = useContext(loginContext);

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
      </div>
      <div id="icons">
        <Link to="/cart">
          <i
            style={{ fontSize: "27px", color: "white", fontWeight: "bold" }}
            className="bi bi-bag-check"
          ></i>
        </Link>

        <Link to="/">
          <button type="button" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
