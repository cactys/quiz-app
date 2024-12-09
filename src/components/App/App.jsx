import { useContext } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { QuestionsContext } from '@contexts/QuestionsContext';
import { CounterQuestionsContextProvider } from '@contexts/CounterQuestionsContext';
import { CurrentQuestionContextProvider } from '@contexts/CurrentQuestionContext';
import { CurrentPageContextProvider } from '@contexts/CurrentPageContext';

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
