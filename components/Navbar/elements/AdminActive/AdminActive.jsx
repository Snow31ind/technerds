import {
  Avatar,
  Badge,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import { SupervisedUserCircleOutlined, Logout } from '@mui/icons-material';
import { useRouter } from 'next/router';

const AdminActive = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const loginMenuClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = (e, redirect) => {
    e.preventDefault();

    setAnchorEl(null);

    if (redirect) {
      router.push(redirect);
    }
  };

  const logoutClickHandler = () => {
    // closeSnackbar();
    setAnchorEl(null);
    // dispatch({ type: 'USER_LOGOUT' });

    // const msg = 'Logging out succesfully';
    // enqueueSnackbar(msg, { variant: 'success' });
    router.push('/');
  };

  return (
    <React.Fragment>
      <IconButton onClick={loginMenuClickHandler}>
        <Badge>
          <Avatar>Admin</Avatar>
        </Badge>
      </IconButton>

      <Menu
        keepMounted
        id="avatar-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={(e) => loginMenuCloseHandler(e, '/admin/dashboard')}>
          <ListItemIcon>
            <SupervisedUserCircleOutlined />
          </ListItemIcon>
          Admin Dashboard
        </MenuItem>
        <MenuItem onClick={logoutClickHandler}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AdminActive;
