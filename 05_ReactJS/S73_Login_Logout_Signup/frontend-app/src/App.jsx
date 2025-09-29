import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/nav-bar/Navbar.jsx";
import MyContainer from "./components/context-api/MyContainer.jsx";
import loginContext from "./components/context-api/loginContext.js";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem("login")) {
      return localStorage.getItem("login");
    } else {
      return false;
    }
  });

  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

  const login = () => {
    localStorage.setItem("login", true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("login", false);
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <ToastContainer />
      <loginContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Navbar /> : null}
        <MyContainer />
      </loginContext.Provider>
    </div>
  );
}

export default App;
