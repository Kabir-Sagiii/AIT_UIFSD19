import React from "react";
import C from "./C";
function B(props) {
  console.log("B Rendered");
  //props = {data: "A Data"}
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1>B Component</h1>
      <hr />
      <br />
      <br />
      <C data={props.data} />
    </div>
  );
}

export default B;
