import React, { useRef, useState } from "react";
import styles from "./MealItemFrom.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();   //access input field  node directly

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        //when we extract value from the input field it is in string format because of type ='number' so nedd to convert string into number by adding only plus sign infont of that value
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;     //because we not want to submit data in this case
        }
        props.onAddToCart(enteredAmountNumber);  // if amountIsValid=true;
    }

    return (
        <section >
            <form className={styles.form} onSubmit={submitHandler}>
                <Input label="Amount" ref={amountInputRef}
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }} />
                <button type="submit">+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </section>
    )
}
export default MealItemForm;






















// <Input id="number" label="Amount" type="number" value="2" onChange={() => { }} placeholder="Qty" />
//the "step" props in input field --specifies the interval between legal numbers in an <input> element. Example: if step="3" , legal numbers could be -3, 0, 3, 6, etc. Tip: The step attribute can be used together with the max and min attributes to create a range of legal values.