import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentAnswerContext } from '@/contexts/CurrentAnswerContext';
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
    incorrect: 0,
    error: 0,
    minQuestion: 1,
    maxQuestion: data.questions.length,
  });
  const currentQuestion = getRandomQuestion(
    data.questions[Math.floor(Math.random() * data.questions.length)],
    data.countries
  );

  const handleSwitchPage = () => {
    setCurrentPage(
      currentPage === 'start'
        ? 'question'
        : currentPage === 'question'
        ? 'result'
        : 'start'
    );
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
  }, [counterQuestions.question]);

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={currentPage}>
        <CurrentAnswerContext.Provider value={currentQuestion}>
          <CounterQuestionsContext.Provider value={counterQuestions}>
            <Main
              handleSwitchPage={handleSwitchPage}
              handleIncrementBtn={handleIncrementBtn}
              handleDecrementBtn={handleDecrementBtn}
              onChangeCounter={onChangeCounter}
              setCurrentPage={setCurrentPage}
            />
          </CounterQuestionsContext.Provider>
        </CurrentAnswerContext.Provider>
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
