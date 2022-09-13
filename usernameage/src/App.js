import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/NewUser/UsersList";

const USERS = [];
function App() {
  const [users, setUsers] = useState(USERS);
  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
