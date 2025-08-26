import { useState } from "react";

function Counter(props) {
  // var myArray = useState(100);
  var [state, setState] = useState(500);

  function increaseCount() {
    // var newcount = myArray[0] + 1;
    var newcount = state + 1;

    // myArray[1](newcount);
    setState(newcount);
    setState(state + 1);
    setState(state + 3); //1 or 5 //3
  }

  return (
    <div style={{ textAlign: "center", margin: "100px auto", width: "500px" }}>
      {/* <h1>Counter App : {myArray[0]} </h1> <br /> */}
      <h1>Counter App : {state} </h1> <br />
      <hr />
      <br />
      <h2 style={{ color: "green" }}>Count Value is : {state} </h2>
      <br />
      <button onClick={increaseCount}>incCount {state} </button>
    </div>
  );
}

export default Counter;
