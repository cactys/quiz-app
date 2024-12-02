import { useContext, useEffect, useState } from 'react';
import Counter from '@UI/Counter/Counter';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { ButtonStatusContext } from '@/contexts/ButtonStatusContext';
import { getRandomQuestion } from '@/utils/utils';

import imageQuestion from '@assets/images/image__question.svg';

/**
 * @returns {JSX.Element} JSX.Element - Welcome component
 */

const Welcome = () => {
  const data = useContext(QuestionsContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { currentQuestion, setCurrentQuestion, allQuestion, setAllQuestion } =
    useContext(CurrentQuestionContext);
  const { disableBtn, setDisableBtn } = useContext(ButtonStatusContext);

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
    const value = e.target.value;
    console.log(value);

    console.log(value === 0);

    if (value <= 0)
      return setCounterQuestions({ ...counterQuestions, question: 1 });
    setCounterQuestions({ ...counterQuestions, question: value });
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
  }, [counterQuestions.question, setCounterQuestions]);

  useEffect(() => {
    setCurrentQuestion(allQuestion[counterQuestions.questionNumber - 1]);
  }, [counterQuestions.questionNumber, currentQuestion]);

  useEffect(() => {
    if (counterQuestions.question <= 0 || !counterQuestions.question) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [disableBtn, counterQuestions.question]);

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
