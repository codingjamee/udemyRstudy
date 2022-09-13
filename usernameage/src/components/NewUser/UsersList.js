import React, { useState } from "react";
import styles from "./UsersList.module.css";
import UserData from "./UserData";

const UsersList = props => {
  return (
    <ul>
      {props.users.map(user => (
        <UserData key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
