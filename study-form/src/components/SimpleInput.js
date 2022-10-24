import useInput from "../useInput/use-input";

const SimpleInput = props => {
  const {
    value: enteredName,
    valid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    onTouched: onTouchedName,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredId,
    valueChangeHandler: idInputChangeHandler,
    onTouched: enteredIdTouched,
    valid: enteredIdIsValid,
    reset: resetIdInput,
    inputIsInvalid: idInputIsInvalid,
  } = useInput(value => value.includes("@"));

  let formIsValid = enteredNameIsValid && enteredIdIsValid;

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredIdIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredId);

    resetNameInput();
    resetIdInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = idInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={onTouchedName}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="id">Your Id</label>
        <input
          type="id"
          id="id"
          onChange={idInputChangeHandler}
          onBlur={enteredIdTouched}
          value={enteredId}
        />
        {idInputIsInvalid && (
          <p className="error-text">Please write valid email adress</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
