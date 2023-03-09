import React from "react";
import { PropTypes } from "prop-types";
const Props = () => {
  return <div>Props</div>;
};

export default Props;

console.log(PropTypes);
Props.propTypes = {
  str: PropTypes.string,
  salary: PropTypes.number,
};
