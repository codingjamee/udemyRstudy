import React, { useState } from "react";
import UserInput from "./components/NewUser/userInput";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };

  // const onRemoveUser = id => {
  //   setUsers(users.filter(user => user.id !== id));
  // };
  return (
    <div>
      <UserInput onSaveUserData={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
