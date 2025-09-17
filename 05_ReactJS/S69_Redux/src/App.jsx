import "./App.css";

import Navbar from "./components/nav-bar/Navbar.jsx";
import Name from "./redux/components/Name.jsx";
import Details from "./redux/components/Details.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Name />
      <br /> <hr />
      <br />
      <Details />
    </div>
  );
}

export default App;
