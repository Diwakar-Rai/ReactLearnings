import React, { Component } from "react";

let HocClass = WrappedComponent => {
  class Test extends React.Component {
    render() {
      return <WrappedComponent username="Shashi" />;
    }
  }
  return Test;
};

export default HocClass;
