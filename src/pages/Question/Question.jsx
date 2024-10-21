import Button from '@/component/UI/Button/Button';

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
        <button type="button" className={styles.closeBtn}>
          Закрыть
        </button>
      </div>
      <ul className={styles.answerList}>
        {answerOptions.map((item, index) => (
          <li className={styles.answerItem} key={index}>
            <button type="button" className={styles.answerBtn}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <Button
          title="Ответить"
          htmlType="submit"
          answerCount={true}
          disabled={true}
        />
      </div>
    </>
  );
};

export default Question;
