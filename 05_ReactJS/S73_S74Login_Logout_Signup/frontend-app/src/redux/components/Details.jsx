import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const StoreData = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h1>Details Component</h1>
      <br />
      <p>
        Name :{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>{StoreData}</span>
      </p>
    </div>
  );
}

export default Details;
