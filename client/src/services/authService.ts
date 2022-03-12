import { AxiosResponse } from 'axios';
import API from './api';

interface LoginInterface {
  email: string;
  password: string;
}

interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
  email: string;
  password: string;
  token: string;
  updatedAt: string;
  age?: string;
  avatar?: string;
  sex?: string;
}
interface LoginResponse {
  message: string;
  user: UserResponse;
}



const authService = {
  login: (data: LoginInterface) => {
    return API.post('/auth/login', data)
      .then((res): AxiosResponse<LoginResponse> => {
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.user.token}` 
        return res;
      })
      .catch((err: Promise<never>) => {
        console.log('err', err);
        throw err;
      })
  },

  register: (data: {}) => {

  },

  logout: () => {

  },
};

// const setHeadersAndStorage = ({ user, token }): void => {
//   API.defaults.headers['Authorization'] = `Bearer ${token}`
//   localStorage.setItem('user', JSON.stringify(user))
//   localStorage.setItem('token', token)
// }

export default authService;