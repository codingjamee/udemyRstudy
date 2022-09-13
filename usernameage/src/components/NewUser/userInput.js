import styles from "./userInput.module.css";
import React, { useState } from "react";

const UserInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div>
          <label>Age(Years)</label>
          <input
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
};

export default UserInput;
