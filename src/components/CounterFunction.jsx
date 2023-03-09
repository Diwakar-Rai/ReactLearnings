import React , {useState} from 'react'

const CounterFunction = () => {

    let [count, setCount] = useState(0)
    let Increment = () => { setCount(count +1)};
    let Decrement = () => {setCount (count-1) };
    let Reset = () => { setCount (0)};
  return (
    <div>
          <h1>{count}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
          <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterFunction
