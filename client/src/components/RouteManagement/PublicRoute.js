import React from "react";
import { Route, Redirect } from "react-router-dom";

import { WEB_URL } from "../../configs";

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = JSON.parse(localStorage.getItem("User"))
    ? JSON.parse(localStorage.getItem("User")).token
    : false;

  return (
    <Route
      render={(routeProps) => {
        return isAuth ? (
          <Redirect to={WEB_URL.HOMEPAGE} />
        ) : (
          <Component {...rest} {...routeProps} />
        );
      }}
    />
  );
};

export default PublicRoute;
