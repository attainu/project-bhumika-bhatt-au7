import React from "react";
import { Route, Switch } from "react-router-dom";
import _ from "lodash";

import { Posts, HomePage, CreatePost, Login } from "./containers";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/profile" component={Posts} />
        <Route path="/create" component={CreatePost} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
