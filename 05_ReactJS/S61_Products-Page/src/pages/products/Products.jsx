import { useEffect, useState } from "react";
import "./Products.css";
import { getAllProducts, filterProductBasedOnCategory } from "./Products";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <div className="products-container">
      <section className="products-ad">
        <h2>Electronics Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit
          eveniet nemo soluta est iste porro, ad rem culpa id fugit cupiditate
          impedit, sunt blanditiis eos quis amet aperiam quibusdam.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Velit sit eveniet nemo
          soluta est iste porro, ad rem culpa id fugit cupiditate impedit, sunt
          blanditiis eos quis amet aperiam quibusdam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit sit eveniet nemo soluta est iste
          porro, ad rem culpa id fugit cupiditate impedit, sunt blanditiis eos
          quis amet aperiam quibusdam.
        </p>
      </section>

      <section className="products-categories">
        <div>
          <input
            type="radio"
            defaultChecked
            value="all"
            id="all"
            name="category"
            onChange={() => {
              filterProductBasedOnCategory(null, setProducts);
            }}
          />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input
            type="radio"
            value="electronics"
            id="electronics"
            name="category"
            onChange={() => {
              filterProductBasedOnCategory("electronics", setProducts);
            }}
          />
          <label htmlFor="all">Electronics</label>
        </div>
        <div>
          <input
            type="radio"
            value="jewelery"
            onChange={() => {
              filterProductBasedOnCategory("jewelery", setProducts);
            }}
            id="jewelery"
            name="category"
          />
          <label htmlFor="jewelery">Jewelery</label>
        </div>
        <div>
          <input
            type="radio"
            value="mensclothing"
            id="mens"
            name="category"
            onChange={() => {
              filterProductBasedOnCategory("men's clothing", setProducts);
            }}
          />
          <label htmlFor="mens">Men's</label>
        </div>
        <div>
          <input
            type="radio"
            value="womensclothing"
            id="womens"
            name="category"
            onChange={() => {
              filterProductBasedOnCategory("women's clothing", setProducts);
            }}
          />
          <label htmlFor="womens">Women's</label>
        </div>
      </section>

      <section className="products-data">
        {products.map(function (product) {
          return (
            <div className="card">
              <img src={product.image} width={"100%"} height={"230"} alt="" />
              <h3>{product.title}</h3>
              <p>$ {product.price}</p>
              <button style={{ backgroundColor: "coral" }}>
                Product Details
              </button>
              <button style={{ backgroundColor: "green" }}>Add to Cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Products;
