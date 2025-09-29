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
