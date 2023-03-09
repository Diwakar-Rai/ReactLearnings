import React, { Component } from 'react'

export default class ClassChild extends Component {
  render() {
    return (
      <div>
            I am a child class component. <b>{ this.props.username}</b>
      </div>
    )
  }
}
