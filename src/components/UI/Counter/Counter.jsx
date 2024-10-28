import { useContext, useEffect, useState } from 'react';
import styles from './Counter.module.css';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

/**
 *
 * @param {string} subtitle описание счетчика
 * @param {()=> void} handleDecrementBtn onClick ручка кнопки "минус"
 * @param {() => void} handleIncrementBtn onClick ручка кнопки "плюс"
 * @param {() => void} onChangeCounter onChange поля input
 * @returns {JSX.Element} JSX.Element
 */

const Counter = ({
  subtitle,
  handleDecrementBtn,
  handleIncrementBtn,
  onChangeCounter,
}) => {
  const { counterQuestions } = useContext(CounterQuestionsContext);

  return (
    <div className={styles.container}>
      <p form="count" className={styles.container__subtitle}>
        {subtitle}
      </p>
      <div className={styles.container__block}>
        <button
          className={`${styles.counter__btn} ${styles.container__btn_decrement}`}
          type="button"
          onClick={handleDecrementBtn}
          disabled={counterQuestions.question <= counterQuestions.minQuestion}
        >
          Минус
        </button>
        <input
          type="number"
          id="count"
          name="count"
          value={counterQuestions.question || ''}
          min={counterQuestions.minQuestion}
          max={counterQuestions.maxQuestion}
          onChange={onChangeCounter}
          className={styles.counter__input}
        />
        <button
          className={`${styles.counter__btn} ${styles.container__btn_increment}`}
          type="button"
          onClick={handleIncrementBtn}
          disabled={counterQuestions.question >= counterQuestions.maxQuestion}
        >
          Плюс
        </button>
      </div>
    </div>
  );
};

export default Counter;
