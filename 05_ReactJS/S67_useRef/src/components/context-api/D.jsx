import { useContext } from "react";
import myContext from "./context.js";

function D() {
  console.log("D");
  const data = useContext(myContext);
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1>D Component</h1>
      <br />
      <p style={{ color: "red", textAlign: "left", fontSize: "21px" }}>
        {data}
      </p>
      <hr />
    </div>
  );
}

export default D;
