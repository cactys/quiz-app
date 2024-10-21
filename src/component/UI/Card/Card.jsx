import { useContext } from 'react';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

import styles from './Card.module.css';

/**
 *
 * @param {object} image object{src: string, width: number, height: number, position: string, top: number, right: number}
 * @param {string} title string
 * @param {string} subtitle string
 * @returns {JSX.Element} JSX.Element
 */

const Card = ({
  image,
  title,
  subtitle,
  closeBtn,
  answerOptions,
  handleAnswerChoice,
}) => {
  const currentPage = useContext(CurrentPageContext);

  return (
    <article className={styles.card}>
      {closeBtn && (
        <button className={styles['card__close-btn']} onClick={closeBtn} />
      )}
      <figure
        className={`${
          image ? styles.card__figure : styles.card__figure_disable
        }`}
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
          currentPage === 'question' ? styles.card__header_place_question : ''
        }`}
      >
        <h2 className={styles.card__title}>{title}</h2>
        <h3
          className={`${styles.card__subtitle} ${
            currentPage === 'question'
              ? styles.card__subtitle_place_question
              : ''
          }`}
        >
          {subtitle}
        </h3>
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
      </div>
    </article>
  );
};

export default Card;
