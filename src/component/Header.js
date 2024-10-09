import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from './logo.png'; 
import logoImage1 from './logo1.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/userSlice';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userName = useSelector((state) => state.user.name);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    alert("Successfully logged out!"); 
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const iflogin = (path) => {
    if (!isLoggedIn) {
      navigate('/Login');
    } else {
      navigate(path);
    }
  };

  return (
    <div className='header-main'>
      <div className='header'>
        <div className='main'>
          <div className='logo'>
            <img src={logoImage} className='img-logo' alt="Main Logo" />
            <div className='logo1'>
              <img src={logoImage1} className='img-logo1' alt="Spinning Logo" />
            </div>
          </div>
          <h1 className='img-h1'>EduPathway</h1>
        </div>

        <nav className="navbar">
          <Link className='link-me' to={'/'} aria-label="Home"><i className="fas fa-home"></i> Home</Link>
          
          <button onClick={() => iflogin('/Blog')} className='navbar-button'>
            <i className="fas fa-blog"></i> Blog
          </button>
          
          <button onClick={() => iflogin('/Contact')} className='navbar-button'>
            <i className="fas fa-phone"></i> Contact
          </button>
          
          <button onClick={() => iflogin('/About')} className='navbar-button'>
            <i className="fas fa-user"></i> About
          </button>

          {isLoggedIn ? (
            <div className="auth-links">
              <span className="welcome-msg">{userName}</span>
              <button className="link-me2" onClick={handleLogout} aria-label="Logout"><i className="fas fa-sign-out-alt"></i> Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link className='link-me' to={'/Login'} aria-label="Login"><i className="fas fa-sign-in-alt"></i> Login</Link>
              <Link className='link-me' to={'/Signup'} aria-label="Signup"><i className="fas fa-user-plus"></i> Signup</Link>
            </div>
          )}
        </nav>

        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {sidebarOpen && (
          <nav className="sidebar">
            <div className='sidebar-data'>
              <Link className='navbar-button' to={'/'} aria-label="Home"><i className="fas fa-home"></i> Home</Link>
              <button onClick={() => iflogin('/Blog')} className='navbar-button'><i className="fas fa-blog"></i> Blog</button>
              <button onClick={() => iflogin('/Contact')} className='navbar-button'><i className="fas fa-phone"></i> Contact</button>
              <button onClick={() => iflogin('/About')} className='navbar-button'><i className="fas fa-user"></i> About</button>
            </div>
            {isLoggedIn ? (
              <div className="auth-links">
                <span className="welcome-msg">{userName}</span>
                <button className="link-me2" onClick={handleLogout} aria-label="Logout"><i className="fas fa-sign-out-alt"></i> Logout</button>
              </div>
            ) : (
              <div className="auth-links">
                <Link className='link-me' to={'/Login'} aria-label="Login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                <Link className='link-me' to={'/Signup'} aria-label="Signup"><i className="fas fa-user-plus"></i> Signup</Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
