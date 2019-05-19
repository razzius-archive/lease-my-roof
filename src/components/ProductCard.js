import React from "react"

// import { Link } from "react-router-dom"
import "./ProductCard.css"

import { withRouter } from "react-router-dom"
import { Product } from "../pages"
import { tsPropertySignature } from "@babel/types";

const ProductCard = props => (
  <div
    style={{ textDecoration: "none", cursor: "pointer" }}
    onClick={() => {
      props.history.push("products/1")
    }}
  >
    <div style={{ position: "relative", width: "250px" }}>
      <img src={props.imgUrl} style={{ maxHeight: "200px" }}/>
      <div
        className="button"
        style={{
          position: "absolute",
          bottom: "15px",
          right: "10px",
          background: "white",
          padding: "10px",
          cursor: "pointer",
          border: "1px solid black",
          zIndex: 1
        }}
        onClick={e => {
          // this stuff doesn't work so the above div has an onClick... bad for a11y
          e.cancelBubble = true
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          props.addToCart({
            name: props.name,
            price: props.price,
            savings: props.savings
          })
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
  </div>
)

export default withRouter(ProductCard)
