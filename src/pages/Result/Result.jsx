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
import { ButtonStatusContext } from '@/contexts/ButtonStatusContext';

const Result = () => {
  const data = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setAllQuestion } = useContext(CurrentQuestionContext);
  const { setDisableBtn } = useContext(ButtonStatusContext);

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
    setDisableBtn(true);
  };

  const handleIncorrectIncline = (number, incorrect) => {
    const lastNumber = number % 10;
    if (number > 10 && [11, 12, 13, 14].includes(number % 100))
      return incorrect ? 'вопросов' : 'ошибок';
    if (lastNumber === 1) return incorrect ? 'вопрос' : 'ошибку';
    if ([2, 3, 4].includes(lastNumber)) return incorrect ? 'вопроса' : 'ошибки';
    if ([5, 6, 7, 8, 9, 0].includes(lastNumber))
      return incorrect ? 'вопросов' : 'ошибок';
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
            &nbsp;
            {handleIncorrectIncline(counterQuestions.incorrect, true)} и сделал{' '}
            <span className={styles.result_error}>
              {counterQuestions.error}
            </span>{' '}
            {handleIncorrectIncline(counterQuestions.error)}.
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
