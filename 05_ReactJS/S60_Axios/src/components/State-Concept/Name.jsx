import { useState } from "react";

function Name() {
  const [username, setUserName] = useState("Rohan");

  const [image, setImage] = useState(
    "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
  );

  function changeToRohan() {
    setUserName("Rohan");
    setUserName("Raj");
    setImage(
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    );
  }

  function changeToSeema() {
    setUserName("Seema");
    setImage(
      "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
    );
  }

  return (
    <div style={{ padding: "100px" }}>
      <h1>
        My Name is : <span style={{ color: "blue" }}>{username}</span>
      </h1>
      <br />
      <img width={300} height={300} src={image} />
      <br />
      <br />
      <button onClick={changeToRohan}>Rohan</button>&nbsp;&nbsp;
      <button onClick={changeToSeema}>Seema</button>
    </div>
  );
}

export default Name;
