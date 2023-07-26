import React from "react";
import styles from "./MealItemFrom.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
    return (
        <section >
            <form className={styles.form}>
                <Input label="Amount" input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '2'
                }} />
                <button type="submit">+ Add</button>
            </form>
        </section>
    )
}
export default MealItemForm;






















// <Input id="number" label="Amount" type="number" value="2" onChange={() => { }} placeholder="Qty" />
//the "step" props in input field --specifies the interval between legal numbers in an <input> element. Example: if step="3" , legal numbers could be -3, 0, 3, 6, etc. Tip: The step attribute can be used together with the max and min attributes to create a range of legal values.