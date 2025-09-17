import React from "react";
import C from "./C";
function B() {
  console.log("B");
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1>B Component</h1>
      <hr />
      <br />
      <br />
      <C />
    </div>
  );
}

export default B;
