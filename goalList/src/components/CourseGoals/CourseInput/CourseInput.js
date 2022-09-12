import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import styled from "styled-components";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? "red" : "#ccc")};
//     background: ${props => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      스타일드컴포넌트일 때 사용
    */}

      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/*styles["form-control"] 이렇게 한 이유는 form-control이 하이픈이 들어있기 때문.
      하이픈 없으면 Button컴포넌트에서 같이 styles.button 이렇게 해도 된다. 
      위와같이 두개의 클래스명을 사용하려면 백틱으로 감싸고 그 안에다 $표시로 변수를 가져온다. */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
