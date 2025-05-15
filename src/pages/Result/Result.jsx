import { useContext } from 'react';
import { getDeclension } from '@/utils/utils';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import { CounterQuestionsContext } from '@contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@contexts/CurrentPageContext';
import { CurrentQuestionContext } from '@contexts/CurrentQuestionContext';
import { QuestionsContext } from '@contexts/QuestionsContext';

import styles from './Result.module.css';

/**
 * @returns {JSX.Element} JSX.Element - Result component
 */

const Result = () => {
  const { questionsData } = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const {
    setQuestions,
    setQuestionNumber,
    incorrectQuestions,
    setIncorrectQuestions,
    errorQuestions,
    setErrorQuestions,
    setMinQuestions,
    setMaxQuestions,
    setDisableBtn,
  } = useContext(CounterQuestionsContext);
  const { setAllQuestion } = useContext(CurrentQuestionContext);

  const handleStartOver = () => {
    setCurrentPage('start');
    setQuestions(0);
    setQuestionNumber(1);
    setIncorrectQuestions(0);
    setErrorQuestions(0);
    setMinQuestions(1);
    setMaxQuestions(questionsData.questions.length);
    setAllQuestion([]);
    setDisableBtn(true);
  };

  return (
    <>
      <Card title="Результат" imageClassName={styles.image}>
        {incorrectQuestions === 0 && errorQuestions > 0 && (
          <p className={styles.result}>
            Ты не ответил ни на один вопрос. Попробуй еще!
          </p>
        )}
        {errorQuestions === 0 && (
          <p className={styles.result}>
            Ты ответил правильно на&nbsp;все&nbsp;вопросы. Так держать!
          </p>
        )}
        {incorrectQuestions > 0 && errorQuestions > 0 && (
          <p className={styles.result}>
            Ты ответил правильно на&nbsp;
            <span className={styles.result_incorrect}>
              {incorrectQuestions}
            </span>
            &nbsp;
            {getDeclension(incorrectQuestions, true)} и сделал{' '}
            <span className={styles.result_error}>{errorQuestions}</span>{' '}
            {getDeclension(errorQuestions)}.
          </p>
        )}
      </Card>
      <Button
        title="Попробовать еще"
        htmlType="button"
        handleButton={handleStartOver}
      />
    </>
  );
};

export default Result;
