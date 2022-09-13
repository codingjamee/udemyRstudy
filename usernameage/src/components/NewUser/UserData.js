import React, { useState } from "react";

const UserData = props => {
  return (
    <li>
      <div>{`${props.name} (${props.age} years old)`}</div>
    </li>
  );
};

export default UserData;
