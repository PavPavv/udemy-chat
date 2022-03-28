
import { Dispatch } from 'redux';
import userService from "../../services/userService";
import { USER_TYPES, UpdateUser } from './types';

//  action creators
export const startFetching = () => {
  return {
    type: USER_TYPES.START_FETCHING,
  };
};

export const updateSuccess = (data: UpdateUser) => {
  return {
    type: USER_TYPES.UPDATE_SUCCESS,
    payload: data,
  };
};

export const errorFetching = () => {
  return {
    type: USER_TYPES.ERROR_FETCHING,
  };
};

//  register thunk
export const updateUserActionThunk = (userData: any) => async (dispatch: Dispatch) => {
  dispatch(startFetching())
  console.log('userData',userData)
  try {
    const res = await userService.updateProfile(userData);
    console.log('login res',res)
    console.log('res',res)
    if (res.status === 200 && res.data) {
      console.log('registerActionThunk',res)
      const updatedUser = res.data.user.user;
      dispatch(updateSuccess(updatedUser))
    } else {
      dispatch(errorFetching())
    }
  } catch (err: any) {
    console.log('update user thunk error', err);
    dispatch(errorFetching())
  }
}