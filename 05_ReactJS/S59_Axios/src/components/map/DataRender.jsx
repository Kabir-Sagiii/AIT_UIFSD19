import { useState } from "react";

function DataRender() {
  const [state, setState] = useState(["sagar", "rajesh", 10, 20, "riya"]);

  const [data, setData] = useState([
    <p>para-1</p>,
    <h3>i am h3</h3>,
    <section>section element</section>,
  ]);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Data Rendering</h2>
      <p style={{ color: "blue" }}>{state}</p>
      <div id="array-elements">{data}</div>
    </div>
  );
}

export default DataRender;
