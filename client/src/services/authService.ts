import { AxiosResponse } from 'axios';
import API from './api';
import { LoginInterface, RegisterInterface} from '../store/auth/types';

export const authService = {
  register: async (data: RegisterInterface) => {
    console.log('data', data)
    try {
      const res: AxiosResponse = await API.post('/users/register', data);
      return res;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  },

  login: async (data: LoginInterface) => {
    try {
      const res: AxiosResponse = await API.post('/auth/login', data);
      API.defaults.headers.common['Authorization'] = `Bearer ${res.data.user.token}`;
      return res;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  },

  logout: () => {

  },
};

// const setHeadersAndStorage = ({ user, token }): void => {
//   API.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   localStorage.setItem('user', JSON.stringify(user))
//   localStorage.setItem('token', token)
// }