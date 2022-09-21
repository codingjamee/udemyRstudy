import { useContext } from "react";

import React from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const onClickOpen = () => {
    props.onClickOpen(true);
  };
  return (
    <button className={classes.button} onClick={onClickOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.items}</span>
    </button>
  );
};

export default HeaderCartButton;
