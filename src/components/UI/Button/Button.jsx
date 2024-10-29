import { useContext, useEffect, useState } from 'react';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { ButtonStatusContext } from '@/contexts/ButtonStatusContext';

import styles from './Button.module.css';

/**
 * @param {string} title button title text
 * @param {string} htmlType button type html attribute
 * @param {boolean} answerCount button answer count status boolean
 * @param {() => void} handleButton button handle function callback
 * @returns {JSX.Element} JSX.Element - button component
 */

const Button = ({ title, htmlType, answerCount, handleButton }) => {
  const { counterQuestions } = useContext(CounterQuestionsContext);
  const { disableBtn, setDisableBtn } = useContext(ButtonStatusContext);

  useEffect(() => {
    setDisableBtn(disableBtn);
  }, [disableBtn]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (!disableBtn && e.key === 'Enter') {
        handleButton();
      }
    };

    document.addEventListener('keydown', handleEnter);
    return () => document.removeEventListener('keydown', handleEnter);
  }, [disableBtn, handleButton]);

  return (
    <div
      className={`${styles.button} ${answerCount ? styles.button_answer : ''}`}
    >
      <div className={styles.button__container}>
        <button
          type={htmlType}
          className={styles.button__btn}
          onClick={handleButton}
          disabled={disableBtn}
        >
          {title}
        </button>
        <p
          className={`${styles.button__subtitle} ${
            disableBtn ? styles.button__subtitle_disabled : ''
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
