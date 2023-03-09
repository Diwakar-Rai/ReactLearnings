import React,{useRef} from 'react'

const UseRef = () => {
    let InputRef = useRef(null)

    let ChangeColor = () => {
      InputRef.current.style.background = "green";
    };
  return (
    <div>
      <h1>useRefs in Functional component</h1>
      <input type="text" ref={InputRef} />
      <button onClick={ChangeColor}>Change Color</button>
    </div>
  );
}

export default UseRef
