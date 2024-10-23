import styles from './Counter.module.css';

/**
 *
 * @param {string} subtitle описание счетчика
 * @param {number} count число счетчика
 * @param {() => void} onChange onChange поля input
 * @param {()=> void} handleDecrementBtn onClick ручка кнопки "минус"
 * @param {() => void} handleIncrementBtn onClick ручка кнопки "плюс"
 * @returns {JSX.Element} JSX.Element
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
      <label form="count" className={styles.container__subtitle}>
        {subtitle}
      </label>
      <div className={styles.container__block}>
        <button
          className={`${styles.counter__btn} ${styles.container__btn_decrement}`}
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
          className={styles.counter__input}
        />
        <button
          className={`${styles.counter__btn} ${styles.container__btn_increment}`}
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
