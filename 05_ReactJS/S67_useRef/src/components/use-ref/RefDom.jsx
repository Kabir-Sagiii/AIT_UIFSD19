import { useRef } from "react";

function RefDom() {
  var h1Ref = useRef(); //h1Ref= {current :h1DomElement}
  var btnRef = useRef();

  return (
    <div style={{ padding: "50px" }}>
      <h1 ref={h1Ref}>useRef for Dom Manipulation</h1>
      <br />
      <button
        ref={btnRef}
        onClick={() => {
          h1Ref.current.style.color = "red";
          h1Ref.current.innerText = "useRef Concept ";
          btnRef.current.style.border = "2px solid red";
          btnRef.current.style.padding = "10px 20px";
          btnRef.current.style.color = "red";
          //   h1Ref.current.style.display = "none";
        }}
      >
        update
      </button>
    </div>
  );
}

export default RefDom;
