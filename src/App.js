import React from "react";
// import Count from "./contextApi/Count";
// import ControlledComponentPrac from "./Refs/ControlledComponentPrac";
// import CounterProvider from "./contextApi/CounterContextApi";
import "./global.css";
import Inner from "./HOC/Inner";
const App = () => {
  return (
    <>
      {/* <ControlledComponentPrac/>
      <CounterProvider>
        <Count />
      </CounterProvider> */}
      <Inner/>
    </>
  );
};

export default App;
