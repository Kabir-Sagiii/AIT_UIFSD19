import { toast } from "react-toastify";
const myReducer = (state = { name: "", cart: [] }, action) => {
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.data,
    };
  } else if (action.type === "add-to-cart") {
    state = {
      ...state,
      cart: [...state.cart, action.payload],
    };

    toast("Product Added in the Cart", {
      className: "notification-design",
      autoClose: 2000,
    });
  } else if (action.type === "get-cart") {
    state = {
      ...state,
      cart: action.payload,
    };
  }
  return state;
};

export default myReducer;
