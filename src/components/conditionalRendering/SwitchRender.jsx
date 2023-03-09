import React from 'react'

const SwitchRender = (props) => {
    let value = props.isAuth.isLoggedIn;
    switch (value) {
      case true:
        return (
          <ul>
            <li>100</li>
            <li>200</li>
            <li>300</li>
          </ul>
        );
      case false:
        return (
          <ul>
            <li>400</li>
            <li>500</li>
            <li>600</li>
          </ul>
            );
        
        default:
            return <h2>Nothing To Show</h2>
    }
}

export default SwitchRender
