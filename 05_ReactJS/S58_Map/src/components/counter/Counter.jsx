import { useState } from "react";

function Counter(props) {
  var [state, setState] = useState(0);

  function increaseCount() {
    // setState(state + 1); // 0 + 1  ==> state is 1

    // setState(state + 3); // 1 + 1  ==> state is 2

    // setState(state + 5); // 2 + 5  ==> state is 7

    setState((currentStateValue) => {
      // Updater Function
      // 0 +1 = 1
      return currentStateValue + 1;
    });

    setState((currentStateValue) => {
      // 1 + 2 = 3
      return currentStateValue + 2;
    });

    setState((currentStateValue) => {
      return currentStateValue + 5; //3 + 5 = 8
    });
  }

  return (
    <div style={{ textAlign: "center", margin: "100px auto", width: "500px" }}>
      <h1 style={{ color: "green" }}>Count Value is : {state} </h1>
      <br />
      <button onClick={increaseCount}>incCount </button>
    </div>
  );
}

export default Counter;
