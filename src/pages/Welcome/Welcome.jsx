import { useState } from 'react';
import Counter from '../../component/UI/Counter/Counter';
import Button from '../../component/UI/Button/Button';

import styles from './Welcome.module.css';
import imageQuestion from '../../assets/images/image__question.svg';

const Welcome = ({ imageTitle, title, subtitle, contentSubtitle }) => {
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
        alt={imageTitle}
        width={135}
        height={146}
      />
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <Counter
        subtitle={contentSubtitle}
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
