import { getUsers } from "../Services/coinConfig.js";
import { useState, useEffect } from "react";
import User from "../Components/User.js";

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    requestUsers();
  }, []);

  async function requestUsers() {
    const result = await getUsers();
    setUsers(result);
  }
  return (
    <>
      {users.map((userData, index) => (
        <User user={userData} key={index} />
      ))}
    </>
  );
}

export default DisplayUsers;
