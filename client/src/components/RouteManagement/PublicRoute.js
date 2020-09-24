import React from "react";
import { Route, Redirect } from "react-router-dom";

import { WEB_URL } from "../../configs";
import { Navbar } from "../../containers";

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = localStorage.getItem("token");

  return (
    <Route
      render={(routeProps) => {
        return isAuth ? (
          <Redirect to={WEB_URL.HOMEPAGE} />
        ) : (
          [<Navbar key={0} />, <Component {...rest} {...routeProps} key={1} />]
        );
      }}
    />
  );
};

export default PublicRoute;
