import React from "react";
import styles from "./NewUser.module.css";
import UserInput from "./userInput";

const NewUser = props => {
  const onSaveUserDataHandler = enteredUserData => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return <UserInput onSaveUserData={onSaveUserDataHandler} />;
};

export default NewUser;
