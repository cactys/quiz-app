import { useContext, useEffect } from 'react';
import useForm from '@hooks/useForm';
import { CounterQuestionsContext } from '@contexts/CounterQuestionsContext';

import styles from './Counter.module.css';

/**
 * @param {string} subtitle title counter questions
 * @returns {JSX.Element} JSX.Element with Counter component
 */
const Counter = ({ subtitle }) => {
  const { questions, setQuestions, minQuestions, maxQuestions, setDisableBtn } =
    useContext(CounterQuestionsContext);
  const {
    values,
    inputValue,
    increment,
    decrement,
    handleInputChange,
    handleBlur,
    handleFocus,
  } = useForm(0, maxQuestions, minQuestions, questions);

  useEffect(() => {
    setQuestions(inputValue === '' ? values : inputValue);
    setDisableBtn(questions >= minQuestions);
  }, [values, inputValue, questions]);

  return (
    <div className={styles.container}>
      <p className={styles.container__subtitle}>{subtitle}</p>
      <div className={styles.container__block}>
        <button
          className={`${styles.counter__btn} ${styles.container__btn_decrement}`}
          type="button"
          onClick={decrement}
          disabled={questions <= minQuestions}
        >
          Минус
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.counter__input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoComplete="off"
        />
        <button
          className={`${styles.counter__btn} ${styles.container__btn_increment}`}
          type="button"
          onClick={increment}
          disabled={questions >= maxQuestions}
        >
          Плюс
        </button>
      </div>
    </div>
  );
};

export default Counter;
