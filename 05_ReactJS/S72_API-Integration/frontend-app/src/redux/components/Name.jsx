import { useRef } from "react";
import myStore from "../store/store";
import { nameActionCreator } from "../actionCreators/nameActionCreator";
function Name() {
  const inputRef = useRef(null);
  const getName = () => {
    var actionObject = nameActionCreator(inputRef.current.value);
    myStore.dispatch(actionObject);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h1>Name Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="enter name" />
      &nbsp;
      <button onClick={getName}>Submit</button>
    </div>
  );
}

export default Name;
