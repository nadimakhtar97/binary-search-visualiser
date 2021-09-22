import React, { useState, useContext, useEffect } from 'react';
import ArrayData from '../ArrayData/ArrayData';
import ArrayIndex from '../ArrayIndex/ArrayIndex';
import { ArrayContext } from '../../Context/ArrayContext';
import styles from './Array.module.css';
import Button from '../../UI/Button/Button'

const Array = () => {

    const { 
        startIndex,
        endIndex,
        midIndex,
        startData,
        midData,
        endData,
    } = useContext(ArrayContext);
 

    return (
        <div className={styles.Array}>
            <ArrayData mid={midData} start={startData} end={endData}></ArrayData>
            <ArrayIndex mid={midIndex} start={startIndex} end={endIndex}></ArrayIndex>
        </div>
    )
}

export default Array;
