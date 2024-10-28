import { useContext } from 'react';
import Welcome from '@pages/Welcome/Welcome';
import Test from '@/pages/Test/Test';
import Result from '@pages/Result/Result';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

import styles from './Main.module.css';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

/**
 * @returns {JSX.Element} JSX.Element - Main component
 */

const Main = () => {
  const { currentPage } = useContext(CurrentPageContext);
  const { counterQuestions } = useContext(CounterQuestionsContext);

  const pages = {
    start: <Welcome />,
    [`question#${counterQuestions.questionNumber}`]: <Test />,
    result: <Result />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Main;
