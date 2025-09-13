import { useContext } from "react";
import myContext from "./context";
import D from "./D";

function C() {
  console.log("C");
  const data = useContext(myContext);
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>
        C Component : <span style={{ color: "green" }}>{data}</span>
      </h1>
      <hr />
      <br />
      <br />
      <D />
    </div>
  );
}

export default C;
