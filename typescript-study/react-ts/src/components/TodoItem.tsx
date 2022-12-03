import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todoText}
    </li>
  );
};
export default TodoItem;
