import { Box, Pagination } from '@mui/material';
import React from 'react';
import styles from './Paginate.module.css';

const Paginate = ({ page }) => {
  const pageChangeHandler = () => {};

  return (
    <Box className={styles.paginate}>
      <Pagination
        showFirstButton
        showLastButton
        shape="rounded"
        defaultPage={page || '1'}
        onChange={pageChangeHandler}
      />
    </Box>
  );
};

export default Paginate;
