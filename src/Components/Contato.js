import React from 'react';
import styles from './Contato.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <div className={styles.containerContato}>
        <h1>Contato</h1>
        <ul>
          <li className={styles.holdLinksContato}>
            <Link
              to="https://www.linkedin.com/in/wendhel-nogueira-4a3760232/"
              target="_blank"
              className={styles.linkContato}
            >
              <FaLinkedin className={styles.icons} />
              <p>https://www.linkedin.com/in/wendhel-nogueira-4a3760232</p>
            </Link>
            <Link
              to="mailto:wendhelalves7@gmail.com"
              target="_blank"
              className={styles.linkContato}
            >
              <FaEnvelope className={styles.icons} />
              <p>wendhelalves7@gmail.com</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
