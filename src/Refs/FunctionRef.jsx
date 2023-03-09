import React, { createRef } from "react";

const FunctionRef = () => {
  let InputRef = createRef(null);
  let ChangeColor = () => {
    InputRef.current.style.background = "green";
  };
  return (
      <div>
          <h1>Refs in Functional component</h1>
      <input type="text" ref={InputRef} />
      <button onClick={ChangeColor}>Change Color</button>
    </div>
  );
};

export default FunctionRef;
