import React from "react"

export default props => (
  <div style={{ width: "250px", marginBottom: "2em" }}>
    <img src="http://placehold.it/250" />
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
    <div style={{ textAlign: "center", color: "lightgreen" }}>
      You save {props.savings}
    </div>
  </div>
)
