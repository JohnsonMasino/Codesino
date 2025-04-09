import React, { useState } from 'react';
import BlogCards from './BlogCards';
import BlogPagination from './BlogPagination';

const BlogContainer = () => {
  const postsPerPage = 9;

  const allPosts = Array.from({ length: 25 }).map((_, index) => ({
    id: index,
    title: `Code Like A Pro #${index + 1}`,
    description:
      'Perfect for modern tropical spaces, baroque-inspired interiors, or cozy corners.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    postLink: `/post/${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // or just 'auto' if you want instant scroll
    });
  };
  

  return (
    <>
      <BlogCards blogs={currentPosts} />
      <BlogPagination
        totalPosts={allPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BlogContainer;
