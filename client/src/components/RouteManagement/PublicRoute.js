import React from "react";
import { Route, Redirect } from "react-router-dom";

import { WEB_URL } from "../../configs";

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <Route
      render={(routeProps) => {
        return user ? (
          <Redirect to={WEB_URL.HOMEPAGE} />
        ) : (
          <Component {...rest} {...routeProps} />
        );
      }}
    />
  );
};

export default PublicRoute;
