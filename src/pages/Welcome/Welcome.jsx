import Counter from '@UI/Counter/Counter';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';

import imageQuestion from '@assets/images/image__question.svg';
import { useContext, useState } from 'react';
import { CounterQuestionsContext } from '@/contexts/CounterQuestionsContext';

/**
 *
 * @param {() => void} handleSwitchPage функция для переключения страницы
 * @param {object} correctAnswers {question: number, incorrect: number, error: number}
 * @param {() => void} setCountQuestion void function
 * @returns {JSX.Element} JSX.Element
 */

const Welcome = ({
  handleSwitchPage,
  handleIncrementBtn,
  handleDecrementBtn,
  onChangeCounter,
}) => {
  const { question } = useContext(CounterQuestionsContext);
  const [disableBtn, setDisableBtn] = useState(false);

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
        count={question}
        handleIncrementBtn={handleIncrementBtn}
        handleDecrementBtn={handleDecrementBtn}
        onChangeCounter={onChangeCounter}
        setDisableBtn={setDisableBtn}
      />
      <Button
        title="Начать"
        htmlType="button"
        handleButton={handleSwitchPage}
        disabled={disableBtn}
      />
    </>
  );
};

export default Welcome;
