import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import { WEB_URL } from "../../configs";
import { Navbar } from "../../containers";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = JSON.parse(localStorage.getItem("User"));
  const history = useHistory();

  return (
    <Route
      render={(routeProps) => {
        return isAuth ? (
          [
            <Navbar history={history} key={0} />,
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
