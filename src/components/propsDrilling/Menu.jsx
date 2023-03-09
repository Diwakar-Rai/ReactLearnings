import React from 'react'
import List from './List'
const Menu = (props) => {
  return (
    <div>
          <List state={ props.state} />
    </div>
  )
}

export default Menu
