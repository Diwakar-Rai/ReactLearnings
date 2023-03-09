import React, { useRef } from "react";

const Forms = () => {
  let emailRef = useRef();
  let passwordRef = useRef();
  let getValues = e => {
    e.preventDefault();
    let username = emailRef.current.value;
    let password = passwordRef.current.value;
    console.log({ username, password });
  };
  return (
    <div id="formBlock">
      <h1>Login Form</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            ref={emailRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            ref={passwordRef}
          />
        </div>
        <div className="form-group">
          <button onClick={getValues}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
