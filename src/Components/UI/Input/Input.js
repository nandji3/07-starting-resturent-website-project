import React from "react";
import styles from "./Input.module.css"

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    )
}
export default Input;





















//  <div className={styles.input}>
//     <label htmlFor={props.id}>
//         <span>{props.label}</span>
//         <input type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
//     </label>
// </div> 