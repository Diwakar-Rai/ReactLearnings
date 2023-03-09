import React from 'react'

export default function DefaultPropsFunction(props) {
  return (
    <div>
          <p>{ props.username}</p>
          <p>{ props.company}</p>
    </div>
  )
}

DefaultPropsFunction.defaultProps = {
    username: "Someone",
    company: "Somewhere",
}
