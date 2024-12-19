import { useContext, useEffect, useState } from 'react';
import Counter from '@UI/Counter/Counter';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import { QuestionsContext } from '@contexts/QuestionsContext';
import { CounterQuestionsContext } from '@contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@contexts/CurrentPageContext';
import { CurrentQuestionContext } from '@contexts/CurrentQuestionContext';
import { getQuestionFromNumber } from '@/utils/utils';

import styles from './Welcome.module.css';

/**
 * @returns {JSX.Element} JSX.Element - Welcome component
 */
const Welcome = () => {
  const { questionsData } = useContext(QuestionsContext);
  const {
    questions,
    setQuestions,
    questionNumber,
    maxQuestions,
    setMaxQuestions,
    disableBtn,
    setDisableBtn,
  } = useContext(CounterQuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { setAllQuestion } = useContext(CurrentQuestionContext);
  const handleStartTest = () => {
    setCurrentPage(`question#${questionNumber}`);
  };

  useEffect(() => {
    questions >= maxQuestions
      ? setQuestions(maxQuestions)
      : setQuestions(questions);
    if (questions !== 0 || questions) {
      setAllQuestion(getQuestionFromNumber(questionsData, questions));
    }
  }, [questions]);

  useEffect(() => {
    if (questions <= 0 || !questions) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [disableBtn, questions]);

  useEffect(() => {
    setMaxQuestions(questionsData.questions.length);
  }, [maxQuestions, questionsData]);

  return (
    <>
      <Card
        imageClassName={styles.image}
        title="Добро пожаловать"
        subtitle="на викторину по странам и столицам!"
      />
      <Counter subtitle="Выбери количество вопросов:" />
      <Button title="Начать" htmlType="button" handleButton={handleStartTest} />
    </>
  );
};

export default Welcome;
