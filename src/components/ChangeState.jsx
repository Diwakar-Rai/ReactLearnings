import React, { Component } from 'react'

export default class ChangeState extends Component {
    state = { username: "diwakar", company: "TYSS" };
    changename = () => {
        this.setState({ username: "Pratanu", company: "Capgemini" });
    }
  render() {
    return (
      <div>
            <h1>Hello {this.state.username}</h1>
            <p>I work for {this.state.company}</p>
            <button onClick={this.changename}>change</button>
      </div>
    )
  }
}
