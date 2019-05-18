import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return(
    <div className="container">
      <section>
        <div class="banner">
          <h1>
            Energy-efficient products at your fingertips.
          </h1>
        </div>
        <h3>
          Mobi is a smart energy efficiency subscription with flexible options.
        </h3>
      </section>
      <section class="explore-products">
        <h2>
          Featured Products
        </h2>
        <section class="products">
          <span class="product">
            <Link to=""><img src="/assets/images/Nest HD.jpg"></img></Link>
            <p>
              <span>Thermostat - $45/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
          <span class="product">
            <Link to=""><img src="/assets/images/lifx_a19.jpg"></img></Link>
            <p>
              <span>Electric stove - $82/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
          <span class="product">
            <Link to=""><img src="/assets/images/smappee-energy-monitor.jpg"></img></Link>
            <p>
              <span>Dishwasher - $65/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
        </section>
      </section>
      <img src="/assets/images/banner1.jpg"></img>
      <section class="how-it-works">
        <h2>
          How It Works
        </h2>
        <section class="steps">
          <span class="step">
            <img src="/assets/images/HIW1.png"></img>
            <p>
              <span>Browse Selection</span>
            </p>
            <p>
              We’ve curated a select list of energy-efficient products to make finding the right appliance for you that much easier.
            </p>
          </span>
          <span class="step">
            <img src="/assets/images/HIW2.png"></img>
            <p>
              <span>Choose Appliances</span>
            </p>
            <p>
              Choose the appliances that you like and add them to your cart.
            </p>
          </span>
          <span class="step">
            <img src="/assets/images/HIW3.png"></img>
            <p>
              <span>Installation</span>
            </p>
            <p>
              We’ll come to your house and install the appliances for you and teach you how to use them.
            </p>
          </span>
        </section>
      </section>
      <section class="img">
        <img src="/assets/images/banner2.jpg"></img>
      </section>
      <section class="how-it-works">
        <h2>
          Why Mobi?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Officiis iure quibusdam, quis tempore ut velit fugiat?
           Exercitationem impedit, illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam blanditiis aliquam tempora autem error doloribus sit ducimus velit nobis neque aliquid.
           Laborum soluta quidem reprehenderit molestias earum!
           Architecto reiciendis sint voluptates.
        </p>
      </section>
      <section className="testimonials">
        <span className="testimonial">
          <img className="testimonial-img" src="https://files.slack.com/files-pri/TJTC9UDME-FJT4SB2LU/headshot_guy.jpg"></img>
          <span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora accusamus quam et consequatur!
               Soluta eligendi delectus quibusdam quasi, amet deserunt?"
            </p>
            <p>
              - Jake, 39, New York, NY
            </p>
          </span>
        </span>
        <span className="testimonial">
          <img className="testimonial-img" src="https://files.slack.com/files-pri/TJTC9UDME-FJTLA8Y2C/headshot_girl.jpeg"></img>
          <span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora accusamus quam et consequatur!
               Soluta eligendi delectus quibusdam quasi, amet deserunt?"
            </p>
            <p>
              - Maggie, 43, Detroit, MI
            </p>
          </span>
        </span>
      </section>
    </div>
  );
};

export default Home;
