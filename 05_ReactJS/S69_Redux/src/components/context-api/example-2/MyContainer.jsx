// import React from "react";
// import Signin from "../../../pages/sign-in/Signin";
// import Home from "../../../pages/home/Home";
// function MyContainer() {
//   var component;
//   if (false) {
//     component = <Home />;
//   } else {
//     component = <Signin />;
//   }

//   return <div>{component}</div>;
// }

// export default MyContainer;

import { useContext } from "react";
import loginContext from "./loginContext";
import Signin from "../../../pages/sign-in/Signin";
import Home from "../../../pages/home/Home";
function MyContainer() {
  const { isLoggedIn } = useContext(loginContext);
  return <div>{isLoggedIn ? <Home /> : <Signin />}</div>;
}

export default MyContainer;
