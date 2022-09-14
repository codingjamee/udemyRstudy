import React from "react";
import Card from "../UI/Card";
import classes from "./UserData.module.css";

const UserData = props => {
  return (
    <Card className={classes.input}>
      <li>
        <div>{`${props.name} (${props.age} years old)`}</div>
      </li>
    </Card>
  );
};

export default UserData;
