import { useContext, useEffect, useState } from 'react';
import styles from './Button.module.css';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

/**
 * @param {() => void} handleButton void function
 * @param {string} title текст кнопки
 * @param {string} htmlType тип кнопки
 * @param {boolean} answerCount boolean
 * @param {boolean} disabled boolean
 * @returns {JSX.Element} JSX.Element
 */

const Button = ({ title, htmlType, handleButton, answerCount, disabled }) => {
  const { counterQuestions } = useContext(CounterQuestionsContext);
  const [disabledBtn, setDisabledBtn] = useState(disabled);

  useEffect(() => {
    const handleEnter = (e) => {
      if (!disabledBtn && e.key === 'Enter') {
        handleButton();
      }
    };

    document.addEventListener('keydown', handleEnter);
    return () => document.removeEventListener('keydown', handleEnter);
  }, [handleButton]);

  useEffect(() => {
    if (counterQuestions.question <= 0 || !counterQuestions.question) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(disabled);
    }
  }, [counterQuestions.question]);

  useEffect(() => {
    setDisabledBtn(disabled);
  }, [disabled]);

  return (
    <div
      className={`${styles.button} ${answerCount ? styles.button_answer : ''}`}
    >
      <div className={styles.button__container}>
        <button
          type={htmlType}
          className={styles.button__btn}
          onClick={handleButton}
          disabled={disabledBtn}
        >
          {title}
        </button>
        <p
          className={`${styles.button__subtitle} ${
            disabledBtn ? styles.button__subtitle_disabled : ''
          }`}
        >
          или нажми <span className={styles.button__span}>Enter &#8629;</span>
        </p>
      </div>
      {answerCount && (
        <p className={styles['button__answer-count']}>
          {counterQuestions.questionNumber} / {counterQuestions.question}
        </p>
      )}
    </div>
  );
};

export default Button;
