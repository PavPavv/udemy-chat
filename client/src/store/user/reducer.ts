import { USER_TYPES, UpdateUser } from './types';
import { AuthAction } from '../auth/types';
import authService from '../../services/authService';


export interface UserState {
  user: null | UpdateUser;
  error: boolean;
};

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem(`${authService._appStorageName}_user`) || '{}'),
  error: false,
};

//  reducer's helpers functions
const startFetching = (state: UserState, action: AuthAction) => {
  return {
    ...state,
    ...{
      error: false,
    }
  }
};

const updateUserSuccess = (state: UserState, action: AuthAction) => {
  return {
    ...state,
    ...{
      user: action.payload,
      error: false,
    }
  }
};

const userError = (state: UserState, action: AuthAction) => {
  return {
    ...state,
    ...{
      error: true,
    }
  }
};

export const userReducer = (state = initialState, action: AuthAction) => {
  const { type } = action;
  
  switch (type) {
    case USER_TYPES.START_FETCHING: return startFetching(state, action);
    case USER_TYPES.ERROR_FETCHING: return userError(state, action);
    case USER_TYPES.UPDATE_SUCCESS : return updateUserSuccess(state, action);
    default: return state;
  }
};