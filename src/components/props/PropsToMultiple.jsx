import React from 'react'

const PropsToMultiple = (props) => {
  return (
    <div>
          <h1>{props.userDetails.name}</h1>
          <p>{props.userDetails.company}</p>
          <p>{props.userDetails.skill.map(x => {return (x + ", ")})}</p>
    </div>
  )
}

export default PropsToMultiple
