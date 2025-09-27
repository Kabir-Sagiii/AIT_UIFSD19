import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A() {
  console.log("A");
  const [state, setState] = useState("Hello I am Data from A Component");
  return (
    <div style={{ padding: "30px" }}>
      <h1>A Component</h1>
      <br />
      <button
        onClick={() => {
          setState("Updated Context Data");
        }}
      >
        Update Data
      </button>
      <br />
      <br />
      <hr /> <br />
      <br />
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
