import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import HideOnScroll from './elements/HideOnScroll';
import Logo from './elements/Logo';
import { ShoppingCart, Favorite, Person } from '@mui/icons-material';
import UserActive from './elements/UserActive/UserActive';
import AdminActive from './elements/AdminActive/AdminActive';
import MiniCart from './elements/MiniCart/MiniCart';
import GrowBox from '../GrowBox/GrowBox';
import styles from './Navbar.module.css';
import SearchEngine from '../SearchEngine/SearchEngine';
import { useRouter } from 'next/router';
import LoginModal from '../LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors/userSelector';

const Navbar = () => {
  // Error: Hydration failed because the initial UI does not match what was rendered on the server
  // const user = useSelector(selectUser());
  // console.log(user);
  const user = false;
  const admin = false;
  const router = useRouter();
  const isHomepage = router.pathname === '/';

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const openLoginModalHandler = () => setOpenLoginModal(true);

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={isHomepage ? styles.appBar : ''}>
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
                <IconButton onClick={openLoginModalHandler}>
                  <Person />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
    </React.Fragment>
  );
};

export default Navbar;
