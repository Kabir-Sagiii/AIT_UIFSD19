import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5001/auth/sign-in";
export function loginUser(userCredentails, login) {
  axios
    .post(url, userCredentails)
    .then((res) => {
      if (res.data.ok) {
        toast.success("User LoggedIn", {
          autoClose: 500,
        });
        setTimeout(() => {
          login();
        }, 500);
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message, { autoClose: 1000 });
    });
}
