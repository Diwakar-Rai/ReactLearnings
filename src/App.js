import React from "react";
import Count from "./contextApi/Count";
// import ControlledComponentPrac from "./Refs/ControlledComponentPrac";
import CounterProvider from "./contextApi/CounterContextApi";
import './global.css'
const App = () => {
  return (
    <>
      {/* <ControlledComponentPrac/> */}
      <CounterProvider>
        <Count/>
      </CounterProvider>
    </>
  );
};

export default App;
