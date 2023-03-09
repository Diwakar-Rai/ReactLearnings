import React from 'react'

const ChildToParent = (props) => {
    props.someFunc("Erwin Smith")
  return (
    <div>
      It is a child component
    </div>
  )
}

export default ChildToParent
