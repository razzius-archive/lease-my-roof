import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Logo from "./components"
import { Browse, Cart, Home, NoMatch, Quotes, User, Product } from "./pages"
import "./App.css"

// splash page
class App extends React.Component {
  state = {
    cart: []
  }

  addToCart = product => {
    this.setState({ cart: this.state.cart.concat(product) })
  }

  render() {
    return (
      <Router>
        <Logo />
        <h1>
          The cart has {this.state.cart.length} things.
          <Link to="/cart">Checkout</Link>
        </h1>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/quotes" component={Quotes} />
          <Route
            exact
            path="/browse"
            render={props => <Browse addToCart={this.addToCart} />}
          />
          <Route
            path="/products/:id"
            render={props => <Product addToCart={this.addToCart} />}
          />
          <Route exact path="/cart" component={Cart} cart={this.state.cart} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
