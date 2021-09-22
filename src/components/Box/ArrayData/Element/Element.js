import React from 'react';
import styles from './Element.module.css';

const Element = (props) => {
    return (
        <div className={styles[props.size] }>
            {props.children}
        </div>
    )
}

export default Element
