import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <div className="cartContainer">
      <section className="cartContent">
        <div className="cartHeader">
          <section>IMAGE</section>
          <section>TITLE</section>
          <section>PRICE</section>
          <section>QUANTITY</section>
          <section>ACTION</section>
        </div>
        <div className="cartBody">2</div>
      </section>
      <section className="cartSummary">2</section>
    </div>
  );
}

export default Cart;
