import axios from "axios";
const url = "https://randomuser.me/api/?results=30";
export function getUsersData(setUsers) {
  axios
    .get(url)
    .then(function (res) {
      console.log(res.data);
      setUsers(res.data.results);
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
}
