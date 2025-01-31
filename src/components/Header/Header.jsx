import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Keychain Store</div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#collections">Collections</a>
        <a href="#about">About</a>
      </nav>
      <div className={styles.actions}>
        <input type="text" placeholder="Search" className={styles.search} />
        <i className="fa fa-user"></i>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
