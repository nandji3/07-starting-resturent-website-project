import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <i className="fa-solid fa-cart-shopping"></i> Your Cart
                    <div>0</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
