import { Search } from '@mui/icons-material';
import React from 'react';
import SearchBox from './elements/SearchBox';
import SearchIconWrapper from './elements/SearchIconWrapper';
import StyledInputBase from './elements/StyledInputBase';

const SearchEngine = () => {
  return (
    <SearchBox>
      <form>
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
        <StyledInputBase />
      </form>
    </SearchBox>
  );
};

export default SearchEngine;
