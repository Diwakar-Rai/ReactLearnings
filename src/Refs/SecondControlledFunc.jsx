import React, { useState } from "react";

const FirstControlledFunc = () => {
  let [state, setState] = useState({ email: "", password: "", loading: false });

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log({ email, password });
    } catch (error) {
      console.log(error);
    }
    setState({ email: "", password: "", loading: false });
  };

  let { email, password, loading } = state;
  return (
    <div id="formBlock">
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <button>{loading === true ? "loading..." : "Login"}</button>
        </div>
      </form>
    </div>
  );
};

export default FirstControlledFunc;
