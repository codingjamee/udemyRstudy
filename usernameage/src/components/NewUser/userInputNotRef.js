import classes from "./userInput.module.css";
import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const nameChangeHandler = e => {
  //   setEnteredName(e.target.value);
  // };

  // const ageChangeHandler = e => {
  //   setEnteredAge(e.target.value);
  // };

  const submitHandler = e => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredUserAge,
    };
    props.onSaveUserData(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredName("");
    // setEnteredAge("");
  };

  // if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
  //   setError({
  //     title: "Invalid input",
  //     message: "Please enter a valid name and age (non-empty values).",
  //   });
  //   return;
  // }
  // if (+enteredAge < 1) {
  //   setError({
  //     title: "Invalid age",
  //     message: "Please enter a valid age (> 0)",
  //   });
  //   return;
  // }
  //   const userData = {
  //     id: Math.random().toString(),
  //     name: enteredName,
  //     age: enteredAge,
  //   };
  //   props.onSaveUserData(userData);
  //   setEnteredName("");
  //   setEnteredAge("");
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            {/*<input
              id="username"
              type="text"
              onChange={nameChangeHandler}
              value={enteredName}
            ></input>*/}
          </div>
          <div>
            <label htmlFor="userAge">Age(Years)</label>
            <input id="userAge" type="number"></input>
            {/*<input
              id="userAge"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
          ></input>*/}
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
