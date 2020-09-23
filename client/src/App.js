import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import { Signup, Posts, HomePage, CreatePost } from "./containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Posts} />
        <Route path="/create" component={CreatePost} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
