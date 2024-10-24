import { useContext } from 'react';
import styles from './Question.module.css';
import { CurrentAnswerContext } from '@/contexts/CurrentAnswerContext';

const Question = () => {
  const { question } = useContext(CurrentAnswerContext);

  return (
    <>
      <figure className={styles.card__figure}>
        <img
          src={question.flag}
          alt={question.question}
          className={styles.card__image}
          width={90}
          height={60}
        />
      </figure>
      <header className={styles.card__header_place_question}>
        <h3 className={styles.card__subtitle_place_question}>
          {question.question}
        </h3>
      </header>
    </>
  );
};

export default Question;
