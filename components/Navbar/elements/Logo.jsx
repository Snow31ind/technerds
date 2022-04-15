import { Box, Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
const Logo = () => {
  const logoURL = '/logo/logo.png';

  return (
    <Box>
      <NextLink href="/" passHref>
        <Link>
          <NextImage
            src={logoURL}
            width="110%"
            height="60%"
            layout="fixed"
            priority
          />
        </Link>
      </NextLink>
    </Box>
  );
};

export default Logo;
