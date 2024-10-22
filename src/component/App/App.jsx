import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CorrectAnswerContext } from '@/contexts/CorrectAnswerContext';

import styles from './App.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');
  const [correctAnswers, setCorrectAnswers] = useState({
    question: 18,
    incorrect: 12,
    error: 6,
  });

  const handleSwitchPage = () => {
    setCurrentPage(
      currentPage === 'start'
        ? 'question'
        : currentPage === 'question'
        ? 'result'
        : 'start'
    );
  };

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={currentPage}>
        <CorrectAnswerContext.Provider value={correctAnswers}>
          <Main
            correctAnswers={correctAnswers}
            handleSwitchPage={handleSwitchPage}
            setCountQuestion={setCorrectAnswers}
          />
        </CorrectAnswerContext.Provider>
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
