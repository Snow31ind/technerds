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

const Product = ({ product, saveItemHandler, addToCartHandler }) => {
  // const idx = product.images.findIndex((image) => checkImageExistence(image));
  // const { saved } = props;

  const processor = product.processorAndMemory.processorName
    .concat(' ')
    .concat(product.processorAndMemory.processorVariant);

  const ram = 'RAM '.concat(product.processorAndMemory.ram).concat(' GB');

  const ssd =
    product.processorAndMemory.ssd === 'Available'
      ? 'SSD '.concat(product.processorAndMemory.ssdCapacity).concat(' GB')
      : null;

  const graphicProcessor = product.processorAndMemory.graphicProcessor;

  const weight = product.dimensions.weight.toString().concat(' kg');

  const screen = product.displayAndAudio.screenSize
    .substring(
      product.displayAndAudio.screenSize.indexOf('(') + 1,
      product.displayAndAudio.screenSize.lastIndexOf(')')
    )
    .toLowerCase()
    .replace(' ', '')
    .replace('inch', '"');

  // const {
  //   state: { favs },
  // } = useContext(Store);

  const favs = [];

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Box className={styles.cardHeader}>
          <NextImage
            src={`/brands/${product.brand.toLowerCase()}.png`}
            width={60}
            height={20}
            className={styles.brand}
          />
          <IconButton
            color="error"
            onClick={() => saveItemHandler(product._id)}
            sx={{
              borderRadius: 2,
              // bgcolor: 'grey.200',
              '&:hover': {
                bgcolor: 'grey.400',
              },
            }}
          >
            {favs.includes(product._id) ? (
              <Favorite color="error" />
            ) : (
              <FavoriteBorderOutlined color="error" />
            )}
          </IconButton>
        </Box>

        <Box
          component="div"
          sx={{ display: 'flex', position: 'relative', mt: 1 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Fade in={isHovering} unmountOnExit timeout={600}>
            <Box
              position="absolute"
              top={0}
              // left={0}
              right={0}
              sx={{
                padding: 1,
                // bgcolor: 'gray',
                ...(isHovering && {
                  display: 'normal',
                  zIndex: 20,
                }),
                ...(!isHovering && {
                  display: 'none',
                }),
              }}
            >
              <IconButton
                color="error"
                onClick={() => addToCartHandler(product)}
                sx={{
                  borderRadius: 2,
                  ml: 1,
                  bgcolor: 'grey.200',
                  '&:hover': {
                    bgcolor: 'grey.400',
                  },
                }}
              >
                <ShoppingCartOutlined />
              </IconButton>
            </Box>
          </Fade>

          <Box sx={{ flex: 1 }}>
            <NextLink href={`/products/${product.slug}`} passHref>
              <CardActionArea className={styles.image}>
                <NextImage src={product.images[0]} width="170%" height="150%" />
              </CardActionArea>
            </NextLink>
          </Box>
        </Box>

        <Box className={styles.cardBody}>
          <Box className={styles.cardInfo}>
            <Typography className={styles.name}> {product.name} </Typography>{' '}
            <Typography className={styles.price}>
              {' '}
              {formatPriceToVND(product.price)}
            </Typography>
            <Typography className={styles.oldPrice}>
              {' '}
              {formatPriceToVND(product.oldPrice)} {`   `}{' '}
            </Typography>
            <Typography className={styles.discount}>
              {' '}
              {`  ${getDiscountPercent(product.oldPrice, product.price)}%`}{' '}
            </Typography>
          </Box>
          <Box className={styles.tagContainer}>
            <Box className={styles.tag}> {processor} </Box>
            <Box className={styles.tag}> {graphicProcessor} </Box>
            <Box className={styles.tag}> {ram} </Box>
            {ssd && <Box className={styles.tag}> {ssd} </Box>}
            <Box className={styles.tag}> {weight} </Box>
            <Box className={styles.tag}> {screen} </Box>
          </Box>

          <Box className={styles.cardBottom}>
            <Divider />

            <Box className={styles.cardBottomContent}>
              <Box className={styles.flex}>
                <NextImage
                  src="/items/present.png"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                <Typography className={styles.coupon}>
                  Coupons {'&'}
                  presents
                </Typography>
              </Box>
              <Box className={styles.flex}>
                <Typography className={styles.coupon}>
                  {' '}
                  {product.rating}
                </Typography>
                <NextImage
                  src="/items/star.png"
                  width={30}
                  height={30}
                  layout="fixed"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
