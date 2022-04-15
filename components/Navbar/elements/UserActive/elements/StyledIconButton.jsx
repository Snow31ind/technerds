import { styled, IconButton } from '@mui/material';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 10,
  color: 'black',
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
}));

export default StyledIconButton;
