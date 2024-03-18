import React, { useState } from "react";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    {
      let obj = {
        email: email,
        password: password,
      };
      console.log(obj);
    }
  };
  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <label className="form-label">username</label>
        <input
        className="form-control"
          type="email"
          placeholder="email"
          required

          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
     <label class="form-label">Password</label>   
        <input
        className="form-control"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          
        />
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default Login;
