import React from "react";

const PassFunction = props => {
  return (
    <div>
      <h1>{props.ChangeMyName("Someone")}</h1>
      <div>{props.state.mernstack.map(x =>{return x})}</div>
    </div>
  );
};

export default PassFunction;
