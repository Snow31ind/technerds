import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import HideOnScroll from './elements/HideOnScroll';
import Logo from './elements/Logo';
import { ShoppingCart, Favorite, Person } from '@mui/icons-material';
import UserActive from './elements/UserActive/UserActive';
import AdminActive from './elements/AdminActive/AdminActive';
import MiniCart from './elements/MiniCart/MiniCart';
import GrowBox from '../GrowBox/GrowBox';
import classes from './Navbar.module.css';
import SearchEngine from '../SearchEngine/SearchEngine';

const Navbar = () => {
  const user = false;
  const admin = true;

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Logo />
          <GrowBox />
          {/* <Box className={`${classes.buttons__wrapper}`}> */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchEngine />
            <MiniCart />

            {/* </NextLink> */}

            <IconButton>
              {/* {state.favs.length > 0 ? (
              <Badge
                // badgeContent={[...new Set(state.cart.cartItemIds)].length}
                badgeContent={state.favs.length}
                color="secondary"
              >
                <Favorite />
              </Badge>
            ) : (
              <Favorite />
            )} */}
              <Favorite />
            </IconButton>

            {user ? (
              <UserActive />
            ) : admin ? (
              <AdminActive />
            ) : (
              <IconButton onClick={() => {}}>
                <Person />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
