import React, { useState } from "react";
import "../comp_css/LoginForm.css";
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const navigate=useNavigate();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const formData = {
    username: username,
    password: password,
  };

  const submitHander = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  const style = {
    //this is for styling we can style by passing value to mark
    margin: "50px",
    border: "2px solid teal",
    padding: "20px",
    fontSize: "20px",
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
      </form>
    </div>
  );
};
export default LoginForm;
