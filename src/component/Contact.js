import React, { useState } from 'react'
import '../App.css';
import logoImage from './logo.png';
import logoImage1 from './logo1.png'
import contactRes from './contactRes.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [message, setmessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageerror, setmessageerror] = useState('');

  const navigate = useNavigate();

  const handleverify = async (event) => {
    event.preventDefault();
    const emailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const nameValid = (name) => /^[a-zA-Z ]+$/.test(name) &&name.length >=3 && name.length<=15;
    const phoneValid = (phoneno) => /^[6-9]\d{9}$/.test(phoneno);
    const messageValid=(message)=>message.length>=50;

    let valid = true;
    if (nameValid(name)) {
      setNameError('');
    }
    else if (name === '') {
      setNameError('Name cannot empty!...');
    }
    else {
      setNameError('Name must be more than 4 characters');
      valid = false;
    }


    if (emailValid(email)) {
      setEmailError('');
    }
    else if (email === '') {
      setEmailError('Email field cannot be empty!...');
      valid = false;
    }
    else {
      setEmailError('Enter a valid email address.');
      valid = false;
    }


    if (phoneValid(phoneno)) {
      setPhoneError('');
    }
    else if (phoneno === '') {
      setPhoneError('Phone Number cannot empty!...');
    }
    else {
      setPhoneError('Enter a valid 10-digit phone number starting with 6-9');
      valid = false;
    }

    if (messageValid(message)) {
      setmessageerror('');
    }
    else if (message === '') {
      setmessageerror('message cannot empty!...');
    }
    else {
      setmessageerror('message must be more than 50 characters');
      valid = false;
    } 

    const data = { name,email,phoneno,message}
      const result = await axios.post('http://localhost:8000/contact', data)
      console.log(result)
      if (result.status === 200) {
        navigate('/')
      }
      else{
        console.log('error')
      }
  }

  return (
<div className='background1'>
  <div className='contact'>
<div class="responsive-contact">
   <img src={contactRes}alt="Responsive Image" class="responsive-image1"/>
</div>
    <div className=' contact-main'>
      <div className="contact-data">
        <img src={logoImage} className='login-logo1' alt="Logo"/>
        <img src={logoImage1} className='login-logo2' alt="Logo" />
        <h1 className='login-logoh1'>EduPathway</h1>
        <div className="login-data1"><input type="text" placeholder="Enter Your Name" required />
        </div>
        <div className='login-error'>{nameError}</div>
        <div className="login-data1"><input type="text" placeholder="Enter Your Mobile number" required />
        </div>
        <div className='login-error'>{phoneError}</div>
        <div className="login-data1"><input type="email" placeholder="Enter Your Email" required />
        </div>
        <div className='login-error'>{emailError}</div>
        <div className="login-data1"><textarea name="message" placeholder="Enter Your message above 50 characters" required />
        </div>
        <div className='login-error'>{messageerror}</div>
          <button type="submit" className="login-button" onClick={handleverify}>submit</button>
        <Link className='link-me1' to={'/'}>
          <button type="submit" className="login-button">Cancle</button></Link>
        <div className='login-fpass'></div>
      </div>
    </div>
    </div>
</div>
  )
}
