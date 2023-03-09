import React from "react";

const EventHandling = () => {
  let ClickMe = e => console.log(e);

  return (
    <div>
      //* Invoking the function in the onclick event will directly call the
      //* Later on when we call the function the event wont fire
      <button onClick={ClickMe}>Click ME</button>
    </div>
  );
};

export default EventHandling;
