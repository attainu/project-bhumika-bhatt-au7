import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import { Signup } from "./containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/" />
      </Switch>
    </div>
  );
};

export default App;
