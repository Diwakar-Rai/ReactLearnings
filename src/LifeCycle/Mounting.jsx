import React, { Component, Fragment } from "react";

class Mounting extends Component {
  constructor() {
    console.log("i m constructor");
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    console.log("i m componentDidMount");
    fetch("https://api.github.com/users")
      .then(x => x.json())
      .then(data => {
        // console.log(data);
        this.setState({ users: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log("i m render()");
    return (
      <div>
        {this.state.users.map(m => {
          //   console.log(m);
          return (
            <Fragment key={m.id}>
              <button>{m.id}</button>
              <img src={m.avatar_url} alt="" />
              <h1>{m.login}</h1>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default Mounting;
