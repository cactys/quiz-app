import { useContext } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import styles from './Answer.module.css';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';

/**
 *
 * @param {() => void} onChangeAnswer void function to change the answer
 * @returns {JSX.Element} Answer component
 */

const Answer = ({ onChangeAnswer }) => {
  const { currentQuestion } = useContext(CurrentQuestionContext);
  const { answers } = currentQuestion;

  return (
    <fieldset className={styles.fieldset}>
      {answers?.map((answer, i) => (
        <RadioButton
          answer={answer}
          index={i + 1}
          key={i}
          onChangeAnswer={onChangeAnswer}
        />
      ))}
    </fieldset>
  );
};

export default Answer;
