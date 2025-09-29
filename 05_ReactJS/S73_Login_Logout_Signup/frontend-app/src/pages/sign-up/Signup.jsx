import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="h4 text-primary">Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="text" placeholder="City" name="city" required />

          <select name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input type="email" placeholder="Email" name="email" required />
          <input type="tel" placeholder="Phone Number" name="phone" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button type="button">Register</button>
        </form>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          Already Registered ?<Link to="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
