import styles from './Card.module.css';

/**
 *
 * @param children JSX.Element
 * @returns JSX.Element
 */

const Card = ({ children }) => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>{children}</section>
    </main>
  );
};

export default Card;
