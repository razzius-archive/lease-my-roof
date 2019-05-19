import React from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import "./style.css"

const Nav = ({ cart }) => {
  return (
    <nav>
      <Link id="how-it-works" to="/">
        How It Works
      </Link>
      <Link id="browse" to="/browse">
        Products
      </Link>
      <Link id="logo" to="/">
        <Logo />
      </Link>
      <Link id="cart" to="/cart">
        Cart ({cart.length})
      </Link>
      <Link id="login" to="/login">
        Sign In
      </Link>
    </nav>
  )
}

export default Nav
