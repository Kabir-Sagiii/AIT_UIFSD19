import { useEffect, useRef, useState } from "react";
import "./Products.css";
import {
  getAllProducts,
  filterProductBasedOnCategory,
  addToCart,
} from "./Products";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Products() {
  const dispatch = useDispatch();
  const id = useRef();
  const [bgImage, setBgImage] = useState({
    image: "bgImage-1",
    title: "Electronic",
  });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  useEffect(() => {
    id.current = setInterval(() => {
      if (bgImage.image === "bgImage-1") {
        setBgImage({
          image: "bgImage-2",
          title: "Jewelery",
        });
      } else if (bgImage.image === "bgImage-2") {
        setBgImage({
          image: "bgImage-3",
          title: "Men's",
        });
      } else if (bgImage.image === "bgImage-3") {
        setBgImage({
          image: "bgImage-4",
          title: "Women's",
        });
      } else {
        setBgImage({
          image: "bgImage-1",
          title: "Electronic",
        });
      }
    }, 2000);
    return () => {
      clearInterval(id.current);
    };
  }, [bgImage]);

  return (
    <div className="products-container">
      <section className={`products-ad ${bgImage.image}`}>
        <h2>{bgImage.title} Products Information</h2>
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
              <Link to={`/product-details/${product.id}`}>
                <button style={{ backgroundColor: "coral" }}>
                  Product Details
                </button>
              </Link>
              <button
                style={{ backgroundColor: "green" }}
                onClick={() => {
                  addToCart(product, dispatch);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Products;
