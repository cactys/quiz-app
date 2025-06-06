import { useContext } from 'react';
import Welcome from '@pages/Welcome/Welcome';
import Test from '@pages/Test/Test';
import Result from '@pages/Result/Result';
import { CurrentPageContext } from '@contexts/CurrentPageContext';
import { CounterQuestionsContext } from '@contexts/CounterQuestionsContext';

import styles from './Main.module.css';

/**
 * @returns {JSX.Element} JSX.Element - Main component
 */

const Main = () => {
  const { currentPage } = useContext(CurrentPageContext);
  const { questionNumber } = useContext(CounterQuestionsContext);

  const pages = {
    start: <Welcome />,
    [`question#${questionNumber}`]: <Test />,
    result: <Result />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Main;
