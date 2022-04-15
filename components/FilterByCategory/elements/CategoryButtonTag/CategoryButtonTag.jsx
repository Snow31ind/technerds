import React from 'react';
import StyledButton from './element/StyledButton';
import StyledTypography from './element/StyledTypography';

export default function CategoryButtonTag(props) {
  const { tag, clicked, toggleTagFilterHandler, category } = props;
  return (
    <StyledButton
      variant="outlined"
      // color={clicked ? 'secondary' : 'warning'}
      clicked={clicked}
      onClick={toggleTagFilterHandler}
      sx={{
        mr: 1,
        mb: 1,
      }}
    >
      {category === 'RAM' ? (
        <StyledTypography clicked={clicked}>{`${tag} GB`}</StyledTypography>
      ) : category === 'Weight' ? (
        <StyledTypography clicked={clicked}>{`${tag} kg`}</StyledTypography>
      ) : (
        <StyledTypography clicked={clicked}>{tag}</StyledTypography>
      )}
    </StyledButton>
  );
}
