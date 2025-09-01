import { useState } from "react";

var techNames = [
  "html",
  "css",
  "js",
  "java",
  "python",
  "reactjs",
  "spring",
  "mongodb",
  "nodejs",
  "expressjs",
];

function TechList() {
  const [state, setState] = useState(techNames);
  return (
    <div style={{ padding: "50px" }}>
      <h2>Tech List</h2>
      <ol>
        {state.map((element) => {
          //[<li>html</li>,<li>css</li>,<li>js</li>]
          return <li> {element} </li>;
        })}
      </ol>
    </div>
  );
}

export default TechList;
