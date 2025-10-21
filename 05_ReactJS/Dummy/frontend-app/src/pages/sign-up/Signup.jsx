import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [newuser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    city: "",
    phone: "",
  });

  const signUp = () => {
    console.log(newuser);
    axios
      .post("http://localhost:5001/auth/sign-up", newuser)
      .then((res) => {
        if (res.data.ok) {
          location.href = "/";
        } else {
          throw Error("Failed");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="h4 text-primary">Sign Up</h2>
        <form className="signup-form">
          <input
            value={newuser.name}
            onChange={(e) => {
              setNewUser({ ...newuser, name: e.target.value });
            }}
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            value={newuser.city}
            onChange={(e) => {
              setNewUser({ ...newuser, city: e.target.value });
            }}
            type="text"
            placeholder="City"
            name="city"
            required
          />

          <select
            name="gender"
            required
            value={newuser.gender}
            onChange={(e) => {
              setNewUser({ ...newuser, gender: e.target.value });
            }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            value={newuser.email}
            onChange={(e) => {
              setNewUser({ ...newuser, email: e.target.value });
            }}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            value={newuser.phone}
            onChange={(e) => {
              setNewUser({ ...newuser, phone: e.target.value });
            }}
            type="tel"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <input
            value={newuser.password}
            onChange={(e) => {
              setNewUser({ ...newuser, password: e.target.value });
            }}
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button type="button" onClick={signUp}>
            Register
          </button>
        </form>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          Already Registered ?<Link to="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
