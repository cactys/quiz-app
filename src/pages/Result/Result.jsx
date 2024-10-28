import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { getRandomQuestion } from '@/utils/utils';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';

import imageResult from '@assets/images/image__result.svg';
import styles from './Result.module.css';
import { useContext } from 'react';

const Result = () => {
  const data = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setAllQuestion } = useContext(CurrentQuestionContext);

  const handleStartOver = () => {
    setCurrentPage('start');
    setCounterQuestions({
      question: 1,
      questionNumber: 1,
      incorrect: 0,
      error: 0,
      minQuestion: 1,
      maxQuestion: data.questions.length,
    });
    setAllQuestion([
      getRandomQuestion(
        data.questions[Math.floor(Math.random() * data.questions.length)],
        data.countries
      ),
    ]);
  };

  return (
    <>
      <Card
        image={{
          src: imageResult,
          width: 196,
          height: 196,
          placement: 'center',
        }}
        title="Результат"
      >
        {counterQuestions.incorrect === 0 && counterQuestions.error > 0 && (
          <p className={styles.result}>
            Ты не ответил ни на один вопрос. Попробуй еще!
          </p>
        )}
        {counterQuestions.error === 0 && (
          <p className={styles.result}>
            Ты ответил правильно на&nbsp;все&nbsp;вопросы. Так держать!
          </p>
        )}
        {counterQuestions.incorrect > 0 && counterQuestions.error > 0 && (
          <p className={styles.result}>
            Ты ответил правильно на&nbsp;
            <span className={styles.result_incorrect}>
              {counterQuestions.incorrect}
            </span>
            &nbsp;вопросов и сделал{' '}
            <span className={styles.result_error}>
              {counterQuestions.error}
            </span>{' '}
            ошибок.
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
