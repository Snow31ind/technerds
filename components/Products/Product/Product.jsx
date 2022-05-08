import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Fade,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import styles from './Product.module.css';
import { formatPriceToVND, getDiscountPercent } from '../../../utils/helper';
import Laptop from './Laptop/Laptop';

const Product = (props) => {
  const {
    product: { category },
  } = props;

  if (category === 'laptop') {
    return <Laptop {...props} />;
  }
};

export default Product;
