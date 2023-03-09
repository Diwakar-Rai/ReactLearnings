import React, { Component } from "react";

export default class ClassRef extends Component {
  constructor() {
    super();
    this.InputRef = React.createRef(null);
    this.divRef = React.createRef(null);
  }

  //   componentDidMount() {
  //       console.log(this.InputRef);
  //       this.InputRef.current.style.background = "red";
  //       this.InputRef.current.style.border = "2px solid green";
  //       this.InputRef.current.style.outline = "none";
  //       this.divRef.current.style.padding = "30px";
  //       this.divRef.current.style.border = "2px solid blue";
  //   }

  changeColor = () => {
    this.InputRef.current.style.background = "red";
    this.InputRef.current.style.border = "2px solid green";
    this.InputRef.current.style.outline = "none";
    this.divRef.current.style.padding = "30px";
    this.divRef.current.style.border = "2px solid blue";
  };

  render() {
    return (
        <div ref={this.divRef}>
            <h1>Refs in Class Component</h1>
        <input type="text" ref={this.InputRef} />
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}
