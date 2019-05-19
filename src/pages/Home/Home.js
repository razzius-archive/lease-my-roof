import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Home = () => {
  return (
    <div className="container">
      <section>
        <div class="banner" style={{ height: "660px", textAlign: "center" }}>
          <h1>Energy-efficient products at your fingertips.</h1>
        </div>
        <h3>
          Mobi is a smart energy efficiency subscription with flexible options.
        </h3>
      </section>
      <section class="explore-products">
        <h2>Featured Products</h2>
        <section class="products">
          <span class="product">
            <Link to="">
              <img src="/assets/images/Nest HD.jpg" />
            </Link>
            <p>
              <span>Thermostat - $45/month</span>
            </p>
            <p>Estimated $90/year savings</p>
          </span>
          <span class="product">
            <Link to="">
              <img src="/assets/images/lifx_a19.jpg" />
            </Link>
            <p>
              <span>Electric stove - $82/month</span>
            </p>
            <p>Estimated $90/year savings</p>
          </span>
          <span class="product">
            <Link to="">
              <img src="/assets/images/smappee-energy-monitor.jpg" />
            </Link>
            <p>
              <span>Dishwasher - $65/month</span>
            </p>
            <p>Estimated $90/year savings</p>
          </span>
        </section>
      </section>
      <div style={{ position: "relative" }}>
        <img src="/assets/images/banner1.jpg" style={{ maxWidth: "100%" }} />
        <img
          style={{
            position: "absolute",
            top: "110px",
            left: "52%",
            width: "250px",
            zIndex: 1
          }}
          src="https://files.slack.com/files-pri/TJTC9UDME-FJMACM2TT/circular_animate.gif"
        />
      </div>
      <section class="how-it-works">
        <h2>How It Works</h2>
        <section class="steps">
          <span class="step">
            <img src="/assets/images/HIW1.png" />
            <h3>
              <span>Browse Selection</span>
            </h3>
            <p>
              We’ve curated a select list of energy-efficient products to make
              finding the right appliance for you that much easier.
            </p>
          </span>
          <span class="step">
            <img src="/assets/images/HIW2.png" />
            <h3>
              <span>Choose Appliances</span>
            </h3>
            <p>
              Choose the appliances that you like and add them to your cart.
            </p>
          </span>
          <span class="step">
            <img src="/assets/images/HIW3.png" />
            <h3>
              <span>Installation</span>
            </h3>
            <p>
              We’ll come to your house and install the appliances for you and
              teach you how to use them.
            </p>
          </span>
        </section>
      </section>
      <section class="img">
        <img style={{ maxWidth: "100%" }} src="/assets/images/banner2.jpg" />
      </section>
      {/* <section class="how-it-works">
        <h2>Why Mobi?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          iure quibusdam, quis tempore ut velit fugiat? Exercitationem impedit,
          illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam
          blanditiis aliquam tempora autem error doloribus sit ducimus velit
          nobis neque aliquid. Laborum soluta quidem reprehenderit molestias
          earum! Architecto reiciendis sint voluptates.
        </p>
      </section> */}
      <h2>Testimonials</h2>
      <section className="testimonials">
        <span className="testimonial">
          <img
            style={{ width: "200px", height: "200px" }}
            className="testimonial-img"
            src="https://files.slack.com/files-pri/TJTC9UDME-FJTL0EV0D/mobi_jason.png"
          />
          <span>
            <p>
              I wanted to save energy but I wasn’t sure if the energy efficient
              appliances were worth the cost. With Mobi, I could get to try out
              the appliances and find out which were the best for my household.
            </p>
            <p>- Jake, 39, New York, NY</p>
          </span>
        </span>
        <span className="testimonial">
          <img
            style={{ width: "200px", height: "200px" }}
            className="testimonial-img"
            src="https://files.slack.com/files-pri/TJTC9UDME-FJMASUKLZ/mobi_maggie.png"
          />
          <span>
            <p>
              I am saving so much money on my electricity bill with the products
              from Mobi! I get to save money and also save the environment!
            </p>
            <p>- Maggie, 43, Detroit, MI</p>
          </span>
        </span>
      </section>
    </div>
  )
}

export default Home
