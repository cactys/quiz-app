import { useContext, useEffect, useState } from 'react';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import Answer from '@UI/Answer/Answer';
import Question from '@/components/UI/Question/Question';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { ButtonStatusContext } from '@/contexts/ButtonStatusContext';
import { getRandomInt, getRandomQuestion } from '@/utils/utils';

/**
 * @returns {JSX.Element} JSX.Element - Test component
 */

const Test = () => {
  const data = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { counterQuestions, setCounterQuestions } = useContext(
    CounterQuestionsContext
  );
  const { setAllQuestion } = useContext(CurrentQuestionContext);
  const { setDisableBtn } = useContext(ButtonStatusContext);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleSwitchQuestion = () => {
    setCurrentPage('result');
    setCounterQuestions({
      ...counterQuestions,
      incorrect: getRandomInt(0, 4),
      error: getRandomInt(0, 4),
    });
  };

  const handleChangeAnswer = (answer) => {
    if (answer) {
      setDisableBtn(false);
      setCurrentAnswer(answer);
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

  useEffect(() => {
    setDisableBtn(!currentAnswer);
  }, [currentAnswer]);

  return (
    <>
      <Card question={<Question />} closeBtn={handleStartOver}>
        <Answer onChangeAnswer={handleChangeAnswer} />
      </Card>
      <Button
        title="Ответить"
        htmlType="button"
        answerCount={true}
        handleButton={handleSwitchQuestion}
      />
    </>
  );
};

export default Test;
