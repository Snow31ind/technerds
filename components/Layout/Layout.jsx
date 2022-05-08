import { Box } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import DrawerHeader from './elements/DrawerHeader';

const Layout = ({ children, title, description }) => {
  const router = useRouter();
  const isHomepage = router.pathname === '/';

  return (
    <Box>
      <Head>
        <title>{title ? `${title}` : 'TechNerds'}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/logo/logo.png" />
      </Head>

      <Navbar />
      {!isHomepage && <DrawerHeader />}

      <Box component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Box>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Box>
  );
};

export default Layout;
