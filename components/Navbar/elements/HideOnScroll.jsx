import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} in={!trigger} direction="down">
      {children}
    </Slide>
  );
};

export default HideOnScroll;
