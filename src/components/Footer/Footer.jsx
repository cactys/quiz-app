import styles from './Footer.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element - Footer component
 */

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copy}>
        Проект выполнен в рамках стажировки{' '}
        <a
          href="https://preax.ru"
          target="_blank"
          className={styles.footer__link}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
