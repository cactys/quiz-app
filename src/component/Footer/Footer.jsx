import styles from './Footer.module.css';

/**
 *
 * @returns JSX.Element
 */

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.footerContent}>
        Проект выполнен в рамках стажировки{' '}
        <a
          href="https://preax.ru"
          target="_blank"
          className={styles.footerLink}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
