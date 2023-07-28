import React from "react";

//1st create context --> initialize the context with some default which will not actually we used, but it give us better for auto-completion later.

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})
export default CartContext;


























//2nd We nedd to manage that context - by warping <CartConstext.Provider>AppComponent</CartConstext.Provider>