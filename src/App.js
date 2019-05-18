import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./components";
import { Home, NoMatch, Quotes, User } from "./pages";
import './App.css';

// splash page
function App() {
  return (
    <Router>
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/quotes" component={Quotes} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
