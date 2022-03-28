import { AxiosResponse } from 'axios';
import API from './api';
import { UpdateUser } from "../store/user/types";

const authService = {
  updateProfile: async (data: any) => {
    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    };
    try {
      console.log('data', data)
      const res: AxiosResponse = await API.post('/users/update', data, headers);
      console.log(res);
      // const user = res.data.user;
      //  localStorage.setItem(`${authService._appStorageName}_user`, JSON.stringify(user));
      // setHeadersAndStorage(user);
      return res;
    } catch (err) {
      console.log('EEERRROOORRR', err);
      throw err;
    }
  },
};

export default authService;