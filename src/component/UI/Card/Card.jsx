import { useContext } from 'react';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import Welcome from '@pages/Welcome/Welcome';
import Question from '@pages/Question/Question';
import Result from '@pages/Result/Result';

import { mockAnswers, mockQuestions } from '@/mock/mock';
import styles from './Card.module.css';

/**
 *
 * @returns JSX.Element
 */

const Card = () => {
  const currentPage = useContext(CurrentPageContext);

  const pages = {
    start: <Welcome />,
    question: <Question {...mockQuestions} />,
    result: <Result {...mockAnswers} />,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>{pages[currentPage]}</section>
    </main>
  );
};

export default Card;
