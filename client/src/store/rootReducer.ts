import { combineReducers } from "redux";

//  reducers with is state's interfaces
import { AuthState, authReducer } from "./auth/reducer";
import { UserState, userReducer } from "./user/reducer";

export interface StoreState {
  auth: AuthState;
  user: UserState,
};

const rootReducer = combineReducers<StoreState>({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;