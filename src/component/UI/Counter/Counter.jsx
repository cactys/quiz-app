import styles from './Counter.module.css';

/**
 *
 * @param subtitle описание счетчика
 * @param count число счетчика
 * @param onChange onChange поля input
 * @param handleDecrementBtn onClick ручка кнопки "минус"
 * @param handleIncrementBtn onClick ручка кнопки "плюс"
 * @returns JSX.Element
 */

const Counter = ({
  subtitle,
  count,
  handleDecrementBtn,
  handleIncrementBtn,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label form="count" className={styles.subtitle}>
        {subtitle}
      </label>
      <div className={styles.counterBlok}>
        <button
          className={`${styles.counterBtn} ${styles.decrementBtn}`}
          type="button"
          onClick={handleDecrementBtn}
        >
          Минус
        </button>
        <input
          type="number"
          id="count"
          name="count"
          value={count}
          onChange={onChange}
          className={styles.counter}
        />
        <button
          className={`${styles.counterBtn} ${styles.incrementBtn}`}
          type="button"
          onClick={handleIncrementBtn}
        >
          Плюс
        </button>
      </div>
    </div>
  );
};

export default Counter;
