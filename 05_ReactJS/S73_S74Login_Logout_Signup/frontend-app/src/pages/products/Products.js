import axios from "axios";
import { toast } from "react-toastify/unstyled";

export function getAllProducts(setProducts) {
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (res) {
      setProducts(res.data);
    })
    .catch(function (error) {
      alert("Failed to Access Products");
      console.log(error);
    });
}

export function filterProductBasedOnCategory(category, setProducts) {
  if (category) {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (res) {
        setProducts(
          res.data.filter((product) => {
            return product.category === category;
          })
        );
      })
      .catch(function (error) {
        alert("Failed to Access Products");
        console.log(error);
      });
  } else {
    getAllProducts(setProducts);
  }
}

export function addToCart(product, dispatch) {
  console.log(product);
  axios
    .post("http://localhost:5001/cart/add-to-cart", product)
    .then((res) => {
      if (res.data.ok) {
        dispatch({ type: "add-to-cart", payload: product });
      }
    })
    .catch((error) => {
      toast(error.message);
    });
}
