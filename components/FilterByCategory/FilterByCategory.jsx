import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { Remove, Add, FilterList } from '@mui/icons-material';
import StyledPriceSlider from './elements/StyledPriceSlider';
import CategoryButtonTag from './elements/CategoryButtonTag/CategoryButtonTag';
import {
  MAXIMUM_PRICE_BOUNDARY,
  MINIMUM_PRICE_BOUNDARY,
  PRICE_BOUNDARY,
  PRICE_STEP,
} from '../../constants/price';
import { range } from '../../utils/helper';

const FilterByCategory = ({
  filterByList = [],
  toggleFilterByHandler,
  toggleTagFilterHandler,
}) => {
  const [priceBoundary, setPriceBoundary] = useState([
    MINIMUM_PRICE_BOUNDARY,
    MAXIMUM_PRICE_BOUNDARY,
  ]);

  const priceChangeHandler = (e, value) => {
    setPriceBoundary(value);
    const queryKey = PRICE;
    const queryValue = value.some((e, i) => e !== PRICE_BOUNDARY[i])
      ? value.join('-')
      : '';

    // filterSearch({ queryKey, queryValue });
  };

  return (
    <Box sx={{ position: 'sticky', top: 10 }}>
      <List
        sx={{
          '& .MuiListItemButton-root:hover': {
            color: 'primary.main',
            bgcolor: 'grey.400',
          },
          '& .Mui-selected': {
            bgcolor: 'secondary.light',
          },
          '& .Mui-selected:hover': {
            bgcolor: '#D9D9D9',
          },
          '& 	.MuiListItemText-primary': {
            fontWeight: 'bold',
          },
        }}
      >
        <ListItem>
          <ListItemIcon>
            <FilterList />
          </ListItemIcon>
          <ListItemText primary="Filtering" />
        </ListItem>
        <ListItem>
          <Box sx={{ display: 'flex', flexFlow: 'column', flex: 1 }}>
            <List>
              <ListItemText primary="Price Boundary" />

              <ListItem>
                <StyledPriceSlider
                  min={MINIMUM_PRICE_BOUNDARY}
                  max={MAXIMUM_PRICE_BOUNDARY}
                  step={PRICE_STEP}
                  value={priceBoundary}
                  // defaultValue={priceBoundary}
                  valueLabelDisplay="auto"
                  onChange={priceChangeHandler}
                  marks={range(
                    MINIMUM_PRICE_BOUNDARY,
                    MAXIMUM_PRICE_BOUNDARY,
                    PRICE_STEP
                  ).map((e) => ({
                    value: e,
                    label: (e / Math.pow(10, 6)).toString().concat('M'),
                  }))}
                />
              </ListItem>
            </List>
          </Box>
        </ListItem>
        <Divider />
        {filterByList.map((filterBy, index) => (
          <div key={filterBy.category}>
            <ListItemButton
              selected={filterBy.filteredList.length > 0}
              onClick={() => toggleFilterByHandler(filterBy)}
            >
              <ListItemText
                primary={`${filterBy.category} ${
                  filterBy.filteredList.length > 0
                    ? `(${filterBy.filteredList.length})`
                    : ''
                } `}
              />
              {filterBy.isFiltered ? <Remove /> : <Add />}
            </ListItemButton>
            <Collapse in={filterBy.isFiltered} timeout="auto">
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'wrap',
                  pt: 2,
                  pb: 2,
                }}
              >
                {filterBy.categorizedList.map((tag) => (
                  <CategoryButtonTag
                    category={filterBy.category}
                    key={tag}
                    tag={tag}
                    clicked={filterBy.filteredList.includes(tag)}
                    toggleTagFilterHandler={() =>
                      toggleTagFilterHandler(filterBy.category, tag)
                    }
                  />
                ))}
              </Box>
            </Collapse>
            {index < filterByList.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default FilterByCategory;
