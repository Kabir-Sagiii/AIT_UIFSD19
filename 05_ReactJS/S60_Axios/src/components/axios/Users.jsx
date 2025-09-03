import { useState } from "react";
import "./Users.css";
import { getUsersData } from "./Users";
function Users() {
  const [users, setUsers] = useState([]);
  return (
    <div className="users-container">
      <h1>Users Data</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ut
        vitae nobis, adipisci sunt quisquam delectus modi nesciunt est deserunt,
        magni nulla, ad id! Aliquid deleniti, beatae commodi, nisi pariatur quis
        voluptate, quibusdam explicabo vero ducimus perferendis repellendus
        atque impedit id odio sit accusamus dolores! Veniam nam vel voluptate
        delectus, et doloremque deleniti doloribus omnis corrupti, ipsa
        consequuntur eligendi. Nemo nesciunt saepe enim rerum at, maiores,
        aperiam voluptate voluptas inventore amet obcaecati repellendus
        voluptatem similique nihil id? Excepturi architecto reiciendis aliquam
        sunt corporis quo laboriosam, eius optio. Incidunt laboriosam molestiae
        consectetur optio? Nisi maiores adipisci mollitia odio, dignissimos
        deserunt qui error deleniti doloribus quisquam tempore ullam quos
        distinctio libero ab consequuntur aperiam nostrum asperiores consectetur
        optio architecto laudantium sint. Maiores accusamus velit alias
        architecto explicabo consequatur non, minus, saepe officia cumque
        numquam? Quaerat aut nobis sequi exercitationem necessitatibus repellat
        neque nesciunt facilis laudantium iste corrupti natus ea, autem
        voluptatem adipisci totam, ratione culpa dolorum nisi? Enim temporibus
        aspernatur sed consequatur velit adipisci inventore eos minima! Nobis,
        itaque ipsam odio ullam rerum corporis incidunt, libero eligendi
        provident doloremque a temporibus atque error dolorem voluptatum
        consequuntur. Ducimus architecto id voluptates. Officiis, beatae! Sit
        adipisci, exercitationem quidem consectetur nulla laborum impedit
        ratione error.
      </p>
      <button
        onClick={() => {
          getUsersData(setUsers);
        }}
      >
        Get Users
      </button>

      {users.length > 0 && (
        <div className="users-data">
          <table cellPadding={"13px"}>
            <thead>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>CITY</th>
            </thead>
            <tbody>
              {users.map(function (user) {
                return (
                  <tr>
                    <td>
                      <img
                        src={user.picture.medium}
                        alt=""
                        width={70}
                        height={70}
                      />
                    </td>
                    <td>
                      {user.name.first} {user.name.last}
                    </td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.location.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
