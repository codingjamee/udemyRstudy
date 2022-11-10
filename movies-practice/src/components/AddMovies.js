import { useReducer, useRef, useState } from "react";
import classes from "./AddMovies.module.css";

const initialState = { value: "", isValid: false };

const titleReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length !== 0 };
  }

  if (action.type === "RESET") {
    return initialState;
  }
};

const textReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length !== 0 };
  }

  if (action.type === "RESET") {
    return initialState;
  }
};

const dateReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length !== 0 };
  }

  if (action.type === "RESET") {
    return initialState;
  }
};

const AddMovies = (props) => {
  const [titleState, dispatchTitle] = useReducer(titleReducer, initialState);
  const [textState, dispatchText] = useReducer(textReducer, initialState);
  const [dateState, dispatchDate] = useReducer(dateReducer, initialState);

  const addMovies = (event) => {
    event.preventDefault();

    const movie = {
      title: titleState.value,
      text: textState.value,
      date: dateState.value,
    };

    props.onAddMovies(movie);
    dispatchTitle({ type: "RESET" });
    dispatchText({ type: "RESET" });
    dispatchDate({ type: "RESET" });
  };

  const titleChangeHandler = (e) => {
    dispatchTitle({ type: "USER_INPUT", val: e.target.value });
  };

  const openingTextChangeHandler = (e) => {
    dispatchText({ type: "USER_INPUT", val: e.target.value });
  };
  const dateChangeHandler = (e) => {
    dispatchDate({ type: "USER_INPUT", val: e.target.value });
  };
  const formIsValid =
    titleState.isValid && textState.isValid && dateState.isValid;
  return (
    <>
      <form onSubmit={addMovies}>
        <div className={classes.control}>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            value={titleState.value}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="Opening Text">Opening Text</label>
          <textarea
            rows="5"
            id="opening-text"
            value={textState.value}
            onChange={openingTextChangeHandler}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="Release Date">Release Date</label>
          <input
            type="date"
            value={dateState.value}
            onChange={dateChangeHandler}
          ></input>
        </div>
        {formIsValid && <button type="submit">Add Movie</button>}
      </form>
    </>
  );
};
export default AddMovies;
