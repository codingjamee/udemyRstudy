import React from "react";
import styles from "./UsersList.module.css";
import UserData from "./UserData";
import Card from "../UI/Card";

const UsersList = props => {
  return (
    <div className={styles.input}>
      <ul>
        {props.users.map(user => (
          <UserData key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
