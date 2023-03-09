import React,{useState} from 'react'

const FirstControlledFunc = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("false");

    let handleSubmit = e => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log({ email, password });
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
        setEmail("");
        setPassword("");
    }
  return (
    <div id="formBlock">
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onChange={e=>setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            
            onChange={e=>setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
                  <button>{ loading === true? "loading...":"Login" }</button>
        </div>
      </form>
    </div>
  );
}

export default FirstControlledFunc
