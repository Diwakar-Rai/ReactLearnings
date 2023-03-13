import React from 'react'
import Hoc from './Hoc'
const Inner = () => {
  return (
    <div>
      "This is Inner"
    </div>
  )
}

export default Hoc(Inner)
