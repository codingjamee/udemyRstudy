import styled from "styled-components";
import "./Button.css";
// import styles from "./Button.module.css";

const Button = styled.button`
  width: 100%;
  //최대 768까지 너비를 부모요소에 width를 맞춤
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    //768px 이상일때 자식요소에 width를 맞춤
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className={styles.button} onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
