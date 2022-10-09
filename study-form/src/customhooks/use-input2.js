import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInput_2 = isValid => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = isValid(inputState.value);
  const inputIsInvalid = !valueIsValid && inputState.isTouched;

  const onChangeValue = event => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlur = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    valueIsValid,
    inputIsInvalid,
    inputValue: inputState.value,
    onChangeValue,
    onBlur,
    reset,
  };
};

export default useInput_2;
