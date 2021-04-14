import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import { NavMenu } from "./components/NavMenu";

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
