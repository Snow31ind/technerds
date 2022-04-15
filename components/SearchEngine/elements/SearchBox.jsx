import { styled } from '@mui/material';
import React from 'react';

const SearchBox = styled('div')(({ theme, open }) => ({
  position: 'relative',
  display: 'inline-flex',
  backgroundColor: theme.palette.grey[300],
  borderRadius: 20,
  width: '100%',
  '&:hover': {
    borderStyles: 'solid',
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

export default SearchBox;
