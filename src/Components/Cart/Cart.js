import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {

    const cartCTX = useContext(CartContext);

    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
    const hasItems = cartCTX.items.length > 0; //if items present then return true else false

    const cartItemRemoveHandler = (id) => {

    }
    const cartItemAddHandler = (item) => {

    }

    const cartItems = <ul className={styles.cartItems}>
        {cartCTX.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
    </ul>;

    return (
        <Modal >
            {cartItems}
            < div className={styles.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </ div>
            <div className={styles.actions}>
                <button className={styles.buttonClose} onClick={cartCTX.closeCart}>Close</button>
                {hasItems && <button className={styles.buttonOrder}>Order</button>}
            </div>
        </Modal >
    )
}
export default Cart;