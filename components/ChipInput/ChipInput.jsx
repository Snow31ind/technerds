import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
  Radio,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import FilterChip from './elements/FilterChip/FilterChip';
import { Sort } from '@mui/icons-material';
import { SORT } from '../../constants/productKeys';

const orderFilters = [
  {
    value: 'featured',
    label: 'Featured',
  },
  {
    value: 'lowest',
    label: 'Low to high',
  },
  {
    value: 'highest',
    label: 'High to low',
  },

  {
    value: 'newest',
    label: 'Newest',
  },
];

const ChipInput = ({
  query,
  toggleTagFilterHandler,
  filterByList = [],
  sort = '',
  countProducts,
}) => {
  const { control } = useForm();

  const sortChangeHandler = (e) => {
    const queryKey = SORT;
    const queryValue = e.target.value !== 'featured' ? e.target.value : '';

    // filterSearch({ queryKey, queryValue });
  };

  return (
    <Box sx={{ flex: 1 }}>
      {query && query != 'all' && (
        <Typography>{`Search for ${query}`}</Typography>
      )}
      {filterByList.some((filterBy) => filterBy.filteredList.length > 0) && (
        <Box
          sx={{
            p: 5,
            backgroundColor: '#d9e3f0',
            borderRadius: 3,
          }}
        >
          <Typography>
            {countProducts} items satisfied with your choices.
          </Typography>
          <Controller
            name="autocomplete-controller"
            control={control}
            render={({ field }) => (
              <Autocomplete
                readOnly
                freeSolo
                multiple
                fullWidth
                id="autocomplete-controller"
                value={tags}
                options={tags}
                getOptionLabel={(option) => option.tag}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <FilterChip
                      key={index}
                      category={option.category}
                      tag={option.tag}
                      toggleTagFilterHandler={toggleTagFilterHandler}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label="Filtering"
                      variant="standard"
                    />
                  );
                }}
              />
            )}
          ></Controller>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Sort fontSize="medium" />
          <Typography sx={{ ml: 1 }}>Sort by</Typography>
          <FormControl id="radio-group">
            <RadioGroup
              aria-labelledby="radio-group"
              row
              value={sort}
              onChange={sortChangeHandler}
              sx={{ ml: 5 }}
            >
              {orderFilters.map((orderFilter) => (
                <FormControlLabel
                  key={orderFilter.label}
                  {...orderFilter}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Typography>{`${countProducts} items`}</Typography>
      </Box>
    </Box>
  );
};

export default ChipInput;
