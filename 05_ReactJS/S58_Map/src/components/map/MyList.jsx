import { useState } from "react";

function MyList() {
  const [state, setState] = useState([
    "html",
    "css",
    "js",
    "reactjs",
    "angular",
    "nodejs",
    "expressjs",
    "mongodb",
    "nextjs",
    "nestjs",
    "java",
    "python",
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>List of Technology</h2>
      <ul>
        {state.map(function (element, index) {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default MyList;
