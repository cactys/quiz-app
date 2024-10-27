import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { getRandomQuestion } from '@/utils/utils';

import data from '../../../data/quizz_questions.json';

import styles from './App.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');
  const [counterQuestions, setCounterQuestions] = useState({
    question: 1,
    currentQuestion: 1,
    incorrect: 0,
    error: 0,
    minQuestion: 1,
    maxQuestion: data.questions.length,
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const handleStartTest = () => {
    setCurrentPage(`question#${counterQuestions.currentQuestion}`);
  };

  const handleSwitchQuestion = () => {
    if (counterQuestions.currentQuestion < counterQuestions.question) {
      setCounterQuestions({
        ...counterQuestions,
        currentQuestion: ++counterQuestions.currentQuestion,
      });
      setCurrentPage(`question#${counterQuestions.currentQuestion}`);
      setCurrentQuestion(currentQuestions[counterQuestions.currentQuestion]);
      console.log(currentQuestion);
    } else {
      setCurrentPage('result');
    }
  };

  const handleStartOver = () => {
    setCurrentPage('start');
    setCounterQuestions({
      question: 1,
      currentQuestion: 1,
      incorrect: 0,
      error: 0,
      minQuestion: 1,
      maxQuestion: data.questions.length,
    });
    setCurrentQuestions([]);
  };

  const handleIncrementBtn = () =>
    counterQuestions.question < counterQuestions.maxQuestion
      ? setCounterQuestions({
          ...counterQuestions,
          question: ++counterQuestions.question,
        })
      : setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.question,
        });

  const handleDecrementBtn = () =>
    counterQuestions.question > counterQuestions.minQuestion
      ? setCounterQuestions({
          ...counterQuestions,
          question: --counterQuestions.question,
        })
      : setCounterQuestions({
          ...counterQuestions,
          question: counterQuestions.minQuestion,
        });

  const onChangeCounter = (e) => {
    setCounterQuestions({ ...counterQuestions, question: e.target.value });
  };

  const handleChangeAnswer = (answer) => {
    if (answer) {
      setDisableBtn(false);
    }
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
    setCurrentQuestions(
      Array(counterQuestions.question).fill(
        getRandomQuestion(
          data.questions[Math.floor(Math.random() * data.questions.length)],
          data.countries
        )
      )
    );
  }, [counterQuestions.question]);

  useEffect(() => {
    setCurrentQuestion(currentQuestions[counterQuestions.currentQuestion - 1]);
  }, [counterQuestions]);

  console.log(counterQuestions.currentQuestion);
  console.log(currentQuestions);
  console.log(currentQuestion);

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={currentPage}>
        <CurrentQuestionContext.Provider value={currentQuestion}>
          <CounterQuestionsContext.Provider value={counterQuestions}>
            <Main
              handleStartTest={handleStartTest}
              handleIncrementBtn={handleIncrementBtn}
              handleDecrementBtn={handleDecrementBtn}
              onChangeCounter={onChangeCounter}
              setCurrentPage={setCurrentPage}
              disableBtn={disableBtn}
              onChangeAnswer={handleChangeAnswer}
              handleSwitchQuestion={handleSwitchQuestion}
              handleStartOver={handleStartOver}
            />
          </CounterQuestionsContext.Provider>
        </CurrentQuestionContext.Provider>
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
