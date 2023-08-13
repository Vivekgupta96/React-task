import React, { useState } from "react";
import "../comp_css/Login.css";

const formData = {
  username: "",
  password: "",
};
const Login = () => {
  const [form, setForm] = useState(formData);

  const setHandlerChange = (e) => {
    const val = e.target.value;
    setForm({ ...form, [e.target.name]: val });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const { username, password } = form;
  return (
    <div className="login-form">
      {" "}
      {/* Use a class name for styling */}
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={setHandlerChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={setHandlerChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Login;
