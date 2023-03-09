import React, { Component } from "react";

export default class ControlledClass extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = e => {
    //   console.log(e.target.name)
    //   console.log(e.target.value)
    // this.setState({ [e.target.name]: e.target.value });
    //! we can destructure the above code and use the bracket notation for object to access the value
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div id="formBlock">
        <h1>Login Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              //!It is calling a new function each time which is not wanted
              //   onChange={e=>this.setState({email: e.target.value})}
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              //   onChange={e=> this.setState({password:e.target.value})}
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
