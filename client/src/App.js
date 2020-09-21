import React from "react";
import { Switch } from "react-router-dom";
import _ from "lodash";

import { PrivateRoute, PublicRoute } from "./components";
import routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Switch>
        {_.map(routes, (route, idx) => {
          const user_name = localStorage.getItem("user_name");
          console.log(route);
          return route.isProtected ? (
            <PrivateRoute key={idx} {...route} local_user_name={user_name} />
          ) : (
            <PublicRoute key={idx} {...route} />
          );
        })}
      </Switch>
    </div>
  );
};

export default App;
