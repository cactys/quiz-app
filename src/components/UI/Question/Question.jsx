import { useContext } from 'react';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';

import styles from './Question.module.css';

/**
 * @returns {JSX.Element} JSX.Element - Question component
 */

const Question = () => {
  const { currentQuestion } = useContext(CurrentQuestionContext);
  const { question } = currentQuestion;

  return (
    <>
      <figure className={styles.figure}>
        <img
          src={question?.flag}
          alt={question?.question}
          className={styles.figure__image}
          width={90}
          height={60}
        />
      </figure>
      <header className={styles.header}>
        <h3 className={styles.header__title}>{question?.question}</h3>
      </header>
    </>
  );
};

export default Question;
