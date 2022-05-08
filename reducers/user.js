import { SIGNIN, SIGNOUT, SIGNUP } from '../constants/actionTypes';
import Cookies from 'js-cookie';

const initialState = {
  user:
    typeof window !== undefined && Cookies.get('user')
      ? JSON.parse(Cookies.get('user'))
      : null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN: {
      const user = action.payload;
      Cookies.set('user', JSON.stringify(user));
      return { ...state, user };
    }
    case SIGNUP: {
      const user = action.payload;
      Cookies.set('user', JSON.stringify(user));

      return { ...state, user };
    }
    case SIGNOUT: {
      Cookies.remove('user');
      return { ...state, user: null };
    }
    default:
      return state;
  }
};

export default reducer;
