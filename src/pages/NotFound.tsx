import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const login = useNavigate();
  const loginFunc = () => {
    login('/Login')
  }
  return (
    <div className="test">
      <h1>Register Test</h1>
      <h1>Sign Up Successul</h1>
      <button className="login-test" onClick={loginFunc}>Login</button>
    </div>
  );
};

export default NotFound;
