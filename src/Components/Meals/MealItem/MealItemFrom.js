import React from "react";
import styles from "./MealItemFrom.module.css";

const MealItemForm = () => {
    return (
        <section >
            <form className={styles.form}>
                <label >
                    <span>Amount</span>
                    <input type="number" name="requiredQty" value={120} placeholder="Qty" onChange={() => { }} />
                </label>
                <button type="submit">+Add</button>
            </form>
        </section>
    )
}
export default MealItemForm;