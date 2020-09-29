import React from "react";
import { Route, Redirect } from "react-router-dom";

import { WEB_URL } from "../../configs";

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = JSON.parse(localStorage.getItem("User").id);

  return (
    <Route
      render={(routeProps) => {
        return isAuth ? (
          <Redirect to={WEB_URL.HOMEPAGE} />
        ) : (
          <Component {...rest} {...routeProps} key={1} />
        );
      }}
    />
  );
};

export default PublicRoute;
