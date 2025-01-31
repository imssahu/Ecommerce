import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Discover Unique Keychains</h1>
        <p>
          Express yourself with our carefully curated collection of designer
          keychains.
        </p>
        <button className={styles.shopNow}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
