import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogPagination = ({ totalPosts, postsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="container mx-auto flex justify-center items-center py-4">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
          size="large"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#ffffff',
              borderColor: '#ffffff',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#ffffff',
              color: '#000000',
            },
            '& .MuiPaginationItem-icon': {
              color: '#ffffff',
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default BlogPagination;
