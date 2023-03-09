import React, { Children, Component } from 'react'

export default class DefaultPropsClass extends Component {
    //!Using the static class object
    // static defaultProps = {
    //     username: "someone",
    //     company: "somewhere"
    // }
  render() {
    return (
      <div>
            <p>{ this.props.username || "Mob"}</p>
            <p>{ this.props.company || "York"}</p>
      </div>
    )
  }
}

//!Passing a default props object

// DefaultPropsClass.defaultProps = {
//     username: "ABC",
//     company: "XYZ",
// }
