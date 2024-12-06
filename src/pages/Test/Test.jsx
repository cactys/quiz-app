import { useContext, useEffect, useState } from 'react';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import Answer from '@UI/Answer/Answer';
import Question from '@/components/UI/Question/Question';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { getRandomInt, getRandomQuestion } from '@/utils/utils';

/**
 * @returns {JSX.Element} JSX.Element - Test component
 */

const Test = () => {
  const { questionsData } = useContext(QuestionsContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  const {
    setQuestions,
    questionNumber,
    setQuestionNumber,
    setIncorrectQuestions,
    setErrorQuestions,
    setMinQuestions,
    setMaxQuestions,
    setDisableBtn,
  } = useContext(CounterQuestionsContext);
  const { setAllQuestion, allQuestion, setCurrentQuestion, currentQuestion } =
    useContext(CurrentQuestionContext);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleSwitchQuestion = () => {
    setCurrentPage('result');
    setIncorrectQuestions(getRandomInt(0, 4));
    setErrorQuestions(getRandomInt(0, 4));
  };

  const handleChangeAnswer = (answer) => {
    if (answer) {
      setDisableBtn(false);
      setCurrentAnswer(answer);
    }
  };

  const handleStartOver = () => {
    setCurrentPage('start');
    setQuestions(0);
    setQuestionNumber(1);
    setIncorrectQuestions(0);
    setErrorQuestions(0);
    setMinQuestions(1);
    setMaxQuestions(questionsData.questions.length);

    setAllQuestion([
      getRandomQuestion(
        questionsData.questions[
          Math.floor(Math.random() * questionsData.questions.length)
        ],
        questionsData.countries
      ),
    ]);
  };

  useEffect(() => {
    setDisableBtn(!currentAnswer);
  }, [currentAnswer]);

  useEffect(() => {
    setCurrentQuestion(allQuestion[questionNumber - 1]);
  }, [questionNumber, currentQuestion]);

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
