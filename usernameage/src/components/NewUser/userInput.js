import classes from "./userInput.module.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

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
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div>
          <label htmlFor="userAge">Age(Years)</label>
          <input
            id="userAge"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserInput;
