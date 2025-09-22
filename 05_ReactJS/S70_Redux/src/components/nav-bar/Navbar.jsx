import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import loginContext from "../context-api/example-2/loginContext";
function Navbar() {
  // const { logout } = useContext(loginContext);
  // const storeData = useSelector((store) => {
  //   //logic
  //   return store + " Verma";
  // });
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
        {/* <i style={{ fontSize: "27px" }} className="bi bi-suit-heart-fill"></i> */}
        {/* <h4>{storeData}</h4>&nbsp;&nbsp;&nbsp;&nbsp; */}
        <button
          onClick={() => {
            // logout(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
