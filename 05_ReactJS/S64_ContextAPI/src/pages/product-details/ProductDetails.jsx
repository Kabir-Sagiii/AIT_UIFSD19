import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); //id:10

  const [product, setProduct] = useState({
    image: "",
    title: "",
    price: "",
    rating: {
      rate: 0,
    },
    category: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        alert("Failed to Access Product Info");
        console.log(error);
      });
  }, []);
  return (
    <div className="product-details">
      <section className="imageSection">
        <img src={product.image} width={"100%"} height={450} alt="" />
      </section>
      <section className="contentSection">
        <div className="twoColumn">
          <div>
            <dl>
              <dt>Product Name</dt>
              <dd>{product.title}</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Price</dt>
              <dd>$ {product.price}</dd>
            </dl>
          </div>
        </div>
        <div className="twoColumn">
          <div>
            <dl>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Rating</dt>
              <dd>$ {product.rating.rate}</dd>
            </dl>
          </div>
        </div>
        <div>
          <dl>
            <dt>Description</dt>
            <dd>{product.description}</dd>
          </dl>
        </div>
        <div className="twoColumn">
          <div>
            <button style={{ backgroundColor: "blue", color: "white" }}>
              Back to Products
            </button>
          </div>
          <div>
            <button style={{ backgroundColor: "green", color: "white" }}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
