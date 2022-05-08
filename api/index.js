import axios from 'axios';
import { DEV_MODE_URL } from '../constants/url';

const API = axios.create({
  baseURL: DEV_MODE_URL,
});

export const signIn = (user) => API.post('/user/signin', user);

export const signUp = (user) => API.post('/user/signup', user);
