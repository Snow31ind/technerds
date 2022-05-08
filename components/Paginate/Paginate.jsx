import { Box, Pagination } from '@mui/material';
import React from 'react';
import styles from './Paginate.module.css';

const Paginate = ({ currentPage, count }) => {
  const pageChangeHandler = () => {};

  return (
    <Box className={styles.paginate}>
      <Pagination
        showFirstButton
        showLastButton
        shape="rounded"
        count={count}
        defaultPage={currentPage}
        onChange={pageChangeHandler}
      />
    </Box>
  );
};

export default Paginate;
