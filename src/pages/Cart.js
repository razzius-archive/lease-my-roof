import React from "react"
import swal from "sweetalert"

const ProductItem = ({ name, price, savings, imgUrl }) => (
  <div style={{ clear: "both", marginBottom: "5em" }}>
    <img
      style={{ width: "80px", float: "left", marginRight: "1em" }}
      src={imgUrl}
    />
    <h3
      style={{
        display: "block",
        justifyContent: "left"
      }}
    >
      {name}
    </h3>
    {/* negative margins yikes */}
    <p style={{ float: "left", marginTop: "-20px" }}>{price} / month</p>
    <p style={{ float: "left", color: "green", marginLeft: "-80px" }}>
      Estimated savings {savings} / year
    </p>
  </div>
)

const total = cart => {
  return cart.reduce((tot, v) => tot + parseFloat(v.price.slice(1)), 0)
}
export default props => (
  <div>
    <h1
      style={{
        background: "black",
        color: "white",
        height: "140px",
        paddingTop: "110px"
      }}
    >
      Your Cart
    </h1>
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      {props.cart.length === 0 ? (
        <center>You don't have anything in your cart.</center>
      ) : null}
      {props.cart.map(ProductItem)}
      <p>Total due today: ${total(props.cart)}</p>
      <div>
        <img
          onClick={() =>
            swal({
              title: "Good job!",
              text: "We'll get in touch to arrange your installation!",
              icon: "success",
              button: "OK!"
            })
          }
          src="https://simple-membership-plugin.com/wp-content/uploads/2018/09/paypal-smart-payment-button-for-simple-membership.jpg"
        />
      </div>
    </div>
    <img
      style={{
        position: "absolute",
        right: "240px",
        width: "200px",
        top: "440px"
      }}
      src="https://files.slack.com/files-pri/TJTC9UDME-FJTLV5H9N/mobi_hack_graph2-04.png"
    />
  </div>
)
