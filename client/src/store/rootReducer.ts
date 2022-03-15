import { combineReducers } from "redux";

//  reducers with is state's interfaces
import { AuthState, authReducer } from "./auth/reducer";

export interface StoreState {
  auth: AuthState;
};

const rootReducer = combineReducers<StoreState>({
  auth: authReducer,
});

export default rootReducer;