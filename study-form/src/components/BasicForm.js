import useInput_2 from "../customhooks/use-input2";

const BasicForm = props => {
  const {
    inputIsInvalid: inputFNameIsInvalid,
    valueIsValid: inputFNameIsValid,
    inputValue: inputFNameValue,
    onChangeValue: firstNameChangeHandler,
    onBlur: blurfNameChangeHandler,
    reset: resetFNameInput,
  } = useInput_2(value => value.trim() !== "");

  const {
    inputIsInvalid: inputLNameIsInvalid,
    valueIsValid: inputLNameIsValid,
    inputValue: inputLNameValue,
    onChangeValue: lastNameChangeHandler,
    onBlur: blurLNameChangeHandler,
    reset: resetLNameInput,
  } = useInput_2(value => value.trim() !== "");

  const {
    inputIsInvalid: inputEmailIsInvalid,
    valueIsValid: inputEmailIsValid,
    inputValue: inputEmailValue,
    onChangeValue: emailChangeHandler,
    onBlur: blurEmailChangeHandler,
    reset: resetEmailInput,
  } = useInput_2(value => value.includes("@"));

  let inputIsAllValid =
    inputFNameIsValid && inputLNameIsValid && inputEmailIsValid;

  const submitHandler = event => {
    event.preventDefault();

    if (!inputIsAllValid) {
      return;
    }

    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fnameInputClasses = inputFNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lnameInputClasses = inputLNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = inputEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={inputFNameValue}
            onChange={firstNameChangeHandler}
            onBlur={blurfNameChangeHandler}
          />
          {inputFNameIsInvalid && (
            <p className="error-text">First-name should not empty</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={inputLNameValue}
            onChange={lastNameChangeHandler}
            onBlur={blurLNameChangeHandler}
          />
          {inputLNameIsInvalid && (
            <p className="error-text">Last-name should not empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={inputEmailValue}
          onChange={emailChangeHandler}
          onBlur={blurEmailChangeHandler}
        />
      </div>
      {inputEmailIsInvalid && (
        <p className="error-text">Please write valid E-mail Adress</p>
      )}
      <div className="form-actions">
        <button disabled={!inputIsAllValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
