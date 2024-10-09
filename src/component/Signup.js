import React, { useState } from 'react';
import logoImage from './logo.png';
import '../App.css';
import axios from 'axios';
import logoImage1 from './logo1.png';
import signupRes from './loginRes.png';
import { Link, useNavigate } from 'react-router-dom';
import videoFile from './signup.mp4';

export default function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passError, setPassError] = useState('');

    const navigate = useNavigate();

    const emailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passValid = (password) => password.length >= 8;
    const nameValid = (name) => /^[a-zA-Z ]+$/.test(name) &&name.length >=3 && name.length<=15;
    const phoneValid = (phoneno) => /^[6-9]\d{9}$/.test(phoneno);

    const addUser = async (event) => {
        event.preventDefault();
        let valid = true;

        if (emailValid(email)) {
            setEmailError('');
        }
        else if(email===''){
            setEmailError('Email is empty');
            valid = false;
        } else {
            setEmailError('Enter a valid email address');
            valid = false;
        }

        if (passValid(password)) {
            setPassError('');
        } else if(password===''){
            setPassError('password is empty');
            valid = false;
        }else {
            setPassError('Password must be at least 8 characters long');
            valid = false;
        }

        if (nameValid(name)) {
            setNameError('');
        }else if(name===''){
            setNameError('Name is empty');
            valid = false;
        } else {
            setNameError('please enter valid name');
            valid = false;
        }

        if (phoneValid(phoneno)) {
            setPhoneError('');
        }else if(phoneno===''){
            setPhoneError('Phone Number is empty');
            valid = false;
        } else {
            setPhoneError('Enter a valid 10-digit phone number starting with 6-9');
            valid = false;
        }
        if (valid) {

            const data = { name, email, password, phoneno };
            try {
                const response = await axios.post('http://localhost:8000/signup', data);
                if (response.status === 201) {
                    alert('User registered successfully');
                    navigate('/login');
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    setPhoneError('Phone number already exists');
                } else {
                    console.error('An unexpected error occurred:', error.message);
                }
            }
    
        }
    }
    

    return (
        <div className='background'>
            <div className='Login'>
            <div class="responsive-signup">
   <img src={signupRes}alt="Responsive Image" class="responsive-image"/>
</div>
                <div className='login-main'>
      
                    <div className="signup-data">
                        <img src={logoImage} className='login-logo1' alt="Logo" />
                        <img src={logoImage1} className='login-logo2' alt="Logo" />
                        <h1 className='login-logoh1'>EduPathway</h1>
                        <div className='login-error'>{nameError}</div>

                        <div className="login-data1">
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required />
                        </div>
                        <div className='login-error'>{phoneError}</div>
                        <div className="login-data1">
                            <input type="text" placeholder="Phone-no" onChange={(e) => setPhoneno(e.target.value)} value={phoneno} required />
                        </div>
                        
                        <div className='login-error'>{emailError}</div>
                        <div className="login-data1">
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                       
                        <div className='login-error'>{passError}</div>
                        <div className="login-data1">
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </div>
                        

                        <button type="submit" className="login-button" onClick={addUser}>Sign Up</button>
                        <Link className='link-me1' to={'/'}>
                        <button type="submit" className="login-button">Cancel</button></Link>
                        <div className='login-fpass'>
                            <label>If you are a member?</label>
                            <Link className='link-me1' to={'/Login'}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
