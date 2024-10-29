import { useContext } from 'react';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

import styles from './Card.module.css';

/**
 *
 * @param {object} image object - image props for card component
 * @param {string} title title string for card component
 * @param {string} subtitle subtitle string for card component
 * @param {() => void} closeBtn closeBtn function callback for card component
 * @param {JSX.Element} question JSX.Element for card component
 * @param {JSX.Element} children JSX.Element for card component
 * @returns {JSX.Element} JSX.Element - card component
 */

const Card = ({ image, title, subtitle, closeBtn, question, children }) => {
  const { currentPage } = useContext(CurrentPageContext);

  return (
    <article className={styles.card}>
      {closeBtn && (
        <button className={styles['card__close-btn']} onClick={closeBtn} />
      )}
      {question ? (
        question
      ) : (
        <>
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
              currentPage === 'result' ? styles.card__header_place_result : ''
            }`}
          >
            {title && <h2 className={styles.card__title}>{title}</h2>}
            {subtitle && <h3 className={styles.card__subtitle}>{subtitle}</h3>}
          </header>
        </>
      )}
      <div className={styles.card__body}>{children}</div>
    </article>
  );
};

export default Card;
