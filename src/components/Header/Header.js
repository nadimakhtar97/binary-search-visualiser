import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.HeadingContainer}>
            <h1 className={styles.HeadingContainer__text}>Binary Search Visualizer</h1>
        </div>
    )
}

export default Header
