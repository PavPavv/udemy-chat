
import { Dispatch } from 'redux';
import { NavigateFunction } from 'react-router-dom';
import { authService } from '../../services/authService';
import { AUTH_TYPES, LoginInterface, LoginResponse, RegisterInterface } from './types';

//  action creators
export const authStart = () => {
  return {
    type: AUTH_TYPES.AUTH_START,
  };
};

export const loginSuccess = (data: LoginResponse) => {
  return {
    type: AUTH_TYPES.LOGIN_SUCCESS,
    payload: data,
  };
};

export const registerSuccess = () => {
  return {
    type: AUTH_TYPES.REGISTER_SUCCESS,
  };
};

export const authError = () => {
  return {
    type: AUTH_TYPES.AUTH_ERROR,
  };
};

//  register thunk
export const registerActionThunk = (userData: RegisterInterface, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  dispatch(authStart())

  try {
    const res = await authService.register(userData);
    console.log('login res',res)
    console.log('res',res)
    if (res.status === 201 && res.data) {
      console.log('registerActionThunk',res)
      dispatch(registerSuccess())
      navigate('/login');
    } else {
      dispatch(authError())
    }
  } catch (err: any) {
    console.log('login thunk error', err);
    dispatch(authError())
  }
}

//  login thunk
export const loginActionThunk = (params: LoginInterface, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  dispatch(authStart())

  try {
    const res = await authService.login(params);
    if (res.status === 200 && res.data && res.data.user) {
      console.log('loginActionThunk',res.data.user)
      dispatch(loginSuccess(res.data.user))
      navigate('/');
    } else {
      dispatch(authError())
    }
  } catch (err: any) {
    console.log('login thunk error', err);
    dispatch(authError())
  }
};