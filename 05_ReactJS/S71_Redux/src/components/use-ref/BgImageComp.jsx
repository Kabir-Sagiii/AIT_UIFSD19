import { useEffect, useState, useRef } from "react";
import "./BgImageComp.css";
function BgImageComp() {
  const [state, setState] = useState("bgImage1");
  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      changeBgImage();
    }, 3000);

    return () => {
      clearInterval(ref.current);
    };
  }, [state]);

  useEffect(() => {
    setTimeout(() => {
      clearInterval(ref.current);
    }, 4000);
  }, [state]);

  const changeBgImage = () => {
    if (state === "bgImage1") {
      setState("bgImage2");
    } else if (state === "bgImage2") {
      setState("bgImage3");
    } else if (state === "bgImage3") {
      setState("bgImage4");
    } else {
      setState("bgImage1");
    }
  };

  return <div className={`bgImageContainer ${state}`}></div>;
}

export default BgImageComp;
