import { useContext, useEffect, useState } from 'react';
import styles from './Counter.module.css';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

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
  handleDecrementBtn,
  handleIncrementBtn,
  onChangeCounter,
}) => {
  const { question, minQuestion, maxQuestion } = useContext(
    CounterQuestionsContext
  );

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
          disabled={question <= minQuestion}
        >
          Минус
        </button>
        <input
          type="number"
          id="count"
          name="count"
          value={question || ''}
          min={minQuestion}
          max={maxQuestion}
          onChange={onChangeCounter}
          className={styles.counter__input}
        />
        <button
          className={`${styles.counter__btn} ${styles.container__btn_increment}`}
          type="button"
          onClick={handleIncrementBtn}
          disabled={question >= maxQuestion}
        >
          Плюс
        </button>
      </div>
    </div>
  );
};

export default Counter;
