import Counter from '@UI/Counter/Counter';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';

import imageQuestion from '@assets/images/image__question.svg';

/**
 *
 * @param {() => void} handleSwitchPage функция для переключения страницы
 * @param {object} correctAnswers {question: number, incorrect: number, error: number}
 * @param {() => void} setCountQuestion void function
 * @returns {JSX.Element} JSX.Element
 */

const Welcome = ({ handleSwitchPage, correctAnswers, setCountQuestion }) => {
  const handleIncrementBtn = () =>
    correctAnswers.question < 25
      ? setCountQuestion({
          ...correctAnswers,
          question: correctAnswers.question + 1,
        })
      : setCountQuestion({
          ...correctAnswers,
          question: correctAnswers.question,
        });

  const handleDecrementBtn = () =>
    correctAnswers.question > 1
      ? setCountQuestion({
          ...correctAnswers,
          question: correctAnswers.question - 1,
        })
      : setCountQuestion({ ...correctAnswers, question: 1 });

  const onChange = (e) => {
    setCountQuestion({ ...correctAnswers, question: e.target.value });
  };

  return (
    <>
      <Card
        title="Добро пожаловать"
        subtitle="на викторину по странам и столицам!"
        image={{
          src: imageQuestion,
          width: 135,
          height: 146,
          position: 'absolute',
          right: 0,
          top: -79,
        }}
      />
      <Counter
        subtitle="Выбери количество вопросов:"
        count={correctAnswers.question}
        handleIncrementBtn={handleIncrementBtn}
        handleDecrementBtn={handleDecrementBtn}
        onChange={onChange}
      />
      <Button
        title="Начать"
        htmlType="button"
        handleButton={handleSwitchPage}
      />
    </>
  );
};

export default Welcome;
