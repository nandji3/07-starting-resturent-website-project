import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <Navigation />
        </header>
    )
}

export default Header
