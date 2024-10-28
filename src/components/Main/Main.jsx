import { useContext } from 'react';
import Welcome from '@pages/Welcome/Welcome';
import Test from '@/pages/Test/Test';
import Result from '@pages/Result/Result';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { mockQuestions } from '@/mock/mock';

import styles from './Main.module.css';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

/**
 *
 * @param {() => void} handleSwitchPage void function
 * @param {object} correctAnswers {question: number, incorrect: number, error: number}
 * @param {() => void} setCountQuestion void function
 * @returns {JSX.Element} JSX.Element
 */

const Main = ({ disableBtn, setDisableBtn }) => {
  const { currentPage } = useContext(CurrentPageContext);
  const { counterQuestions } = useContext(CounterQuestionsContext);

  const pages = {
    start: <Welcome />,
    [`question#${counterQuestions.questionNumber}`]: (
      <Test disableBtn={disableBtn} setDisableBtn={setDisableBtn} />
    ),
    result: <Result />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Main;
