import React , {useContext} from 'react';
import Element from './Element/Element';
import styles from './ArrayData.module.css'
import { ArrayContext } from '../../Context/ArrayContext';

const ArrayData = (props) => {

    const {arr} = useContext(ArrayContext);
    return (
        <div className={styles.ArrayData}>
            {arr.map(num =>{
                return <Element key={num} size='Data'>{num}</Element>
            })}
        </div>
    )
}

export default ArrayData;
