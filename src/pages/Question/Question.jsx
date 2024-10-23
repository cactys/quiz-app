import { useState } from 'react';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import Answer from '@UI/Answer/Answer';

/**
 *
 * @param {string} question текст вопроса
 * @param {string} image URL картинки
 * @param {[]} answerOptions массив ответов
 * @param {() => void} handleSwitchPage void function
 * @returns {JSX.Element} JSX.Element
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
        image={{ src: image, width: 90, height: 60, placement: 'flex-start' }}
        subtitle={question}
        closeBtn={handleClose}
        answers={<Answer />}
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
