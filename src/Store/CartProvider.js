import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {

    //These all object properties for manage the cart Model() and HeaderCartButton open/close
    const [cartIsShown, setCartIsShown] = useState(false);   //state is used to manage open and close cart Model

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    //These all object properties for manage the cartProudcts and total cartItem which is show in cart
    const addItemToCartHandler = (item) => {

    }

    const removeItemFromCartHandler = (id) => {

    }

    const cartContext = {

        //These all object properties for manage the cart Model and HeaderCartButton open/close
        showCart: showCartHandler,
        closeCart: hideCartHandler,
        cartIsShown: cartIsShown,

        //These all object properties for manage the cartProudcts and total cartItem which is show in cart
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;