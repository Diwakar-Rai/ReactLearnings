import React from "react";

const TernaryRender = props => {
  let Auth = () => {
    return (
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    );
  };

  let Guest = () => {
    return (
      <ul>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
      </ul>
    );
  };
  return <div>{props.isAuth.isLoggedIn ? <Auth /> : <Guest />}</div>;
};

export default TernaryRender;
