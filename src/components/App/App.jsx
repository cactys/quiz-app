import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CounterQuestionsContextProvider } from '@contexts/CounterQuestionsContext';
import { CurrentQuestionContextProvider } from '@contexts/CurrentQuestionContext';
import { CurrentPageContextProvider } from '@contexts/CurrentPageContext';

import styles from './App.module.css';

/**
 * @returns {JSX.Element} JSX.Element - App component
 */

const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <CounterQuestionsContextProvider>
        <CurrentQuestionContextProvider>
          <CurrentPageContextProvider>
            <Main />
          </CurrentPageContextProvider>
        </CurrentQuestionContextProvider>
      </CounterQuestionsContextProvider>
      <Footer />
    </div>
  );
};

export default App;
