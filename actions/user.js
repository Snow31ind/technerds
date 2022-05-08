import * as api from '../api/index.js';
import { SIGNIN, SIGNOUT, SIGNUP } from '../constants/actionTypes.js';

export const signIn = (user, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(user);

    console.log(data);

    dispatch({ type: SIGNIN, payload: data });

    router.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (user, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);

    console.log(data);

    // dispatch({ type: SIGNUP, payload: data });

    // router.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signOut = (router) => async (dispatch) => {
  dispatch({ type: SIGNOUT });
  router.push('/');
};
