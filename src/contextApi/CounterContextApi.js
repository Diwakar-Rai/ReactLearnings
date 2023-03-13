import React, { useState, createContext } from "react";

export let CounterContextApi = createContext();

const CounterProvider = ({ children }) => {
  let [count, setCount] = useState(0);
  let Increment = () => {
    setCount(prev => prev + 1);
  };
  let Decrement = () => {
    setCount(prev => prev - 1);
  };
  let Reset = () => {
    setCount(0);
  };
  return (
    <CounterContextApi.Provider value={{ count, Increment, Decrement, Reset }}>
      {children}
    </CounterContextApi.Provider>
  );
};

export default CounterProvider;
