import styles from './Button.module.css';

/**
 * @param handleButton ручка кнопки
 * @param title текст кнопки
 * @param htmlType тип кнопки
 * @returns JSX.Element
 */

const Button = ({ title, htmlType, handleButton, answerCount, disabled }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <button
          type={htmlType}
          className={`${styles.button} ${
            disabled ? styles.button_disabled : ''
          }`}
          onClick={handleButton}
          disabled={disabled}
        >
          {title}
        </button>
        <p
          className={`${styles.subtitle} ${
            disabled ? styles.subtitle_disabled : ''
          }`}
        >
          или нажми <span className={styles.span}>Enter &#8629;</span>
        </p>
      </div>
      {answerCount && <p className={styles.answerCount}>1 / 18</p>}
    </div>
  );
};

export default Button;
