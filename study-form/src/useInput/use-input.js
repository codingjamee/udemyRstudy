import { useState } from "react";

const useInput = validValue => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touchedValue, setTouchedValue] = useState(false);

  const enteredValueIsValid = validValue(enteredValue);
  const inputIsInvalid = !enteredValueIsValid && touchedValue;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const onTouched = event => {
    setTouchedValue(true);
    console.log("Touched-true");
  };

  const reset = () => {
    setEnteredValue("");
    setTouchedValue(false);
    console.log("reset");
  };

  return {
    value: enteredValue,
    touched: touchedValue,
    inputIsInvalid: inputIsInvalid,
    valid: enteredValueIsValid,
    valueChangeHandler,
    onTouched,
    reset,
  };
};

export default useInput;
