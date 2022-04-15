import { Box } from '@mui/material';
import React from 'react';

const HeroBanner = () => {
  const heroBannerURL = '/herobanner/banner.jpg';

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${heroBannerURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'border-box',
        minHeight: '100vh',
      }}
    ></Box>
  );
};

export default HeroBanner;
