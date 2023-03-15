import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Wendhel } from '../Assets/logotipo-white.svg';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 600px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.holdHeader} container`}>
          <div className={styles.logotipo}>
            <Link to="/" aria-label="Home">
              <Wendhel className={styles.logo} />
            </Link>
          </div>
          <nav>
            {mobile && (
              <button
                aria-label="Menu"
                className={`${styles.mobileMenu} ${
                  mobileMenu && styles.mobileMenuActive
                }`}
                onClick={() => setMobileMenu(!mobileMenu)}
              ></button>
            )}

            <ul
              className={`${mobile ? styles.contentMenuMobile : styles.nav} ${
                mobileMenu && styles.mobileContentActive
              }`}
            >
              <li>
                <Link to="/cursos" className={styles.menuLink}>
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contato" className={styles.menuLink}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
