import styles from './Question.module.css';

/**
 *
 * @param question текст вопроса, string
 * @param image? URL картинки
 * @param answerOptions массив ответов
 * @returns JSX.Element
 */

const Question = (props) => {
  const { question, image, answerOptions } = props[0];

  return (
    <>
      <div className={styles.header}>
        <img
          src={image}
          alt={question}
          className={styles.image}
          width={90}
          height={60}
        />
        <h2 className={styles.title}>{question}</h2>
      </div>
      <ul className={styles.answerList}>
        {answerOptions.map((item, index) => (
          <li className={styles.answerList__item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Question;
