import styles from './Logo.module.css';

/**
 *
 * @returns JSX.Element
 */

const Logo = () => {
  return (
    <a href="#" className={styles.link}>
      <span className={styles.logo} />
    </a>
  );
};

export default Logo;
