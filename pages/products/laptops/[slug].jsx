import React from 'react';
import LaptopView from '../../../components/LaptopView/LaptopView';
import Layout from '../../../components/Layout/Layout';
import db from '../../../utils/db/db';
import Product from '../../../models/Product';
import { Container } from '@mui/material';

const Laptop = ({ item }) => {
  return (
    <Layout title={item.name} description={item.name}>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <LaptopView item={item} />
      </Container>
    </Layout>
  );
};

export default Laptop;

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  await db.connect();
  const item = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      item: db.convertMongoDocToObject(item),
    },
  };
}
