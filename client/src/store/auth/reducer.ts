import { authAction, AUTH_TYPES, UserResponse } from './types';


export interface AuthState {
  user: null | UserResponse;
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: boolean;
};

const initialState: AuthState = {
  user: null,
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: false,
};

//  reducer's helpers functions
const authStart = (state: AuthState, action: authAction) => {
  return {
    ...state,
    ...{
      isLoading: true,
      error: false,
    }
  }
};

const authSuccess = (state: AuthState, action: authAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: false,
      user: action.payload,
      token: action.payload?.token,
    }
  }
};

const registerSuccess = (state: AuthState, action: authAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: false,
    }
  }
};

const authError = (state: AuthState, action: authAction) => {
  return {
    ...state,
    ...{
      isLoading: false,
      error: true,
    }
  }
};

export const authReducer = (state = initialState, action: authAction) => {
  const { type } = action;
  
  switch (type) {
    case AUTH_TYPES.AUTH_START: return authStart(state, action);
    case AUTH_TYPES.AUTH_ERROR: return authError(state, action);
    case AUTH_TYPES.LOGIN_SUCCESS: return authSuccess(state, action);
    case AUTH_TYPES.REGISTER_SUCCESS: return registerSuccess(state, action);
    default: return state;
  }
};