import { styled, Typography } from '@mui/material';

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'clicked',
})(({ theme, clicked }) => ({
  fontSize: 14,
  ...(clicked && {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  }),
  ...(!clicked && {
    color: 'black',
  }),
}));

export default StyledTypography;
