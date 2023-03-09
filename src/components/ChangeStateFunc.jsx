import React, {useState} from 'react'

export default function ChangeStateFunc() {
    let [username, setusername] = useState("Diwakar")
    let changeDetail = () => {
        setusername("Pratanu")
    }
  return (
    <div>
          <h1>hello {username}</h1>
          <button onClick={changeDetail}>change</button>
    </div>
  );
}
