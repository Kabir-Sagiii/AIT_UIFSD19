import "./UsersProfile.css";
import { data } from "./UsersData.js";
function UsersProfile() {
  return (
    <div className="users-container">
      <h1>Users Information</h1>
      <section className="users-list">
        {data.map(function (user) {
          return (
            <div className="card">
              <img src={user.image} width="100%" height={200} alt="" />
              <h3>{user.name}</h3>
              <p>{user.gender}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default UsersProfile;
