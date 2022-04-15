import { Grid } from '@mui/material';
import React from 'react';
import { BREAK_ITEM_INDEX } from '../../constants/displayConfig';
import Product from './Product/Product';

const Products = ({ products = [], addToCartHandler, saveItemHandler }) => {
  return (
    <React.Fragment>
      {products.map((product, index) => (
        <Grid
          item
          // sm={12}
          xs={12}
          md={6}
          lg={index % BREAK_ITEM_INDEX > 1 ? 4 : 6}
          xl={index % BREAK_ITEM_INDEX > 2 ? 3 : 4}
          // xl={6}
          key={product.name}
        >
          <Product
            // saved={favs.includes(product._id)}
            product={product}
            addToCartHandler={addToCartHandler}
            saveItemHandler={saveItemHandler}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Products;
