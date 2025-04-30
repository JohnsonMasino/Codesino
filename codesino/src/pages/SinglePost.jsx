import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isDummy, setIsDummy] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blog/api/posts/${id}/`);
        if (!response.ok) throw new Error('Post not found');

        const data = await response.json();
        setPost(data);
      } catch (error) {
        setIsDummy(true);
        setPost({
          id,
          title: `Demo Post #${id}`,
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
          content:
            'This is a demo blog post shown because the requested post does not yet exist in the system. Once a real post is created with this ID, it will appear here instead.',
        });
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="loading-container">
        <p>Loading blog post...</p>
      </div>
    );
  }

  return (
    <div className="single-blog-wrapper">
      <h1 className="single-blog-title">{post.title}</h1>
      <img src={post.image} alt={post.title} className="single-blog-image" />
      <p className="single-blog-content">{post.content}</p>

      {isDummy && (
        <p className="dummy-note">
          This is a dummy post. Real posts will appear here when available.
        </p>
      )}
    </div>
  );
};

export default SingleBlog;




