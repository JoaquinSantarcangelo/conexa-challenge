import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return authenticated === true ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
