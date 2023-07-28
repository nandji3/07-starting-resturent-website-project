import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";
import CartContext from "../../../Store/CartContext";

const MealItem = ({ id, name, description, price }) => {

    const markedPrice = `$${price.toFixed(2)}`;

    const cartCTX = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCTX.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }

    return (
        <li className={styles.mealItem} id={id}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{markedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
export default MealItem;