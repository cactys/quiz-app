import Logo from '../UI/Logo/Logo';

import styles from './Header.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element
 */

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>QUIZ по странам и столицам</h1>
      <Logo title='QUIZ по странам и столицам' />
    </header>
  );
};

export default Header;
