import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { StoreState } from "../../store/rootReducer";

type ProtectedRouteProps = {
  component: JSX.Element;
};

const ProtectedRoute = ({ component }: ProtectedRouteProps): JSX.Element => {
  const isLoggedIn = useSelector((state: StoreState) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return component;
  } else {
    return <Navigate to='/login' />
  }

};

export default ProtectedRoute;