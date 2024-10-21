import { useState } from 'react';
import Counter from '@/component/UI/Counter/Counter';
import Button from '@/component/UI/Button/Button';

import imageQuestion from '@assets/images/image__question.svg';
import Card from '@/component/UI/Card/Card';

/**
 *
 * @param {() => void} handleSwitchPage - функция для переключения страницы
 * @returns {JSX.Element} JSX.Element
 */

const Welcome = ({ handleSwitchPage }) => {
  const [count, setCount] = useState(18);

  const handleIncrementBtn = () => setCount((count) => parseInt(count) + 1);

  const handleDecrementBtn = () =>
    count > 1 ? setCount((count) => count - 1) : setCount(1);

  const onChange = (e) => setCount(e.target.value);

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
        count={count}
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
