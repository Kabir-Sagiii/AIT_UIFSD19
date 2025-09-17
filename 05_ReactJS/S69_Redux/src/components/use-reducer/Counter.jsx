import { useReducer } from "react";

import counterReducer from "./CounterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value : {state}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment", countValue: 1 });
        }}
      >
        incCount by 1
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "increment", countValue: 5 });
        }}
      >
        incCount by 5
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decCount by 1
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decCount by 3
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Counter;
