import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

//모든 장바구니 항목 렌더링
//총수량 장바구니 나가기, 주문하기 버튼 필요

const Cart = props => {
  const onClickOpen = () => {
    props.onClickOpen(false);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClickOpen={props.onClickOpen}>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClickOpen}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
