import React from "react"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"

const ProductRow = props => (
  <div
    style={{
      display: "flex",
      maxWidth: "800px",
      margin: "auto",
      justifyContent: "space-around",
      paddingBottom: "2em"
    }}
  >
    {props.children}
  </div>
)

export default props => (
  <div>
    <h1
      style={{
        background: "#52ab99",
        color: "white",
        height: "140px",
        paddingTop: "110px"
      }}
    >
      Products
    </h1>

    <ProductRow>
      <ProductCard
        addToCart={props.addToCart}
        name="Engage Energy Monitor"
        price="$10"
        savings="$15"
        imgUrl="/assets/images/engage.jpg"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Sense Monitor"
        price="$20"
        savings="$15"
        imgUrl="/assets/images/sense_monitor_2.jpg"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Smappie Monitor"
        price="$30"
        savings="$15"
        imgUrl="/assets/images/smappee-energy-monitor.jpg"
      />
    </ProductRow>
    <ProductRow>
      <ProductCard
        addToCart={props.addToCart}
        name="Solar Array"
        price="$55"
        savings="$25"
        imgUrl="https://mobileimages.lowes.com/product/converted/855172/855172003676.jpg"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Garage wind turbine"
        price="$20"
        savings="$15"
        imgUrl="https://res.cloudinary.com/engineering-com/image/upload/w_640,h_440,c_limit,q_auto,f_auto/256px-Small_wind_turbine_on_roof_mgav9o.jpg"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Garage wind turbine"
        price="$20"
        savings="$15"
        imgUrl="https://i.pinimg.com/originals/1b/49/ca/1b49ca8f226c6f75cbc9c6c9603b1f11.jpg"
      />
    </ProductRow>
  </div>
)
