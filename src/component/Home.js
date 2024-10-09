import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoFile from './educational.blog.gif';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import img1 from '../blogging/blogging.jpeg';
import img2 from '../blogging/blogging8.jpg';
import img3 from '../blogging/blogging4.png';
import img4 from '../blogging/blogging.png';
import img5 from '../blogging/blogging6.jpg';
import img6 from '../blogging/blogging2.jpg';
import img7 from '../blogging/blogging9.jpeg';
import img8 from '../blogging/blogging7.jpeg';
import img9 from '../blogging/blogging10.jpeg';
import img10 from '../blogging/blogging3.jpg';
import '../App.css';
import './home.css';
import Header from './Header';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 448 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 448, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: (post.likes || 0) + 1 }; 
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  const handleDislike = (postId) => {
    const updatedPosts = [...posts]; 
    for (let i = 0; i < updatedPosts.length; i++) {
      if (updatedPosts[i].id === postId) {
        updatedPosts[i].dislikes = (updatedPosts[i].dislikes || 0) + 1; 
        break; 
      }
    }
    setPosts(updatedPosts);}
  const handleShare = (post) => {
    const shareData = {
      title: post.Topic,
      text: post.message,
      url: `http://localhost:8000/blog/${post.id}`, 
    };
    
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Post shared successfully!'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert(`Share this link: ${shareData.url}`);
    }
  };

  return (
    <div className="Home-Main">
      <Header />
      <div className="home-main-cover">
        <div className="home-border">
          <h1 className="home-h1">Blogs & Websites</h1>
          <h2 className="home-h2">For Education</h2>
          <p className="home-p">
            By educators, for educators. We are the oldest and most trusted web
            publishing platform for teachers and students.
          </p>
          <Link to="blog">
          <button className="home-blog-button">Create Blog</button></Link>
        </div>
        <div className="gif-container">
          <img src={videoFile} alt="Example GIF" />
        </div>
      </div>

      <div className="slider-main">
        <Carousel responsive={responsive}>
          <div className="slider-image">
            <img src={img1} className="slider-image1" alt="Blog 1" />
          </div>
          <div className="slider-image">
            <img src={img2} className="slider-image1" alt="Blog 2" />
          </div>
          <div className="slider-image">
            <img src={img3} className="slider-image1" alt="Blog 3" />
          </div>
          <div className="slider-image">
            <img src={img4} className="slider-image1" alt="Blog 4" />
          </div>
          <div className="slider-image">
            <img src={img5} className="slider-image1" alt="Blog 5" />
          </div>
          <div className="slider-image">
            <img src={img6} className="slider-image1" alt="Blog 6" />
          </div>
          <div className="slider-image">
            <img src={img7} className="slider-image1" alt="Blog 7" />
          </div>
          <div className="slider-image">
            <img src={img8} className="slider-image1" alt="Blog 8" />
          </div>
          <div className="slider-image">
            <img src={img9} className="slider-image1" alt="Blog 9" />
          </div>
          <div className="slider-image">
            <img src={img10} className="slider-image1" alt="Blog 10" />
          </div>
        </Carousel>
      </div>

      <div className='blogging'>
        {posts.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <div key={post.Aname} className="blog-post">
               
                {post.imagePath && (
                  <img
                    src={`http://localhost:8000${post.imagePath}`}
                    alt="Blog Post"
                    className="blog-image"
                  />
                )}
                 <h1>{post.Topic}</h1>
                <p>
                  {post.message}
                </p>
                <h2>{post.Aname}</h2>
                <div className='buttons'>
                <button className="like-button" onClick={() => handleLike(post.id)}>
                <i class='bx bx-heart'></i>{post.likes || 0}
                </button>
                <button className="like-button" onClick={() => handleDislike(post.id)}>
                <i class='bx bxs-hand-down'></i>{post.dislikes || 0}
                </button >
                <button className="like-button" onClick={() => handleShare(post)}> <i className="fas fa-share"></i></button>
              </div>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="footer-main">
        <div className="bio">
          <div className="company">
            <h1>EduPathway</h1>
            <br />
            <br />
            <h4>
              c-7 Vancouver
              <br />
              Canada in 46062
            </h4>
          </div>
          <div className="follow">
            <h1>Follow Us</h1>
            <Link to="#">
              <i className="fa-brands fa-facebook" style={{ color: '#0c29bd' }}></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-instagram" style={{ color: '#E1306C' }}></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-linkedin" style={{ color: '#0072b1' }}></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-github" style={{ color: '#2b3137' }}></i>
            </Link>
          </div>
        </div>

        <div className="data1">
        <div className="terms1">
            <h1>Insurance</h1>
            <Link to="#">Blog Insurance</Link>
            <br />
            <Link to="#">Education Insurance</Link>
            <br />
            <Link to="#">International Student Insurance</Link>
          </div>

          <div className="terms1">
            <h1>Popular Topics</h1>
            <Link to="#">Administration & Leadership</Link>
            <br />
            <Link to="#">ChatGPT & Generative AI</Link>
            <br />
            <Link to="#">Classroom Management</Link>
            <br/>
             <Link to="#">Culturally Responsive Teaching</Link>
            <br/>
            <Link to="#">Differentiated Instruction</Link>
            <br/>
            <Link to="#">Research</Link>
            <br/> 
          </div>
          <div className="terms2">
            <h1>Resources & Support</h1>
            <Link to="#">Customer Resources</Link>
            <br />
            <Link to="#">Blog Resources</Link>
            <br />
            <Link to="#">Member Portal</Link>
            <br />
            <Link to="#">FAQs</Link>
          </div>
          <div className="terms3">
            <h1>Company</h1>
            <Link to="#">About EduPathway</Link>
            <br />
            <Link to="#">Careers</Link>
            <br />
            <Link to="#">Contact Us</Link>
          </div>

          <div className="terms3">
            <h1>Grade Levels</h1>
            <Link to="#"> Pre-K</Link>
            <br />
            <Link to="#">K-2 Primary</Link>
            <br />
            <Link to="#">3-5 Upper Elementary</Link>
            <br/>
            <Link to="#">6-8 Middle School</Link>
            <br />
            <Link to="#">9-12 High School</Link>
          </div>
         
        </div>
        <div className='terms'>
          <h4>Privacy Policy Terms of Use.</h4>
         
     </div>
      <div className='footer'>
      <h1>Edupathway is an initiative of the Prabhjot Singh Educational Foundation.</h1>
      <h3>©2024 prabhjot singh Educational Foundation. All Rights Reserved.<br/>
      Edupathway®, the EDU Logo™ and Prabhjot Singh Education Research Logo® are trademarks or registered trademarks of the<br/> 
      Prabhjot Singh Educational Foundation in the Canada Vancouver and other countries.</h3>
    </div></div></div>
  );
}
