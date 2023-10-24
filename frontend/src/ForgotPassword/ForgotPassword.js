import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './ForgotPassword.css';
const Forgot_Password = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    try {
      const response = await axios.put('http://localhost:5000/api/auth/forgot-password', {
        email,
        password,
      });
      console.log(response.data);
      alert("Password Changed Successfully.");
      navigate('/login');
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div className="box_container">
      <div className="box2" id="box3">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <h1>Forgot Password</h1>
            <div className="inputbox">
              <input
                type="text"
                name="email"
                autoComplete="off"
                required
                ref={emailRef}
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
                ref={passwordRef}
              />
              <label>New Password</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                name="confirmPassword"
                autoComplete="off"
                required
                ref={confirmPasswordRef}
              />
              <label>Confirm New Password</label>
            </div>
            {error && <div>Passwords do not match.</div>}
            <input type="submit" value="Change Password" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
