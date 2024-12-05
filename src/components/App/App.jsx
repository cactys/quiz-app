import { useContext, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';
import { CurrentQuestionContext } from '@/contexts/CurrentQuestionContext';
import { ButtonStatusContext } from '@/contexts/ButtonStatusContext';
import { getRandomQuestion } from '@/utils/utils';

import styles from './App.module.css';

/**
 * @returns {JSX.Element} JSX.Element - App component
 */

const App = () => {
  const data = useContext(QuestionsContext);
  const [currentPage, setCurrentPage] = useState('start');
  const [counterQuestions, setCounterQuestions] = useState({
    question: 0,
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

  const valueButtonStatusContext = useMemo(
    () => ({ disableBtn, setDisableBtn }),
    [disableBtn]
  );

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={valueCurrentPageContext}>
        <CounterQuestionsContext.Provider value={valueCounterQuestionsContext}>
          <CurrentQuestionContext.Provider value={valueCurrentQuestionContext}>
            <ButtonStatusContext.Provider value={valueButtonStatusContext}>
              <Main />
            </ButtonStatusContext.Provider>
          </CurrentQuestionContext.Provider>
        </CounterQuestionsContext.Provider>
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
