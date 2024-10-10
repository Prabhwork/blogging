import React, { useState } from 'react';
import logoImage from './logo.png';
import logoImage1 from './logo1.png';
import video from './blogback.mp4';
import videoFile from './blogback2.mp4';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Blog() {
  const [AddData, setAddData] = useState([]);
  const [Aname, setAname] = useState('');
  const [message, setMessage] = useState('');
  const [Topic, setTopic] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const [AnameError, setAnameError] = useState('');
  const [MessageError, setMessageError] = useState('');
  const [TopicError, setTopicError] = useState('');
  const [ImageError, setImageError] = useState('');


  const handleVerify = async () => {
    const NameValid = (Aname) => /^[a-z A-Z ]+$/.test(Aname);
    const NameValid1 = (Aname) => Aname.length >= 3;
    const messageValid = (message) => /^[a-zA-Z0-9._%+-,';: ]+$/.test(message);
    const messageValid1 = (message) => message.length >= 100;
  
    const TopicValid = (message) => /^[a-zA-Z0-9. ]+$/.test(message);
    const TopicValid1 = (message) => message.length >=8;
    let valid = true;
    
    if (NameValid(Aname) && NameValid1(Aname)) {
      setAnameError('');
    } else if (Aname === '') {
      setAnameError(' Author name is empty!...');
      valid = false;
    } else if (!NameValid(Aname)) {
      setAnameError(' Author name can only contain alphabets.');
      valid = false;
    } else if (!NameValid1(Aname)) {
      setAnameError(' Author name length must be between 4 to 15 characters.');
      valid = false;
    }

    if (messageValid(message) && messageValid1(message)) {
      setMessageError('');
    } else if (message === '') {
      setMessageError(' Description is empty!...');
      valid = false;
    } else if (!messageValid(message)) {
      setMessageError(' Description can only contain alphabets and numbers.');
      valid = false;
    } else if (!messageValid1(message)) {
      setMessageError(' Description must be at least 50 characters long.');
      valid = false;
    }

    if (TopicValid(Topic) && TopicValid1(Topic)) {
      setTopicError('');
    } else if (Topic === '') {
      setTopicError(' Heading is empty!...');
      valid = false;
    } else if (!TopicValid(Topic)) {
      setTopicError(' Heading can only contain alphabets and numbers.');
      valid = false;
    } else if (!TopicValid1(Topic)) {
      setTopicError(' Description must be at least 50 characters long.');
      valid = false;
    }

    if (image) {
      const imageValid = image.size <= 2 * 1024 * 1024;
      const imageValidType = ['image/jpeg', 'image/png'].includes(image.type);
      if (!imageValid) {
        setImageError('Image size should be less than 2MB.');
        valid = false;
      } else if (!imageValidType) {
        setImageError('Only JPG and PNG images are allowed.');
        valid = false;
      } else {
        setImageError('');
      }
    } else {
      setImageError('Please upload an image.');
      valid = false;
    }

    return valid;
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!await handleVerify()) return;

    const formData = new FormData();
    formData.append('Aname', Aname);
    formData.append('Topic',Topic)
    formData.append('message', message);
    formData.append('image', image);

    const response = await axios.post('http://localhost:8000/blog', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })

    if (response.status === 200) {
      console.log('Data added', response.data);
      setAddData((current) => [...current, { Aname, message,Topic, image: response.data.imagePath }]);
      setAname('');
      setMessage('');
      setTopic('')
      setImage(null);
      navigate('/'); 
    } else {
      console.log('Error uploading data');
    }
  };

  return (
    <div className='blog'>
      <video autoPlay loop muted class="blog1">
          <source src={video} type="video/mp4" />
        </video>
         
      <div className='Login'>
        <div className='blog-main'>
       <div className='blog-video'>
        <video width="400px" height="400px" autoPlay loop muted>
                        <source src={videoFile} type="video/mp4" />
                    </video></div>
          <div className="blog-data">
            <img src={logoImage} className='login-logo1' alt="Logo" />
            <img src={logoImage1} className='login-logo2' alt="Logo" />
            <h1 className='login-logoh1'>EduPathway</h1>

            <form onSubmit={handleSubmit}>
              <div className="login-data1">
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  onChange={(e) => setAname(e.target.value)}
                  value={Aname}
                />
              </div>
              <div className='login-error'>{AnameError}</div>
              <div className="login-data1">
                <input
                  type="text"
                  placeholder="Enter The Heading"
                  onChange={(e) => setTopic(e.target.value)}
                  value={Topic}
                />
              </div>
              <div className='login-error'>{TopicError}</div>

              <div className="login-data1">
                <textarea
                  placeholder="Enter your description (at least 50 characters)"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <div className='login-error'>{MessageError}</div>

              <div className="login-data1">
                <input type="file" accept='.png,.jpg,.jpeg' onChange={handleImageChange} />
              </div>
              <div className='login-error'>{ImageError}</div>

              <button type="submit" className="blog-button">Submit</button>
              <Link className='link-me1' to={'/'}>
            <button type="submit" className="blog-button">Cancel</button>
          </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Blog;
