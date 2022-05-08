import React, { useRef } from 'react';
import { useSnackbar } from 'notistack';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import {
  Devices as DevicesIcon,
  Home as HomeIcon,
  Laptop as LaptopIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';
import NextImage from 'next/image';
import NextLink from 'next/link';
import styles from './LaptopView.module.css';
import { formatPriceToVND, getDiscountPercent } from '../../utils/helper';

const LaptopView = ({ item }) => {
  // const { dispatch } = useContext(Store);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const addToCartHandler = async () => {
    dispatch({ type: 'ADD_TO_CART', payload: item._id });

    const msg = `${capitalize(item.category)} ${item.name} added to cart`;
    enqueueSnackbar(msg, { variant: 'success' });
    closeSnackbar();
  };

  const processor = item.processorAndMemory.processorName
    .concat(' ')
    .concat(item.processorAndMemory.processorVariant);
  const ram = 'RAM '.concat(item.processorAndMemory.ram).concat(' GB');

  const ssd =
    item.processorAndMemory.ssd === 'Available'
      ? item.processorAndMemory.ssdCapacity.toString().concat(' GB')
      : item.processorAndMemory.ssd;
  const battery =
    item.general.batteryBackup > 0
      ? item.general.batteryBackup.toString().concat(' hours')
      : 'Unknown';
  const graphicProcessor = item.processorAndMemory.graphicProcessor;
  const screen = item.displayAndAudio.screenSize
    .substring(
      item.displayAndAudio.screenSize.indexOf('(') + 1,
      item.displayAndAudio.screenSize.lastIndexOf(')')
    )
    .toLowerCase()
    .replace(' ', '')
    .replace('inch', '"');

  const ports = item.portAndSlot.hdmiPort
    .concat(' ')
    .concat(item.portAndSlot.usbPort);

  const containerRef = useRef(null);

  const price = `${formatPriceToVND(item.price)} VND`;
  const oldPrice = `${formatPriceToVND(item.oldPrice)} VND`;
  const discount = `${getDiscountPercent(item.oldPrice, item.price)}%`;
  const name = item.name;
  const image = item.images[0];

  if (!item) {
    return <div>item not found</div>;
  }

  const properties = [
    [
      {
        icon: '/items/chip.png',
        label: 'Central Processing Unit (CPU)',
        value: processor,
      },
      {
        icon: '/items/ram.png',
        label: 'Random Access Memory (RAM)',
        value: ram,
      },
    ],
    [
      {
        icon: '/items/monitor.png',
        label: 'Monitor Size',
        value: screen,
      },
      {
        icon: '/items/gpu.png',
        label: 'Graphic Processing Unit (GPU)',
        value: graphicProcessor,
      },
    ],
    [
      {
        icon: '/items/storage.png',
        label: 'SSD Storage Capacity',
        value: ssd,
      },
      {
        icon: '/items/battery.png',
        label: 'Battery',
        value: battery,
      },
    ],
    [
      {
        icon: '/items/port.png',
        label: 'Ports',
        value: ports,
      },
    ],
  ];

  return (
    <Grid container spacing={5} ref={containerRef}>
      {/* Breadcrums */}
      <Grid item xs={12}>
        <Box>
          <Breadcrumbs separator={<NavigateNextIcon />}>
            <NextLink href="/" passHref>
              <Link underline="hover" color="inherit" className={styles.link}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Homepage
              </Link>
            </NextLink>

            <NextLink href="/" passHref>
              <Link underline="hover" color="inherit" className={styles.link}>
                <DevicesIcon sx={{ mr: 0.5 }} />
                Laptop
              </Link>
            </NextLink>
            <NextLink href={`/items/${item.slug}`} passHref>
              <Link underline="hover" color="inherit" className={styles.link}>
                <LaptopIcon sx={{ mr: 0.5 }} color="inherit" />
                <Typography color="text.primary" fontWeight="bold">
                  {name}
                </Typography>
              </Link>
            </NextLink>
          </Breadcrumbs>
        </Box>
      </Grid>

      {/* item Information Display */}
      <Grid item container md={6} xs={12} spacing={5}>
        <Grid item xs={12}>
          <Card className={styles.card}>
            <CardContent>
              <Box className={styles.flex}>
                <NextImage
                  component="img"
                  src={image}
                  alt={name}
                  width="200%"
                  height="200%"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={styles.card}>
            <CardContent>
              {properties.map((property, index) => (
                <Box key={index}>
                  <Stack direction="row">
                    {property.map((e) => (
                      <Box key={e.label} className={styles.property}>
                        <NextImage src={e.icon} width={20} height={20} />
                        <Box className={styles.text}>
                          <Typography className={styles.label}>
                            {e.label}
                          </Typography>
                          <Typography>{e.value}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                  {index < properties.length - 1 && <Divider />}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item container md={6} xs={12}>
        <Grid item xs={12}>
          <Card className={styles.card} sx={{ position: 'sticky', top: 10 }}>
            <CardContent>
              <Typography className={styles.name}>{item.name}</Typography>
              <Typography className={styles.price}>{price}</Typography>
              <Typography display="inline" className={styles.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography display="inline" className={styles.discount}>
                {' '}
                {discount}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={addToCartHandler}
                variant="contained"
                fullWidth
                color="secondary"
              >
                ADD TO CART
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LaptopView;
