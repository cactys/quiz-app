import Logo from '../UI/Logo/Logo';

import styles from './Header.module.css';

/**
 *
 * @returns JSX.Element
 */

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>QUIZ по странам и столицам</h1>
      <Logo />
    </header>
  );
};

export default Header;
