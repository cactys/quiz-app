import { useContext } from 'react';
import Welcome from '@pages/Welcome/Welcome';
import Test from '@/pages/Test/Test';
import Result from '@pages/Result/Result';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { mockQuestions } from '@/mock/mock';

import styles from './Main.module.css';

/**
 *
 * @param {() => void} handleSwitchPage void function
 * @param {object} correctAnswers {question: number, incorrect: number, error: number}
 * @param {() => void} setCountQuestion void function
 * @returns {JSX.Element} JSX.Element
 */

const Main = ({
  handleSwitchPage,
  handleIncrementBtn,
  handleDecrementBtn,
  onChangeCounter,
  setCurrentPage,
}) => {
  const currentPage = useContext(CurrentPageContext);

  const pages = {
    start: (
      <Welcome
        handleSwitchPage={handleSwitchPage}
        handleIncrementBtn={handleIncrementBtn}
        handleDecrementBtn={handleDecrementBtn}
        onChangeCounter={onChangeCounter}
      />
    ),
    question: (
      <Test
        handleSwitchPage={handleSwitchPage}
        setCurrentPage={setCurrentPage}
      />
    ),
    result: <Result handleSwitchPage={handleSwitchPage} />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Main;
