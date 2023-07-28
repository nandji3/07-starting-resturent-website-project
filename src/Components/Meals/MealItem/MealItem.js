import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";

const MealItem = ({ id, name, description, price }) => {

    const markedPrice = `$${price.toFixed(2)}`;

    return (
        <li className={styles.mealItem} id={id}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{markedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} />
            </div>
        </li>
    )
}
export default MealItem;