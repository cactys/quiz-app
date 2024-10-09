import styles from './Button.module.css';

/**
 * @param handleButton ручка кнопки
 * @param title текст кнопки
 * @param type тип кнопки
 * @returns JSX.Element
 */

const Button = ({ title, type, handleButton }) => {
  return (
    <div className={styles.wrapper}>
      <button type={type} className={styles.button} onClick={handleButton}>
        {title}
      </button>
      <p className={styles.subtitle}>
        или нажми <span className={styles.span}>Enter &#8629;</span>
      </p>
    </div>
  );
};

export default Button;
