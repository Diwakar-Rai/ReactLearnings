import React, { Component } from "react";

export default class PassingData extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <p>{this.props.salary}</p>
        <p>
          isMarried:{this.props.isMarried === false ? "You are smart" : "Fool"}
        </p>
        <p>
          isUndefined:
          {this.props.isUndefined === undefined ? "loading..." : "😊"}
        </p>
        <p>isNull:{this.props.isNull === null ? "😒" : "😊"}</p>
        <ul>
          {this.props.languages.map(lang => {
            return <li>{lang}</li>;
          })}
        </ul>

        <h1>Courses</h1>
        <h2>FrontEnd</h2>
        <ul>
          {this.props.courses.frontEnd.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h2>BackEnd</h2>
        <ul>
          {this.props.courses.backEnd.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h2>Database</h2>
        <ul>
          {this.props.courses.dataBase.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    );
  }
}
