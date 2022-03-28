import { AxiosResponse } from 'axios';
import API from './api';
import { LoginInterface, RegisterInterface } from '../store/auth/types';
import { UpdateUser } from "../store/user/types";

const authService = {
  _appStorageName: 'CHAT_APP_STORAGE',

  register: async (data: RegisterInterface) => {
    try {
      const res: AxiosResponse = await API.post('/users/register', data);
      const user = res.data.user;
      setHeadersAndStorage(user);
      return res;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  },

  login: async (data: LoginInterface) => {
    try {
      const res: AxiosResponse = await API.post('/auth/login', data);
      const user = res.data.user;
      setHeadersAndStorage(user);
      return res;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers.common['Authorization'] = ``;
    localStorage.removeItem(`${authService._appStorageName}_user`);
    localStorage.removeItem(`${authService._appStorageName}_token`);
  },

  updateProfile: async (data: UpdateUser) => {
    try {
      const res: AxiosResponse = await API.post('/users/update', data);
      console.log(res);
      // const user = res.data.user;
      //  localStorage.setItem(`${authService._appStorageName}_user`, JSON.stringify(user));
      // setHeadersAndStorage(user);
      return res;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  },
};

const setHeadersAndStorage = (user: any) => {
  console.log('user', user)
  const { token  } = user;
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem(`${authService._appStorageName}_user`, JSON.stringify(user));
  localStorage.setItem(`${authService._appStorageName}_token`, token);
};

export default authService;