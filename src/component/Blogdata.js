import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Blogdata() {
  const { Aname } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/blog/${Aname}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [Aname]);
  return (
    <div>
      <Header />
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <h2>Author Name: {post.Aname}</h2>
        {post.imagePath && (
          <img
            src={`http://localhost:8000${post.imagePath}`}
            alt="Blog Post"
            className="blog-image"
          />
        )}
        <p>{post.message}</p>
      </div>
    </div>
  );
}

