import Counter from '@UI/Counter/Counter';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';

import imageQuestion from '@assets/images/image__question.svg';
import { useContext, useEffect, useState } from 'react';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { getRandomQuestion } from '@/utils/utils';
import { QuestionsContext } from '@/contexts/QuestionsContext';

/**
 *
 * @param {() => void} handleSwitchPage функция для переключения страницы
 * @param {object} correctAnswers {question: number, incorrect: number, error: number}
 * @param {() => void} setCountQuestion void function
 * @returns {JSX.Element} JSX.Element
 */

const Welcome = () => {
  const data = useContext(QuestionsContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { currentQuestion, setCurrentQuestion, allQuestion, setAllQuestion } =
    useContext(CurrentQuestionContext);

  const handleStartTest = () => {
    setCurrentPage(`question#${counterQuestions.questionNumber}`);
  };

  const handleIncrementBtn = () => {
    setAllQuestion([
      ...allQuestion,
      getRandomQuestion(
        data.questions[Math.floor(Math.random() * data.questions.length)],
        data.countries
      ),
    ]);
    counterQuestions.question < counterQuestions.maxQuestion
      ? setCounterQuestions({
          ...counterQuestions,
          question: ++counterQuestions.question,
        })
      : setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.question,
        });
  };

  const handleDecrementBtn = () => {
    allQuestion.pop();
    counterQuestions.question > counterQuestions.minQuestion
      ? setCounterQuestions({
          ...counterQuestions,
          question: --counterQuestions.question,
        })
      : setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.minQuestion,
        });
  };

  const onChangeCounter = (e) => {
    setCounterQuestions({ ...counterQuestions, question: e.target.value });
  };

  useEffect(() => {
    counterQuestions.question >= counterQuestions.maxQuestion
      ? setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.maxQuestion,
        })
      : setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.question,
        });
  }, [setCounterQuestions]);

  useEffect(() => {
    setCurrentQuestion(allQuestion[counterQuestions.questionNumber - 1]);
  }, [counterQuestions.questionNumber, currentQuestion]);

  return (
    <>
      <Card
        title="Добро пожаловать"
        subtitle="на викторину по странам и столицам!"
        image={{
          src: imageQuestion,
          width: 135,
          height: 146,
          position: 'absolute',
          right: 0,
          top: -79,
        }}
      />
      <Counter
        subtitle="Выбери количество вопросов:"
        count={counterQuestions.question}
        handleIncrementBtn={handleIncrementBtn}
        handleDecrementBtn={handleDecrementBtn}
        onChangeCounter={onChangeCounter}
      />
      <Button title="Начать" htmlType="button" handleButton={handleStartTest} />
    </>
  );
};

export default Welcome;
