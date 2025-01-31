import React from "react";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  const product = {
    name: "1-layered key-chain",
    price: "$24.99",
    image: "../../../public/Home/key.avif",
  };

  return (
    <section className={styles.featured}>
      <h2>Featured Products</h2>
      <div className={styles.card}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
