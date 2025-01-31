import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for exclusive offers and updates.</p>
      <form className={styles.form}>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
