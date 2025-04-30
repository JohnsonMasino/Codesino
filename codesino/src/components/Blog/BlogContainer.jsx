import React, { useState, useEffect } from 'react';
import BlogCards from './BlogCards';
import BlogPagination from './BlogPagination';

const BlogContainer = () => {
  const postsPerPage = 9;
  const totalDisplayPosts = 25; // number of posts to display overall

  const [realPosts, setRealPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRealPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/blog/api/posts/');
        if (response.ok) {
          const data = await response.json();
          const processedPosts = data.map(post => ({
            ...post,
            postLink: `/blog/${post.id}`, // Ensure postLink exists for real posts
            isDummy: false,
          }));
          setRealPosts(processedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }

    };
    fetchRealPosts();
  }, []);

  // Generate dummy posts to fill in the gaps
  const generateDummyPosts = (startId, count) => {
    return Array.from({ length: count }).map((_, index) => ({
      id: startId + index,
      title: `Code Like A Pro #${startId + index + 1}`,
      description:
        'Perfect for modern tropical spaces, baroque-inspired interiors, or cozy corners.',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      postLink: `/blog/${startId + index + 1}`,
      isDummy: true,
    }));
  };

  // Fill the rest of the slots with dummy posts if real posts are not enough
  const filledPosts = [
    ...realPosts,
    ...generateDummyPosts(realPosts.length, totalDisplayPosts - realPosts.length),
  ];

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filledPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <BlogCards blogs={currentPosts} />
      <BlogPagination
        totalPosts={totalDisplayPosts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BlogContainer;
