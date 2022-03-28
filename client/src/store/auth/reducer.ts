import { AuthAction, AUTH_TYPES, LoginResponse } from './types';
import authService from '../../services/authService';


export interface AuthState {
  user: null | LoginResponse;
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: boolean;
};

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem(`${authService._appStorageName}_user`) || '{}'),
  token: localStorage.getItem(`${authService._appStorageName}_token`) || '',
  isLoggedIn: !!localStorage.getItem(`${authService._appStorageName}_user`),
  isLoading: false,
  error: false,
};

//  reducer's helpers functions
const authStart = (state: AuthState, action: AuthAction) => {
  return {
    ...state,
    ...{
      isLoading: true,
      error: false,
    }
  }
};

const authSuccess = (state: AuthState, action: AuthAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: false,
      isLoggedIn: true,
      user: action.payload,
      token: action.payload?.token,
    }
  }
};

const registerSuccess = (state: AuthState, action: AuthAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: false,
    }
  }
};

const authError = (state: AuthState, action: AuthAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: true,
    }
  }
};

const logout = (state: AuthState, action: AuthAction) => {
  return {
    ...state,
    ...initialState,
  }
};

export const authReducer = (state = initialState, action: AuthAction) => {
  const { type } = action;
  
  switch (type) {
    case AUTH_TYPES.AUTH_START: return authStart(state, action);
    case AUTH_TYPES.AUTH_ERROR: return authError(state, action);
    case AUTH_TYPES.LOGIN_SUCCESS: return authSuccess(state, action);
    case AUTH_TYPES.REGISTER_SUCCESS: return registerSuccess(state, action);
    case AUTH_TYPES.LOGOUT: return logout(state, action);
    default: return state;
  }
};