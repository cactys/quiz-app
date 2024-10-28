import { useContext, useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { getRandomQuestion } from '@/utils/utils';

import styles from './App.module.css';
import { QuestionsContext } from '@/contexts/QuestionsContext';

/**
 *
 * @returns {JSX.Element} JSX.Element
 */

const App = () => {
  const data = useContext(QuestionsContext);
  const [currentPage, setCurrentPage] = useState('start');
  const [counterQuestions, setCounterQuestions] = useState({
    question: 1,
    questionNumber: 1,
    incorrect: 0,
    error: 0,
    minQuestion: 1,
    maxQuestion: data.questions.length,
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [allQuestion, setAllQuestion] = useState([
    getRandomQuestion(
      data.questions[Math.floor(Math.random() * data.questions.length)],
      data.countries
    ),
  ]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const valueCurrentPageContext = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
    }),
    [currentPage]
  );

  const valueCounterQuestionsContext = useMemo(
    () => ({ counterQuestions, setCounterQuestions }),
    [counterQuestions]
  );

  const valueCurrentQuestionContext = useMemo(
    () => ({
      currentQuestion,
      setCurrentQuestion,
      allQuestion,
      setAllQuestion,
    }),
    [currentQuestion, allQuestion]
  );

  console.log(currentPage);

  return (
    <div className={styles.page}>
      <Header />
      <QuestionsContext.Provider value={data}>
        <CurrentPageContext.Provider value={valueCurrentPageContext}>
          <CounterQuestionsContext.Provider
            value={valueCounterQuestionsContext}
          >
            <CurrentQuestionContext.Provider
              value={valueCurrentQuestionContext}
            >
              <Main disableBtn={disableBtn} setDisableBtn={setDisableBtn} />
            </CurrentQuestionContext.Provider>
          </CounterQuestionsContext.Provider>
        </CurrentPageContext.Provider>
      </QuestionsContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
