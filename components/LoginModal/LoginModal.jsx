import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Form from './Form/Form';
import styles from './LoginModal.module.css';

const LoginModal = ({ open, setOpen }) => {
  const closeLoginModalHandler = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={closeLoginModalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 700,
      }}
    >
      <Fade in={open}>
        <Box className={styles.container}>
          <Form />
        </Box>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
