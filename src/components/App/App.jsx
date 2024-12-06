import { useContext, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CounterQuestionsContextProvider } from '@/contexts/CounterQuestionsContext';
import { QuestionsContext } from '@/contexts/QuestionsContext';
import { CurrentPageContextProvider } from '@/contexts/CurrentPageContext';
import { CurrentQuestionContextProvider } from '@/contexts/CurrentQuestionContext';

import styles from './App.module.css';

/**
 * @returns {JSX.Element} JSX.Element - App component
 */

const App = () => {
  const { questionsData } = useContext(QuestionsContext);

  return (
    <div className={styles.page}>
      <Header />
      <CounterQuestionsContextProvider>
        <CurrentQuestionContextProvider>
          <CurrentPageContextProvider data={questionsData}>
            <Main />
          </CurrentPageContextProvider>
        </CurrentQuestionContextProvider>
      </CounterQuestionsContextProvider>
      <Footer />
    </div>
  );
};

export default App;
