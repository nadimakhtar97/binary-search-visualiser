import React, { createContext, useState } from "react";

export const ArrayContext = createContext();

// This context provider is passed to any component requiring the context
export const ArrayProvider = ({ children }) => {
  const [arr, setArr] = useState([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 57, 59]);
  const [searchedElement, setSearchedElement] = useState(57);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(16);
  const [midIndex, setMidIndex] = useState(8);

  const [startData, setStartData] = useState(arr[startIndex]);
  const [endData, setEndData] = useState(arr[endIndex]);
  const [midData, setMidData] = useState(arr[midIndex]);

  return (
    <ArrayContext.Provider
      value={{ arr,
        setArr,
        searchedElement,
        setSearchedElement,
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
    }}
    >
      {children}
    </ArrayContext.Provider>
  );
};


