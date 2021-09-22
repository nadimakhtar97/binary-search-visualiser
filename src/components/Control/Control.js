import React from 'react';
import Instruction from '../Instruction/Instruction';
import ControlPanel from '../ControlPanel/ControlPanel';
import styles from './Control.module.css';

const Control = () => {
    return (
        <div className={styles.Control}>
            <ControlPanel/>
            {/* <Instruction/> */}
        </div>
    )
}

export default Control
