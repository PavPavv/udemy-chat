import API from './api';

interface LoginInterface {
  email: string;
  password: string;
}

const authService = {
  login: (data: LoginInterface) => {
    return API.post('/auth/login', data)
      .then(({ data: LoginInterface }) => {
        //  API.defaults.headers['Authorization'] = `Bearer ${data.token}` 
        return data;
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