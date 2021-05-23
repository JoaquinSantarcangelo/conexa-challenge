import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return !authenticated ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRoute;
