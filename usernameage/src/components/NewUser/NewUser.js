import React from "react";
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
