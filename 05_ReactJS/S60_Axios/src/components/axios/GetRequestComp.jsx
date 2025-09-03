import { useState } from "react";
import { sendGetRequest } from "./GetRequest";
function GetRequestComp() {
  const [state, setState] = useState([]);

  const printState = () => {
    console.log(state);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Get Request Example</h1>
      <br />
      <button
        onClick={() => {
          sendGetRequest(setState);
        }}
      >
        Get Request
      </button>

      <button onClick={printState}>Print state</button>

      <div style={{ marginTop: "30px" }}>
        <ol>
          {state.map(function (user) {
            return (
              <li style={{ marginBottom: "20px" }}>
                {user.name}
                <ol>
                  <li>{user.address.city}</li>
                  <li>{user.address.zipcode}</li>
                </ol>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default GetRequestComp;
