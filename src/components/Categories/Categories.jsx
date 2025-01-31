import React from "react";
import styles from "./Categories.module.css";

const Categories = () => {
  const categories = [
    {
      name: "1 layered key-chain",
      image: "../../../public/Home/key.avif",
    },
    { name: "2-layred key chain", image: "../../../public/Home/multi.png" },
    { name: "3d-caps", image: "../../../public/Home/cap.webp" },
  ];

  return (
    <section className={styles.categories}>
      <h2>Shop by Category</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.card}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
