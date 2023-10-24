import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const sendData = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const confirmPassword = cpasswordRef.current.value;

    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    try {
      const payload = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: password,
      };

      console.log(payload);
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        payload
      );
      console.log(response);
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container2">
      <form className="sign-up-form" onSubmit={sendData}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" ref={usernameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" placeholder="Confirm Password" ref={cpasswordRef} />
        </div>
        <button className="btn2" type="submit">
          Sign Up
        </button>
        {error ? <p className="warning">Password do not match.</p> : <></>}
      </form>
    </div>
  );
};

export default SignUp;
