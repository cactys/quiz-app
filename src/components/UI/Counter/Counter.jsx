import { useContext, useEffect, useState } from 'react';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import useForm from '@/hooks/useForm';

import styles from './Counter.module.css';

/**
 *
 * @param {string} subtitle title counter questions
 * @param {()=> void} handleDecrementBtn function onClick minus button
 * @param {() => void} handleIncrementBtn function onClick plus button
 * @returns {JSX.Element} JSX.Element with Counter component
 */

const Counter = ({ subtitle, handleDecrementBtn, handleIncrementBtn }) => {
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { values, handleChange } = useForm({
    count: counterQuestions.question,
  });

  const onBlur = () => {
    if (!values.count)
      setCounterQuestions({
        ...counterQuestions,
        question: 0,
      });
  };

  const onFocus = () => {
    if (values.count <= 0)
      setCounterQuestions({ ...counterQuestions, question: '' });
  };

  useEffect(() => {
    if (values.count > counterQuestions.maxQuestion)
      setCounterQuestions({
        ...counterQuestions,
        question: counterQuestions.maxQuestion,
      });

    setCounterQuestions({
      ...counterQuestions,
      question: values ? values.count : 0,
    });
  }, [setCounterQuestions, values]);

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
          value={counterQuestions.question}
          min={counterQuestions.minQuestion}
          max={counterQuestions.maxQuestion}
          onChange={handleChange}
          className={styles.counter__input}
          onBlur={onBlur}
          onFocus={onFocus}
          pattern="[0-9]{1,9}"
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
