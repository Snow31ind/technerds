import { Avatar, Badge, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import StyledBadge from './elements/StyledBadge';
import StyledIconButton from './elements/StyledIconButton';
import {
  HistoryOutlined,
  SupervisedUserCircleOutlined,
  Logout,
  ShoppingCart,
  Favorite,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { signOut } from '../../../../actions/user';
import { useDispatch } from 'react-redux';

const UserActive = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const loginMenuClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = (e, redirect) => {
    e.preventDefault();

    setAnchorEl(null);

    if (redirect) {
    }
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch(signOut(router));
  };

  return (
    <React.Fragment>
      <StyledIconButton onClick={loginMenuClickHandler}>
        <StyledBadge>
          <Avatar>User</Avatar>
        </StyledBadge>
      </StyledIconButton>

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
        <MenuItem onClick={(e) => loginMenuCloseHandler(e, '/order-history')}>
          <ListItemIcon>
            <HistoryOutlined />
          </ListItemIcon>
          Order history
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

export default UserActive;
