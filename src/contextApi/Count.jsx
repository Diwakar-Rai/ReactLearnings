import React, { useContext } from "react";
import { CounterContextApi } from "./CounterContextApi";
const Count = () => {
  let { count, Increment, Decrement, Reset } = useContext(CounterContextApi);
  return (
    <>
      <h1>
        Count Value
        <strong style={count >= 1 ? { color: "green" } : { color: "red" }}>
          {count}
        </strong>
      </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default Count;
