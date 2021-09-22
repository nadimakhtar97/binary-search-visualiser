import React from 'react';
import styles from './Index.module.css';

const Index = (props) => {
    return (
        <div className={styles.Index }>
            <div>{props.index}</div>
            {props.mid && <div style={{color:"orange"}}>mid</div>}
            {props.start && <div style={{color:"green"}}>low</div>}
            {props.end && <div style={{color:"blue"}}>high</div>}
        </div>
    )
}

export default Index;
