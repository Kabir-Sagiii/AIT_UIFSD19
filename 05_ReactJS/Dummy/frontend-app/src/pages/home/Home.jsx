import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My-Mart</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores
        suscipit maxime doloribus excepturi dolor facere soluta error
        perspiciatis aspernatur libero incidunt tempora assumenda doloremque
        quos possimus quaerat, voluptate fuga?
      </p>
      <button>
        <i className="bi bi-shop" style={{ color: "green" }}></i> Explore More
        !!!
      </button>
    </div>
  );
};

export default Home;
