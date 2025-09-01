import "./App.css";

import DataRender from "./components/map/DataRender";
import MyList from "./components/map/MyList";
import UsersProfile from "./components/map/UsersProfile";

function App() {
  return (
    <div className="app">
      <UsersProfile />
      {/* <MyList />
      <hr />
      <DataRender /> */}
    </div>
  );
}

export default App;
