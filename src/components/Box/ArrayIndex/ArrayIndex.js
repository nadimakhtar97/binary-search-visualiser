import React from 'react';
import Index from './Index/Index.js'
import styles from './ArrayIndex.module.css'

const ArrayIndex = (props) => {

    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    return (
        <div className={styles.ArrayIndex}>
            {arr.map(num =>{
                    
                return <Index key={num} index={num} mid={num === props.mid} start={num === props.start} end={num === props.end}/>
            })}
        </div>
    )
}

export default ArrayIndex
