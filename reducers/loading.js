import { END_LOADING, START_LOADING } from '../constants/actionTypes';

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
