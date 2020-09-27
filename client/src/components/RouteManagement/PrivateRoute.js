import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import { WEB_URL } from "../../configs";
import { Navbar } from "../../containers";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = localStorage.getItem("token");
  const history = useHistory();

  return (
    <Route
      render={(routeProps) => {
        return isAuth ? (
          [
            <Navbar isProtected key={0} history={history} />,
            <Component {...rest} {...routeProps} key={1} />,
          ]
        ) : (
          <Redirect to={WEB_URL.AUTHENTICATION} />
        );
      }}
    />
  );
};

export default PrivateRoute;
