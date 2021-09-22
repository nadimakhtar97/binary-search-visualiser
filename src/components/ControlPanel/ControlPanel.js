import React, { useContext, useEffect } from 'react';
import Button from '../UI/Button/Button';
import styles from './ControlPanel.module.css'
import { ArrayContext } from '../Context/ArrayContext'


const ControlPanel = () => {

    const { arr,
        setArr,
        searchedElement,
        startIndex,
        setStartIndex,
        endIndex,
        setEndIndex,
        midIndex,
        setMidIndex,
        startData,
        setStartData,
        midData,
        setMidData,
        endData,
        setEndData
    } = useContext(ArrayContext);


    // useEffect(() => {
    //     setStartData(arr[startIndex]);
    //     setEndData(arr[endIndex]);
    //     setMidData(arr[midIndex]);
    // },[startIndex,endIndex,midIndex]);

    // const binarySearch = (arr)=>{

    //     while(startIndex <  endIndex){

    //         setMidIndex( Math.floor((startIndex+endIndex)/2));
    //         console.log(midIndex);
    //         if( arr[midIndex] === searchedElement)
    //         {
    //             console.log(midIndex);
    //             return ;
    //         }
    //         else if( arr[midIndex] < searchedElement)
    //             setStartIndex(midIndex+1);
    //         else
    //             setEndIndex(midIndex);
    //     }

    // }

    function sleep(time){
        return new Promise(resolve=>setTimeout(resolve,time))
    }


    async function binarySearch() {

        let start = 0;
        let end = arr.length - 1;
      
        while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          setMidIndex(mid);
          await sleep(2000);

          if (arr[mid] === searchedElement) {
            console.log(mid);
            return;
          }
      
          if (searchedElement < arr[mid]) {
            end = mid - 1;
            setEndIndex(end);
          } else {
            start = mid + 1;
            setStartIndex(start);
          }
        }
        return -1;
      }





    const clickHandler = () => {
        let randomArr = [];
        while (randomArr.length < 17) {
            let r = Math.floor(Math.random() * 100) + 1;
            if (randomArr.indexOf(r) === -1) randomArr.push(r);
        }
        randomArr.sort((a, b) => a - b);
        setArr(randomArr);

    }


    return (
        <div className={styles.ControlPanel}>
            <Button clicked={clickHandler}>New Array</Button>
            <Button clicked={binarySearch}>Start</Button>
        </div>
    )
}

export default ControlPanel
