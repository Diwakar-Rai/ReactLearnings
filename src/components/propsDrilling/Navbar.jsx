import React from "react";
import Menu from "./Menu";
const Navbar = props => {
  return (
    <div>
      <Menu state={props.state} />
    </div>
  );
};

export default Navbar;
