import axios from "axios";
import { toast } from "react-toastify";
import myStore from "../../redux/store/store";
export function getCartsData() {
  axios
    .get("http://localhost:5001/cart/get-carts-data")
    .then((res) => {
      if (res.data.ok) {
        myStore.dispatch({ type: "get-cart", payload: res.data.result });
      } else {
        throw Error("Failed to Access Cart Data");
      }
    })
    .catch((error) => {
      toast(error.message);
    });
}

export function removeFromCart(id) {
  axios
    .delete(`http://localhost:5001/cart/remove-from-cart/${id}`)
    .then(function (res) {
      if (res.data.ok) {
        toast.error("Product Remove From Cart", { autoClose: 500 });
        getCartsData();
      }
    })
    .catch(function (error) {
      toast.error(error.message);
    });
}
