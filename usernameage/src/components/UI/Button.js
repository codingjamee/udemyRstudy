import styles from "./Button.module.css";

const Button = props => {
  return (
    <button className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
