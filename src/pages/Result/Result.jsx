import Button from '@/component/UI/Button/Button';

import imageResult from '@assets/images/image__result.webp';
import styles from './Result.module.css';

/**
 *
 * @param answersCorrect все ответы верны boolean
 * @param answersPartiallyCorrect есть ошибки boolean
 * @param answersIncorrect не одного правильного ответа boolean
 * @param result количество верных / неверных ответов {key: value}
 * @returns JSX.Element
 */

const Result = (props) => {
  const { answersCorrect, answersPartiallyCorrect, answersIncorrect, result } =
    props[0];

  return (
    <>
      <img
        src={imageResult}
        alt="Результат"
        className={styles.image}
        width={196}
        height={196}
      />
      <div className={styles.header}>
        <h2 className={styles.title}>Результат</h2>
        {answersCorrect && (
          <p className={styles.subtitle}>
            Ты ответил правильно на&nbsp;все&nbsp;вопросы. Так держать!
          </p>
        )}
        {answersPartiallyCorrect && (
          <p className={styles.subtitle}>
            Ты ответил правильно на&nbsp;
            <span className={styles.incorrect}>{result.incorrect}</span>
            &nbsp;вопросов и сделал{' '}
            <span className={styles.error}>{result.error}</span> ошибок.
          </p>
        )}
        {answersIncorrect && (
          <p className={styles.subtitle}>
            Ты не ответил ни на один вопрос. Попробуй еще!
          </p>
        )}
      </div>
      <Button title="Попробовать еще" htmlType="submit" />
    </>
  );
};

export default Result;
