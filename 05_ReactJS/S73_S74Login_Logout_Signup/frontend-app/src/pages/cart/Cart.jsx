import { useEffect } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { getCartsData, removeFromCart } from "./Cart";
function Cart() {
  useEffect(() => {
    if (cartsData.length === 0) {
      getCartsData();
    }
  }, []);
  const cartsData = useSelector((store) => {
    return store.cart;
  });
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
        <div className="cartBody">
          {cartsData.length > 0 ? (
            cartsData.map(function ({ image, title, price, id }) {
              return (
                <div className="cartBodyRow">
                  <section>
                    <img src={image} alt="" width="70" height="70" />
                  </section>
                  <section>{title}</section>
                  <section>{price}</section>
                  <section>1</section>
                  <section>
                    <button
                      onClick={() => {
                        removeFromCart(id);
                      }}
                    >
                      Remove
                    </button>
                  </section>
                </div>
              );
            })
          ) : (
            <h1
              style={{ color: "red", marginTop: "150px", textAlign: "center" }}
            >
              No Product Added in the Cart
            </h1>
          )}
        </div>
      </section>
      <section className="cartSummary"></section>
    </div>
  );
}

export default Cart;
