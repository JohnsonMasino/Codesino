import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // 👉 Check for dummy post ID
  if (id.startsWith('dummy-')) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">This is a sample blog post</h1>
        <p className="text-gray-600">Demo content. No real post available.</p>
      </div>
    );
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://codesino.onrender.com/blog/api/posts/${id}/`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <div className="p-6 text-red-600 font-bold">Error: {error}</div>;
  }

  if (!post) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl text-gray-200 font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-6" />
      <p className="text-gray-400 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

export default BlogPostDetail;

