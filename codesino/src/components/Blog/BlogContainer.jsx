import React, { useState, useEffect } from 'react';
import BlogCards from './BlogCards';
import BlogPagination from './BlogPagination';

const BlogContainer = () => {
  const postsPerPage = 9;
  const totalDisplayPosts = 25;

  const [realPosts, setRealPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRealPosts = async () => {
      try {
        const response = await fetch('https://codesino.onrender.com/blog/api/posts/');
        if (response.ok) {
          const data = await response.json();
          const processedPosts = data.map(post => ({
            ...post,
            postLink: `/blog/${post.id}`, 
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

  const generateDummyPosts = (startId, count) => {
    return Array.from({ length: count }).map((_, index) => ({
      id: startId + index,
      title: `This Post is Loading... #${startId + index + 1}`,
      description:
        'This is a post card but the posts are still spinning up from the server. Hold on a little longer...',
      image:
        'https://icons8.com/preloaders/img/ajax-loader-preview.png',
      postLink: `/blog/dummy-${startId + index + 1}`,
      id: `dummy-${startId + index}`,
      isDummy: true,
    }));
  };

  const filledPosts = [
    ...realPosts,
    ...generateDummyPosts(realPosts.length, totalDisplayPosts - realPosts.length),
  ];

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
