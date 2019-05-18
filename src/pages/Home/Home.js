import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return(
    <div className="container">
      <section>
        <h1>
          Energy-efficient products at your fingertips.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Officiis iure quibusdam, quis tempore ut velit fugiat?
           Exercitationem impedit, illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam blanditiis aliquam tempora autem error doloribus sit ducimus velit nobis neque aliquid.
           Laborum soluta quidem reprehenderit molestias earum!
           Architecto reiciendis sint voluptates.
        </p>
      </section>
      <section class="explore-products">
        <h2>
          Explore Products
        </h2>
        <section class="products">
          <span class="product">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Refrigerator</span>
              <span>$45/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
          <span class="product">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Electric stove</span>
              <span>$82/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
          <span class="product">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Dishwasher</span>
              <span>$65/month</span>
            </p>
            <p>
              Estimated $90/year savings
            </p>
          </span>
        </section>
      </section>
      <section class="img">
        <a href="https://placeholder.com"><img src="https:/via.placeholder.com/1000x250"></img></a>
      </section>
      <section class="how-it-works">
        <h2>
          How It Works
        </h2>
        <section class="steps">
          <span class="step">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Lorem ipsum dolor</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Officiis iure quibusdam, quis tempore ut velit fugiat?
               Exercitationem impedit, illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam blanditiis aliquam tempora autem error doloribus sit ducimus velit nobis neque aliquid.
               Laborum soluta quidem reprehenderit molestias earum!
               Architecto reiciendis sint voluptates.
            </p>
          </span>
          <span class="step">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Lorem ipsum dolor</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Officiis iure quibusdam, quis tempore ut velit fugiat?
               Exercitationem impedit, illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam blanditiis aliquam tempora autem error doloribus sit ducimus velit nobis neque aliquid.
               Laborum soluta quidem reprehenderit molestias earum!
               Architecto reiciendis sint voluptates.
            </p>
          </span>
          <span class="step">
            <a href="https://placeholder.com"><img src="https:/via.placeholder.com/250"></img></a>
            <p>
              <span>Lorem ipsum dolor</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Officiis iure quibusdam, quis tempore ut velit fugiat?
               Exercitationem impedit, illum nam quae perferendis nesciunt dolores sunt ad dignissimos quam blanditiis aliquam tempora autem error doloribus sit ducimus velit nobis neque aliquid.
               Laborum soluta quidem reprehenderit molestias earum!
               Architecto reiciendis sint voluptates.
            </p>
          </span>
        </section>
      </section>
      <section class="img">
        <a href="https://placeholder.com"><img src="https:/via.placeholder.com/1000x250"></img></a>
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
