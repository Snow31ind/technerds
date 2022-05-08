import { Box, Grid, List, ListItem } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import ChipInput from '../components/ChipInput/ChipInput';
import FilterByCategory from '../components/FilterByCategory/FilterByCategory';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import db from '../utils/db/db';
import Product from '../models/Product';
import { PAGE_SIZE } from '../constants/displayConfig';
import Paginate from '../components/Paginate/Paginate';
import { useRouter } from 'next/router';

export default function Home(props) {
  const {
    products,
    pages,
    countProducts,
    brandPath,
    ramPath,
    cpuPath,
    gpuPath,
    screenSizePath,
    weightPath,
    categorizedBrands,
    categorizedCPUs,
    categorizedRAMs,
    categorizedGPUs,
    categorizedScreens,
    categorizedWeights,
    scrollToFilterView,
  } = props;

  // console.log(pages);

  const router = useRouter();
  const { query } = router.query;
  return (
    <Layout>
      <Box>
        <HeroBanner />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            pt: 5,
            pl: 30,
            pr: 30,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} xl={3}>
              <FilterByCategory />
            </Grid>

            <Grid item container xs={12} xl={9}>
              <List sx={{ flex: 1 }}>
                <ListItem>
                  <Grid item>
                    <ChipInput />
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid item container spacing={2}>
                    <Products products={products} />
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid item xl={12}>
                    <Paginate count={pages} currentPage={1} />
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  // const scrollToFilterView =
  //   query && Object.keys(query).length > 0 ? true : false;

  // const isAtHomePage = true;

  const page = query.page || 1;
  const price = query.price || '';
  const brand = query.brand ? query.brand.split(',') : '';
  const ram = query.ram ? query.ram.split(',').map((e) => parseInt(e)) : '';
  const cpu = query.cpu ? query.cpu.split(',') : '';
  const gpu = query.gpu ? query.gpu.split(',') : '';
  const screenSize = query.screenSize ? query.screenSize.split(',') : '';
  const weight = query.weight
    ? query.weight.split(',').map((e) => parseFloat(e))
    : '';
  const searchQuery = query.query || '';
  const sort = query.sort || '';

  // Create filters
  const order =
    sort === 'featured'
      ? { featured: -1 }
      : sort === 'lowest'
      ? { price: 1 }
      : sort === 'highest'
      ? { price: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : { _id: -1 };

  const queryFilter =
    query && query != 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};

  const priceBoundary = price.split('-');
  const priceFilter =
    price &&
    price != 'all' &&
    (Number(priceBoundary[0]) > MINIMUM_PRICE_BOUNDARY ||
      Number(priceBoundary[1]) < MAXIMUM_PRICE_BOUNDARY)
      ? {
          price: {
            $gte: Number(priceBoundary[0]),
            $lte: Number(priceBoundary[1]),
          },
        }
      : priceBoundary[0] === priceBoundary[1] &&
        priceBoundary[0] === MINIMUM_PRICE_BOUNDARY
      ? {
          price: {
            $Lte: Number(priceBoundary[0]),
          },
        }
      : priceBoundary[0] === priceBoundary[1] &&
        priceBoundary[1] === MAXIMUM_PRICE_BOUNDARY
      ? {
          price: {
            $gte: Number(priceBoundary[1]),
          },
        }
      : {};

  const brandFilter =
    brand && brand != 'all'
      ? {
          brand: {
            $in: brand,
          },
        }
      : {};

  const ramFilter =
    ram && ram != 'all'
      ? {
          'processorAndMemory.ram': {
            $in: ram,
          },
        }
      : {};

  const cpuFilter =
    cpu && cpu != 'all'
      ? {
          'processorAndMemory.processorName': {
            $in: cpu,
          },
        }
      : {};

  const gpuFilter =
    gpu && gpu != 'all'
      ? {
          'processorAndMemory.graphicProcessor': {
            $in: gpu,
          },
        }
      : {};

  const screenSizeFilter =
    screenSize && screenSize != 'all'
      ? {
          'displayAndAudio.screenSize': {
            $in: screenSize,
          },
        }
      : {};

  const weightFilter =
    weight && weight != 'all'
      ? {
          'dimensions.weight': {
            $in: weight,
          },
        }
      : {};

  await db.connect();

  const products = await Product.find({
    ...queryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ramFilter,
    ...cpuFilter,
    ...gpuFilter,
    ...screenSizeFilter,
    ...weightFilter,
  })
    .sort(order)
    .skip(PAGE_SIZE * (page - 1))
    .limit(PAGE_SIZE)
    .lean();

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ramFilter,
    ...cpuFilter,
    ...gpuFilter,
    ...screenSizeFilter,
    ...weightFilter,
  });

  // const categorizedBrands = await Product.find({}).distinct('brand');

  // const categorizedCPUs = await Product.find({}).distinct(
  //   'processorAndMemory.processorName'
  // );
  // const categorizedRAMs = await Product.find({}).distinct(
  //   'processorAndMemory.ram'
  // );
  // const categorizedGPUs = await Product.find({}).distinct(
  //   'processorAndMemory.graphicProcessor'
  // );
  // const categorizedScreens = await Product.find({}).distinct(
  //   'displayAndAudio.screenSize'
  // );
  // const categorizedWeights = await Product.find({}).distinct(
  //   'dimensions.weight'
  // );

  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertMongoDocToObject),
      pages: Math.ceil(countProducts / PAGE_SIZE),
      // scrollToFilterView,
      // isAtHomePage,
      // brandPath: brand,
      // ramPath: ram,
      // cpuPath: cpu,
      // gpuPath: gpu,
      // screenSizePath: screenSize,
      // weightPath: weight,
      // categorizedBrands,
      // categorizedCPUs,
      // categorizedRAMs,
      // categorizedGPUs,
      // categorizedScreens,
      // categorizedWeights,
      // countProducts,
    },
  };
}

// export default dynamic(() => Promise.resolve(Home), { ssr: true });
