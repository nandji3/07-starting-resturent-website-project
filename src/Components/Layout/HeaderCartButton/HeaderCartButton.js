import React, { Fragment } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = () => {
    return <Fragment>
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>
                0
            </span>
        </button>
    </Fragment>
}
export default HeaderCartButton;
