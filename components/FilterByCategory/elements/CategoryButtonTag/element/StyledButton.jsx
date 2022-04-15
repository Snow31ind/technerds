import { Button, styled } from '@mui/material';

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'clicked',
})(({ theme, clicked }) => ({
  padding: 5,
  textTransform: 'none',
  backgroundColor: 'white',
  ...(clicked && {
    borderColor: theme.palette.secondary.main,
    borderWidth: 3,
  }),
  ...(!clicked && {
    borderColor: 'gray',
    borderWidth: 1,
  }),
}));

export default StyledButton;
