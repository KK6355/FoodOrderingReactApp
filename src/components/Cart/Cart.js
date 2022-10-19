import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal OnClose={props.OnClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>39.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.OnClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
