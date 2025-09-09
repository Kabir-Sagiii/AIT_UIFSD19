import React from "react";

function D(props) {
  console.log("D Rendered");
  //props = {data: "A Data"}
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1>D Component</h1>
      <br />
      <p style={{ color: "red", textAlign: "left", fontSize: "21px" }}>
        {props.data}
      </p>
      <hr />
    </div>
  );
}

export default D;
