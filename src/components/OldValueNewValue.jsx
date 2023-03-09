import React, { useState } from "react";

export default function OldValueNewValue() {
  let [value, setValue] = useState(10);
  let Increment = () => {
    // setValue(prevValue => {
    //     return prevValue + 1;
    // })

    // setValue(value +=1);
    // setValue(value +=1);

    setValue(prevValue => prevValue + 10);
    setValue(prevValue => prevValue + 10);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={Increment}>Increase</button>
    </div>
  );
}
