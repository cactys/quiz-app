import { useContext } from 'react';
import Welcome from '@/pages/Welcome/Welcome';
import Question from '@/pages/Question/Question';
import Result from '@/pages/Result/Result';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { mockAnswers, mockQuestions } from '@/mock/mock';

import styles from './Main.module.css';

const Main = ({ handleSwitchPage }) => {
  const currentPage = useContext(CurrentPageContext);

  const pages = {
    start: <Welcome handleSwitchPage={handleSwitchPage} />,
    question: (
      <Question {...mockQuestions} handleSwitchPage={handleSwitchPage} />
    ),
    result: <Result {...mockAnswers} handleSwitchPage={handleSwitchPage} />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Main;
