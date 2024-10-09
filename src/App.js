import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';

import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import Fpassword from './component/Fpassword';
import Blogdata from './component/Blogdata';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blogdata />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Fpassword' element={<Fpassword />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
