import "./Signin.css";
import { useContext, useRef } from "react";
import loginContext from "../../components/context-api/loginContext";
import { loginUser } from "./signinService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signin() {
  const { login, isLoggedIn } = useContext(loginContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="h4 text-primary" style={{ marginBottom: "10px" }}>
          Sign In Page
        </h2>
        <form className="login-form">
          <input ref={emailRef} type="text" placeholder="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button
            type="button"
            onClick={() => {
              if (
                emailRef.current.value === "" &&
                passwordRef.current.value === ""
              ) {
                toast.error("Enter the Credentials !!!", { autoClose: 1000 });
              } else {
                loginUser(
                  {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                  },
                  login
                );
              }
            }}
          >
            Sign In
          </button>
        </form>
        <div className="divider">OR</div>
        <button className="facebook-login">Log in with Facebook</button>
        <Link to="#" className="forgot-password">
          Forgot password?
        </Link>
      </div>
      <div className="signup-box">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}

export default Signin;
