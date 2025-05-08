import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, image, content };
    const response = await fetch('https://codesino.onrender.com/blog/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      alert('Post created successfully');
      navigate('/');
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="create-blog-form">
        <h2>Create Blog Post</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="form-input"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="form-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="form-textarea"
        />
        <button type="submit" className="form-button">Create Post</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;


