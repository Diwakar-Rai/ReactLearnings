import React from 'react'

function PassingArguments() {
    let test = (username, password) => {
        console.log(username, password)
    }
  return (
    <div>
      <button onClick={()=>test('shashi',"132345")}>Click</button>
    </div>
  )
}

export default PassingArguments
