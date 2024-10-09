import React, { useState } from 'react';
import logoImage from './logo.png';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage1 from './logo1.png'
import axios from 'axios';
import videoFile from './educational-blog2.mp4';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const passValid = (password) => password.length >= 8;

  const handleverify = async (event) => {
    event.preventDefault();
    let valid = true;

    if (emailValid(email)) {
      setEmailError('');
    } else if (email === '') {
      setEmailError('Email field cannot be empty!...');
      valid = false;
    } else {
      setEmailError('Enter a valid email address.');
      valid = false;
    }

    if (passValid(password)) {
      setPassError('');
    } else if (password === '') {
      setPassError('Password field cannot be empty!...');
      valid = false;
    } else {
      setPassError('Password must be at least 8 characters long.');
      valid = false;
    }

    if (valid) {
      try {
        const data = { password, email };
        const result = await axios.post('http://localhost:8000/login', data);
        console.log('Login result:', result.data);
        if (result.data.name) {
          dispatch(login(result.data.name));
          navigate('/');
        } else {
          setPassError('Login failed. Please check your email and password');
        }
      } catch (error) {
        console.error('Login error:', error);
        
      }
    }
  };

  return (
    <div className='Login'>
      <div className='login-main'>
        <video width="390px" height="390px" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="login-data">
          <img src={logoImage} className='login-logo1' alt="Logo" />
          <img src={logoImage1} className='login-logo2' alt="Logo" />
          <h1 className='login-logoh1'>EduPathway</h1>
          <div className="login-data1">
            <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className='login-error'>{emailError}</div>
          <div className="login-data1">
            <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className='login-error'>{passError}</div>
          <div className='login-data2'>
            <Link className='link' to={'/Fpassword'}>Forget Password?</Link>
          </div>
          <button type="submit" className="login-button" onClick={handleverify}>Sign in</button>
          <Link className='link-me1' to={'/'}>
            <button type="submit" className="login-button">Cancel</button>
          </Link>
          <div className='login-fpass'>
            <label>Not a member?</label><Link className='link-me1' to={'/Signup'}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
