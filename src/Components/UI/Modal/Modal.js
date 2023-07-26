import React, { Fragment } from "react";
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css"

//for Backdrop section
export const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} />
    )
}

//for ModalOverlay section
export const ModalOverlay = (props) => {
    return (
        <div className={styles.modelOverlay}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

//Then became complete Modal

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {createPortal(<Backdrop />, portalElement)};
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)};
        </Fragment>
    )
}
export default Modal;