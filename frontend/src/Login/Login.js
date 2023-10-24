import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from '../DataContext/DataContext';
import './login.css';
import axios from 'axios';

function Login() {
  const { setUserData } = useData();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data);
      setUserData(response.data);
      navigate('/');
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="container1">
      <form action="/login" method="post" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" required ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required ref={passwordRef} />
        </div>
        <div className="form-group">
          <button className="btn1" type="submit">Login</button>
        </div>
        {error ? <p>You have entered wrong details</p> : null}
      </form>
      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <div className="signup-link">
       <Link to="/forgot">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
