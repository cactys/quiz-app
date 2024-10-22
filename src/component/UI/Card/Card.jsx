import { useContext } from 'react';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';
import { CorrectAnswerContext } from '@/contexts/CorrectAnswerContext';

import styles from './Card.module.css';

/**
 *
 * @param {object} image {src: string, width: number, height: number, position: string, top: number, right: number, placement: string}
 * @param {string} title string
 * @param {string} subtitle string
 * @param {() => void} closeBtn void function
 * @param {object} answerOptions {question: string, image: string, answerOptions: [], required: boolean}
 * @param {() => void} handleAnswerChoice void function
 * @param {boolean} answerChoice boolean
 * @returns {JSX.Element} JSX.Element
 */

const Card = ({
  image,
  title,
  subtitle,
  closeBtn,
  answerOptions,
  handleAnswerChoice,
  answerChoice,
}) => {
  const currentPage = useContext(CurrentPageContext);
  const correctAnswers = useContext(CorrectAnswerContext);

  return (
    <article className={styles.card}>
      {closeBtn && (
        <button className={styles['card__close-btn']} onClick={closeBtn} />
      )}
      <figure
        className={`${
          image ? styles.card__figure : styles.card__figure_disable
        }`}
        style={{
          justifyContent: image.placement,
        }}
      >
        <img
          src={image.src}
          alt={title}
          className={styles.card__image}
          width={image.width}
          height={image.height}
          style={{
            position: image.position,
            top: image.top,
            right: image.right,
          }}
        />
      </figure>
      <header
        className={`${styles.card__header} ${
          currentPage === 'question'
            ? styles.card__header_place_question
            : currentPage === 'result'
            ? styles.card__header_place_result
            : ''
        }`}
      >
        {title && <h2 className={styles.card__title}>{title}</h2>}
        {subtitle && (
          <h3
            className={`${styles.card__subtitle} ${
              currentPage === 'question'
                ? styles.card__subtitle_place_question
                : ''
            }`}
          >
            {subtitle}
          </h3>
        )}
      </header>
      <div className={styles.card__body}>
        {answerOptions && (
          <ol className={styles.card__list}>
            {answerOptions.map((answerOption, index) => (
              <li key={index} className={styles.card__item}>
                <button
                  className={styles['card__item-btn']}
                  onClick={handleAnswerChoice}
                >
                  {answerOption}
                </button>
              </li>
            ))}
          </ol>
        )}
        {currentPage === 'result' &&
          correctAnswers.incorrect === 0 &&
          correctAnswers.error > 0 && (
            <p className={styles.card__copy}>
              Ты не ответил ни на один вопрос. Попробуй еще!
            </p>
          )}
        {currentPage === 'result' && correctAnswers.error === 0 && (
          <p className={styles.card__copy}>
            Ты ответил правильно на&nbsp;все&nbsp;вопросы. Так держать!
          </p>
        )}
        {currentPage === 'result' &&
          correctAnswers.incorrect > 0 &&
          correctAnswers.error > 0 && (
            <p className={styles.card__copy}>
              Ты ответил правильно на&nbsp;
              <span className={styles.card__copy_incorrect}>
                {correctAnswers.incorrect}
              </span>
              &nbsp;вопросов и сделал{' '}
              <span className={styles.card__copy_error}>
                {correctAnswers.error}
              </span>{' '}
              ошибок.
            </p>
          )}
      </div>
    </article>
  );
};

export default Card;
