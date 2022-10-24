import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

const CartButton = props => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleCart = () => {
    dispatch(uiSliceActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
