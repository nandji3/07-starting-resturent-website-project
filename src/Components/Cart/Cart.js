import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {

    const cartCTX = useContext(CartContext);

    const cartItems = <ul className={styles.cartItems}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal >
            {cartItems}
            < div className={styles.total} >
                <span>Total Amount</span>
                <span>35.26</span>
            </ div>
            <div className={styles.actions}>
                <button className={styles.buttonClose} onClick={cartCTX.closeCart}>Close</button>
                <button className={styles.buttonOrder}>Order</button>
            </div>
        </Modal >
    )
}
export default Cart;