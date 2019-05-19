import React from "react"
import { Nav } from "./components"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Logo } from "./components"
import { Browse, Cart, Home, NoMatch, Quotes, User, Product } from "./pages"
import "./App.css"

// splash page
class App extends React.Component {
  state = {
    cart: [
      // uncomment to have a starting shopping cart
      { name: "Product 1", price: "$100", savings: "$80" },
      { name: "Product 1", price: "$100", savings: "$80" }
    ]
  }

  addToCart = product => {
    this.setState({ cart: this.state.cart.concat(product) })
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/quotes" component={Quotes} />
          <Route
            exact
            path="/browse"
            render={props => (
              <Browse addToCart={this.addToCart} cart={this.state.cart} />
            )}
          />
          <Route
            path="/products/:id"
            render={props => <Product addToCart={this.addToCart} />}
          />
          <Route
            render={props => <Cart cart={this.state.cart} />}
            exact
            path="/cart"
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
