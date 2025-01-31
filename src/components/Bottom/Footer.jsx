import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Keychain Store</h3>
          <p>
            Discover unique and stylish keychains for every style and occasion.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaFacebookF size={20} />
            </a>
            <a href="#">
              <FaTwitter size={20} />
            </a>
            <a href="#">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>
            <FaEnvelope className={styles.icon} /> support@keychainstore.com
          </p>
          <p>
            <FaPhone className={styles.icon} /> +1 234 567 890
          </p>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> 123 Store Street, City,
            Country
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2025 Keychain Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
