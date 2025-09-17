import { useState, useRef } from "react";

function UseRefComp() {
  console.log("Component Re-rendered");
  const [state, setState] = useState(100);

  var myRef = useRef(0); // myRef = {current:1}

  //   var x = 1;

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>useRef Hook concept : {state}</h1>

      <button
        onClick={() => {
          //   x++;
          myRef.current++;
        }}
      >
        update Ref
      </button>

      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        update State
      </button>

      <button
        onClick={() => {
          console.log("Ref Value", myRef.current);
          console.log("State Value", state);
        }}
      >
        Display Data
      </button>
    </div>
  );
}

export default UseRefComp;
