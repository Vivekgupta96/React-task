import React, { useState } from "react";
import "../comp_css/LoginForm.css"

const formData = {
  username: "",
  password: "",
};
const LoginForm = () => {
  
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
    <div className="login-form"> {/* Use a class name for styling */}
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
export default LoginForm;






/*

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const formData = {
    username: username,
    password: password,
  };

  const submitHander = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const style = {//this is for styling we can style by passing value to mark
    margin: "50px",
    border: "2px solid teal",
    padding: "20px",
    fontSize:"20px"
  };

  return (
    <div style={style}>
      <h1>Login Page </h1>
      <form onSubmit={submitHander}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username} //come from the useState
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

*/
