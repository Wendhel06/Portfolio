import React from 'react';
import styles from './Footer.module.css';
import img from '../Assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.holdFooter}>
          <img src={img} height="50px" width="auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
