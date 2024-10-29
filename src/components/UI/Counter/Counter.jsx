import { useContext, useEffect, useState } from 'react';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

import styles from './Counter.module.css';

/**
 *
 * @param {string} subtitle title counter questions
 * @param {()=> void} handleDecrementBtn function onClick minus button
 * @param {() => void} handleIncrementBtn function onClick plus button
 * @param {() => void} onChangeCounter function onChange input
 * @returns {JSX.Element} JSX.Element with Counter component
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
