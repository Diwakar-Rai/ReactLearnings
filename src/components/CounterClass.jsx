import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    Decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    Reset = () => {
        this.setState({ count: 0 });
    }
  render() {
    return (
      <div>
            <p>{this.state.count}</p>
            <button onClick = {this.Increment}>Increment</button>
            <button onClick = {this.Decrement}>Decrement</button>
            <button onClick = {this.Reset}>Reset</button>
      </div>
    )
  }
}
