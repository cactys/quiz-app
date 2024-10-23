import { useContext } from 'react';
import Welcome from '@pages/Welcome/Welcome';
import Question from '@pages/Question/Question';
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

const Main = ({ handleSwitchPage, correctAnswers, setCountQuestion }) => {
  const currentPage = useContext(CurrentPageContext);

  const pages = {
    start: (
      <Welcome
        handleSwitchPage={handleSwitchPage}
        correctAnswers={correctAnswers}
        setCountQuestion={setCountQuestion}
      />
    ),
    question: (
      <Question {...mockQuestions} handleSwitchPage={handleSwitchPage} />
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
