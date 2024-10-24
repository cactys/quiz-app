import { useContext } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import styles from './Answer.module.css';
import { CurrentAnswerContext } from '@/contexts/CurrentAnswerContext';

const Answer = () => {
  const { answers } = useContext(CurrentAnswerContext);

  return (
    <fieldset className={styles.fieldset}>
      {answers.map((answer, i) => (
        <RadioButton answer={answer} index={i + 1} key={i} />
      ))}
    </fieldset>
  );
};

export default Answer;
