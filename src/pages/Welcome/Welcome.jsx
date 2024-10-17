import { useState } from 'react';
import Counter from '@ui/Counter/Counter';
import Button from '@ui/Button/Button';

import imageQuestion from '@assets/images/image__question.svg';
import styles from './Welcome.module.css';

/**
 *
 * @returns JSX.Element
 */

const Welcome = () => {
  const [count, setCount] = useState(18);

  const handleIncrementBtn = () => setCount((count) => parseInt(count) + 1);

  const handleDecrementBtn = () =>
    count > 1 ? setCount((count) => count - 1) : setCount(1);

  const onChange = (e) => setCount(e.target.value);

  return (
    <>
      <img
        className={styles.imageQuestion}
        src={imageQuestion}
        alt="Добро пожаловать"
        width={135}
        height={146}
      />
      <div className={styles.header}>
        <h2 className={styles.title}>Добро пожаловать</h2>
        <p className={styles.subtitle}>на викторину по странам и столицам!</p>
      </div>
      <Counter
        subtitle="Выбери количество вопросов:"
        count={count}
        handleIncrementBtn={handleIncrementBtn}
        handleDecrementBtn={handleDecrementBtn}
        onChange={onChange}
      />
      <Button title="Начать" htmlType="submit" />
    </>
  );
};

export default Welcome;
