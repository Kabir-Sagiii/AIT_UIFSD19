import React from "react";
import D from "./D";
function C(props) {
  console.log("C Rendered");
  //props = {data: "A Data"}
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>C Component</h1>
      <hr />
      <br />
      <br />
      <D data={props.data} />
    </div>
  );
}

export default C;
