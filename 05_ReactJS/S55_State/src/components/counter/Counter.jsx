import { useState } from "react";

function Counter(props) {
  var myArray = useState(0);

  function increaseCount() {
    var newcount = myArray[0] + 1;
    myArray[1](newcount);

    // myArray[1](myArray[0] + 1)
  }

  return (
    <div style={{ textAlign: "center", margin: "100px auto", width: "500px" }}>
      <h1>Counter App</h1> <br />
      <hr />
      <br />
      <h2 style={{ color: "green" }}>Count Value is : {myArray[0]} </h2>
      <br />
      {/* <button onclick="increaseCount()">incCount</button> */}
      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
