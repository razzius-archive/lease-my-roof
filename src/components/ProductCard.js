import React from "react"

import { Link } from "react-router-dom"
import "./ProductCard.css"

export default props => (
  <Link style={{ textDecoration: "none" }} to="products/1">
    <div style={{ position: "relative", width: "250px" }}>
      <img src="http://placehold.it/250" />
      <div
        className="button"
        style={{
          position: "absolute",
          bottom: "15px",
          right: "10px",
          background: "white",
          padding: "10px",
          cursor: "pointer",
          border: "1px solid black"
        }}
        onClick={e => {
          props.addToCart(props.name)
        }}
      >
        Add To Cart
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
    <div style={{ textAlign: "center", color: "lightgreen" }}>
      You save {props.savings}
    </div>
  </Link>
)
