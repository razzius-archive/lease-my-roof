import React from "react"
import { Link } from "react-router-dom"

export default props => (
  <div style={{ maxWidth: "450px", margin: "auto" }}>
    <Link
      to="/browse"
      style={{
        marginBottom: "20px",
        textDecoration: "none",
        display: "block"
      }}
    >
      <span
        className="button"
        style={{
          background: "white",
          padding: "10px",
          cursor: "pointer",
          border: "1px solid black"
        }}
      >
        Back
      </span>
    </Link>
    <img
      src="http://placehold.it/400x400"
      style={{ margin: "auto", display: "block" }}
    />
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ display: "inline" }}>Product</h1>
      <span
        onClick={props.addToCart}
        className="button"
        style={{
          height: "20px",
          background: "white",
          padding: "10px",
          marginTop: "20px",
          cursor: "pointer",
          border: "1px solid black"
        }}
      >
        Add To Cart
      </span>
    </div>
    <div style={{ textAlign: "left" }}>Cost: xxx</div>
    <div style={{ textAlign: "left" }}>Savings: xxx</div>
    <div style={{ textAlign: "left" }}>Monthly Payment: xxx</div>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </div>
)
