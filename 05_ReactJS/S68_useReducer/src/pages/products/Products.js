import axios from "axios";

export function getAllProducts(setProducts) {
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (res) {
      console.log(res.data);
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
