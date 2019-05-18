import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components";
import { Home, Browse, Cart, Login, NoMatch, Product } from "./pages";
import './App.css';

// splash page
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route path="/products/:id" component={Product} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App;
