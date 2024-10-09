import React, { useState } from 'react';
import logoImage from './logo.png';
import logoImage1 from './logo1.png'
import videoFile from './forget.mp4';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Fpassword() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [checkpass, setCheckpass] = useState(true);
  const [check, setcheck] = useState(true);
  const navigate = useNavigate();
 
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [cpassError, csetPassError] = useState('');
  const handleVerify = async() => {
    const emailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passValid = (password) => password.length >= 8;
    const cpassvalid=(password)=> password.length>=8
    let valid=true;
  if (emailValid(email)) {
      setEmailError('');}
  else if(email ===''){
      setEmailError('Email address is empty!...');
      valid = false;
    }  
  else {
      setEmailError('Enter a valid email address');
      valid = false;
  }
  if (passValid(password)) {
    setPassError('');
} 
  else if(password ===''){
  setPassError('Password is empty!...');
  valid = false;
}  
  else {
    setPassError('Enter a valid password');
    valid = false;
}
if (cpassvalid(password)) {
  csetPassError('');
} 
else if(password ===''){
csetPassError('Re-Enter Password is empty!...');
valid = false;
}  
else {
  csetPassError('Enter a valid Re-Enter password');
  valid = false;
}
  if (password !== cpassword) {
      csetPassError('your password and re-enter password do not match')
      return;}
    
    setcheck(true)
    const newdata = { email, password };
    const result= await axios.post('http://localhost:8000/fpassword', newdata)
    console.log(result)
        if (result.status === 200 && result.data === 'success') {
          alert("password change successfully")
          navigate('/login');
 }
else{
  setcheck(false);
}
  }
  return (
    <div>
      <div className='Login'>
        <div className='login-main'>
        <video width="400px" height="400px" autoPlay loop muted>
                        <source src={videoFile} type="video/mp4" />
                    </video>
          <div className="login-data">
            <img src={logoImage} className='login-logo1' alt="Logo" />
            <img src={logoImage1} className='login-logo2' alt="Logo" />
            <h1 className='login-logoh1'>EduPathway</h1>
            <div className="login-data1">
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className='login-error'>{emailError}</div>
            <div className="login-data1">
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className='login-error'>{passError}</div>
            <div className="login-data1">
              <input type="password" placeholder="Re-Enter Password" onChange={(e) => setCpassword(e.target.value)} value={cpassword} />
            </div>
            <div className='login-error'>{cpassError}</div>
           
            <button type="submit" className="login-button" onClick={handleVerify}>Submit</button>
            <Link className='link-me1' to={'/'}>
          <button type="submit" className="login-button">Cancle</button></Link>
        <div className='login-fpass'></div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Fpassword;
