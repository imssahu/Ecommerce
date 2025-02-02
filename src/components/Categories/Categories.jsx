import React from "react";
import styles from "./Categories.module.css";
import key from "../../../public/Home/key.avif";
import multi from "../../../public/Home/multi.png";
import cap from "../../../public/Home/cap.webp";
const Categories = () => {
  const categories = [
    {
      name: "1 layered key-chain",
      image: key,
    },
    { name: "2-layred key chain", image: multi },
    { name: "3d-caps", image: cap },
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
