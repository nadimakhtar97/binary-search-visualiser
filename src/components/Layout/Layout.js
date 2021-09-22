import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';
import Application from '../Application/Application';
import { ArrayProvider } from '../Context/ArrayContext';

const Layout = () => {

    // const [arr, setArr] = useState([1,2,3,4,5,6]);


    // const randomArray = (randomArr) =>{
    //     console.log(arr);
    //     setArr(randomArray);
    //     console.log(arr);
    // }

    return (
        <div className={styles.Layout}>
            <Header></Header>
            <ArrayProvider>
                <Application />
            </ArrayProvider>

        </div>
    )
}

export default Layout
