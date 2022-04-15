import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Popover,
  Slide,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import NextLink from 'next/link';
import MiniCartItem from './elements/MiniCartItem/MiniCartItem';

const MiniCart = ({
  openCart,
  decreaseItemQuantityHandler,
  increaseItemQuantityHandler,
}) => {
  const cartItemIds = [];
  const miniCart = [];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={openHandler}>
        {/* {state.cart.cartItemIds.length > 0 ? (
              <Badge
                badgeContent={state.cart.cartItemIds.length}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            ) : (
              <ShoppingCart />
            )} */}
        <ShoppingCart />
      </IconButton>

      <Popover
        open={open}
        onClose={closeHandler}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Slide in={openCart} unmountOnExit timeout={300}>
          <Box sx={{ width: 500 }}>
            <Typography>Hello</Typography>
            {cartItemIds.length > 0 ? (
              <List>
                {miniCart.map((miniCartItem) => (
                  <ListItem key={miniCartItem._id}>
                    <MiniCartItem
                      item={miniCartItem}
                      decreaseItemQuantityHandler={decreaseItemQuantityHandler}
                      increaseItemQuantityHandler={increaseItemQuantityHandler}
                    />
                  </ListItem>
                ))}
                <ListItem>
                  <Box sx={{ flex: 1, display: 'flex' }}>
                    <NextLink href="/cart" passHref>
                      <Link underline="hover">
                        <Typography>
                          {' '}
                          View all {`(${cartItemIds.length})`} items{' '}
                        </Typography>
                      </Link>
                    </NextLink>

                    <Box className={classes.grow} />

                    <NextLink href="/checkout" passHref>
                      <Link underline="hover">
                        <Typography>Checkout</Typography>
                      </Link>
                    </NextLink>
                  </Box>
                </ListItem>
              </List>
            ) : (
              <List>
                <ListItem>
                  <ListItemText
                    primary="Your cart is empty"
                    sx={{ textAlign: 'center' }}
                  />
                </ListItem>
              </List>
            )}
          </Box>
        </Slide>
      </Popover>
    </Box>
  );
};

export default MiniCart;
