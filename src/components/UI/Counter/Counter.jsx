import { useContext, useEffect } from 'react';
import useForm from '@hooks/useForm';
import { CounterQuestionsContext } from '@contexts/CounterQuestionsContext';

import styles from './Counter.module.css';

/**
 *
 * @param {string} subtitle title counter questions
 * @param {()=> void} handleDecrementBtn function onClick minus button
 * @param {() => void} handleIncrementBtn function onClick plus button
 * @returns {JSX.Element} JSX.Element with Counter component
 */

const Counter = ({ subtitle, handleDecrementBtn, handleIncrementBtn }) => {
  const { questions, setQuestions, minQuestions, maxQuestions } = useContext(
    CounterQuestionsContext
  );
  const { values, handleChange } = useForm({
    count: questions,
  });

  const onBlur = () => {
    if (!values.count && !questions) {
      setQuestions(0);
    }
  };

  const onFocus = () => {
    if (values.count <= 0 && questions <= 0) setQuestions('');
  };

  useEffect(() => {
    setQuestions(values.count);
  }, [values]);

  useEffect(() => {
    if (values.count > maxQuestions) setQuestions(maxQuestions);
  }, [values]);

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
          disabled={questions <= minQuestions}
        >
          Минус
        </button>
        <input
          type="text"
          id="count"
          name="count"
          value={questions}
          min={minQuestions}
          max={maxQuestions}
          onChange={handleChange}
          className={styles.counter__input}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <button
          className={`${styles.counter__btn} ${styles.container__btn_increment}`}
          type="button"
          onClick={handleIncrementBtn}
          disabled={questions >= maxQuestions}
        >
          Плюс
        </button>
      </div>
    </div>
  );
};

export default Counter;
