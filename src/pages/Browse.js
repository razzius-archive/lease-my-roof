import React from "react"
import ProductCard from "../components/ProductCard"

export default () => (
  <div
    style={{
      display: "flex",
      maxWidth: "700px",
      margin: "auto",
      justifyContent: "space-between"
    }}
  >
    <ProductCard name="1" />
    <ProductCard name="2" />
    <ProductCard name="3" />
  </div>
)
