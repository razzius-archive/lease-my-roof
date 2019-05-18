import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return(
    <div>
      <section id="user-type">
        <span id="customer">
          <Link to="/user">
            <h2>Customer</h2>
          </Link>
        </span>
        <span id="installer">
          <Link to="/user">
            <h2>Installer</h2>
          </Link>
        </span>
      </section>
      <section>
        <h1>How It Works</h1>
        <p>Lorem ipsum dolor...</p>
      </section>
    </div>
  );
};

export default Home;
