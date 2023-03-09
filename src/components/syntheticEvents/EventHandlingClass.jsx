import React, { Component } from "react";

export default class EventHandlingClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    //! This is the recommended way to handle the this keyword in reactjs
    this.onClickCount = this.onClickCount.bind(this);
  }
  //! To use the normal function we have to bind the this keyword with the function
  onClickCount() {
    this.setState({ count: this.state.count + 1 });
  }

  //!However using the arrow function makes handling the this keyword simpler
  // onClickCount = () => {
  //     this.setState({count: this.state.count + 1})
  // }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.onClickCount}>Click Me</button>
        //! Binding the this keyword inline may cause performance issues
        <button onClick={this.onClickCount.bind(this)}>Click Me</button>
        //! Inline arrow function may also lead to performance issues
        <button
          onClick={() => {
            this.onClickCount();
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
