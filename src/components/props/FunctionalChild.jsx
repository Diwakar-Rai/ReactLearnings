import React from "react";

export default function FunctionalChild(props) {
  return (
    <div>
      I am a component based on functional component.<b>{props.username}</b>
    </div>
  );
}
