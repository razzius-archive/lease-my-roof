import React from "react"

export default () => (
  <div style={{ maxWidth: "450px", margin: "auto" }}>
    <img
      src="http://placehold.it/400x400"
      style={{ margin: "auto", display: "block" }}
    />
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ display: "inline" }}>Product</h1>
      <span
        class="button"
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
