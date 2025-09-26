import { useState } from "react";
import B from "./B";

function A() {
  console.log("A Rendered");
  const [state, setState] = useState("A Data");

  return (
    <div style={{ padding: "30px" }}>
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState("Updated A Data");
        }}
      >
        Update Data
      </button>
      <hr /> <br />
      <br />
      <B data={state} />
    </div>
  );
}

export default A;
