import { useContext, useEffect, useState } from 'react';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import Answer from '@UI/Answer/Answer';
import Question from '@/components/UI/Question/Question';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { getRandomQuestion } from '@/utils/utils';

/**
 *
 * @param {string} question текст вопроса
 * @param {string} image URL картинки
 * @param {[]} answerOptions массив ответов
 * @param {() => void} handleSwitchPage void function
 * @returns {JSX.Element} JSX.Element
 */

const Test = ({ disableBtn, setDisableBtn }) => {
  const data = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setCurrentQuestion, allQuestion, setAllQuestion } =
    useContext(CurrentQuestionContext);

  const handleSwitchQuestion = () => {
    if (counterQuestions.questionNumber < counterQuestions.question) {
      setCounterQuestions({
        ...counterQuestions,
        questionNumber: ++counterQuestions.questionNumber,
      });
      setCurrentPage(`question#${counterQuestions.questionNumber}`);
      setCurrentQuestion(allQuestion[counterQuestions.questionNumber - 1]);
    } else {
      setCurrentPage('result');
    }
  };

  const handleChangeAnswer = (answer) => {
    if (answer) {
      setDisableBtn(false);
    }
  };

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
      <Card question={<Question />} closeBtn={handleStartOver}>
        <Answer onChangeAnswer={handleChangeAnswer} />
      </Card>
      <Button
        title="Ответить"
        htmlType="button"
        answerCount={true}
        disabled={disableBtn}
        handleButton={handleSwitchQuestion}
      />
    </>
  );
};

export default Test;
