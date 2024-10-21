import { useState } from 'react';
import Button from '@/component/UI/Button/Button';

import styles from './Question.module.css';
import Card from '@/component/UI/Card/Card';

/**
 *
 * @param question текст вопроса, string
 * @param image? URL картинки
 * @param answerOptions массив ответов
 * @returns JSX.Element
 */

const Question = (props) => {
  const [disableBtn, setDisableBtn] = useState(true);
  const { question, image, answerOptions } = props[0];
  const { handleSwitchPage } = props;

  const handleDisableBtn = () => {
    setDisableBtn(!disableBtn);
  };

  const handleClose = () => {};

  return (
    <>
      <Card
        image={{ src: image, width: 90, height: 60 }}
        subtitle={question}
        closeBtn={handleClose}
        answerOptions={answerOptions}
        handleAnswerChoice={handleDisableBtn}
      />
      <Button
        title="Ответить"
        htmlType="button"
        answerCount={true}
        disabled={disableBtn}
        handleButton={handleSwitchPage}
      />
    </>
  );
};

export default Question;
