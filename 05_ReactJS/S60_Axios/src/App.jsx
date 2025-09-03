import "./App.css";
import GetRequestComp from "./components/axios/GetRequestComp";
import Users from "./components/axios/Users.jsx";
import Navbar from "./components/nav-bar/Navbar.jsx";
import Products from "./pages/products/Products.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
