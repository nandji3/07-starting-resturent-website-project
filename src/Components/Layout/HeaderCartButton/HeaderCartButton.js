import React, { Fragment, useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../Store/CartContext";

const HeaderCartButton = (props) => {

    const cartCTX = useContext(CartContext);

    const numberOfCartItem = cartCTX.items.reduce((currNumber, item) => {
        return (currNumber + item.amount)
    }, 0)

    return (
        <Fragment>
            <button className={styles.button} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span >Your Cart</span>
                <span className={styles.badge}>
                    {numberOfCartItem}
                </span>
            </button>
        </Fragment>
    )
}
export default HeaderCartButton;

