import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Logo from "./components"
import { Browse, Home, NoMatch, Quotes, User, Product } from "./pages"
import "./App.css"

// splash page
class App extends React.Component {
  state = {
    cart: []
  }

  addToCart = product => {
    this.setState({ cart: this.state.cart.concat(product) })
    console.log(product)
    console.log(this.state)
  }

  render() {
    return (
      <Router>
        <Logo />
        <h1>The cart has {this.state.cart.length}</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/quotes" component={Quotes} />
          <Route
            exact
            path="/browse"
            render={props => <Browse addToCart={this.addToCart} />}
          />
          <Route path="/products/:id" component={Product} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
