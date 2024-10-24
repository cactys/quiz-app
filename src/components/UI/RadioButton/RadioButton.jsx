import styles from './RadioButton.module.css';

const RadioButton = ({ answer, index }) => {
  return (
    <label className={styles.radio}>
      <input
        className={styles.radio__input}
        id="answer"
        type="radio"
        name={answer}
      />
      <div className={styles.radio__new}>
        <span className={styles.radio__index}>{index}</span>
        <span className={styles.radio__label}>{answer}</span>
      </div>
    </label>
  );
};

export default RadioButton;
