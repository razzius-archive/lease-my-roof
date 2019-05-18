<<<<<<< HEAD
import React from "react"
import logo from "./logo.svg"
import "./App.css"
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./components";
import { Home, NoMatch, Quotes, User } from "./pages";
import './App.css';
>>>>>>> b9028310f30d1f65836c452680ecdd0fc8cbf092

// splash page
function Apps() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hi</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
=======
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
>>>>>>> b9028310f30d1f65836c452680ecdd0fc8cbf092
}

export default Ap
