import styles from './RadioButton.module.css';

/**
 *
 * @param {string} answer string with answer text
 * @param {number} index index of answer
 * @param {(arg0: string) => void} onChangeAnswer function to change answer value
 * @returns
 */

const RadioButton = ({ answer, index, onChangeAnswer }) => {
  const handleChangeAnswer = () => {
    onChangeAnswer(answer);
  };

  return (
    <label className={styles.radio}>
      <input
        className={styles.radio__input}
        id={index}
        type="radio"
        name="answer"
        onChange={handleChangeAnswer}
      />
      <div className={styles.radio__new}>
        <span className={styles.radio__index}>{index}</span>
        <span className={styles.radio__label}>{answer}</span>
      </div>
    </label>
  );
};

export default RadioButton;
