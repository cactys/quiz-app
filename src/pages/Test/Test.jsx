import { useState } from 'react';
import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';
import Answer from '@UI/Answer/Answer';
import Question from '@/components/UI/Question/Question';

/**
 *
 * @param {string} question текст вопроса
 * @param {string} image URL картинки
 * @param {[]} answerOptions массив ответов
 * @param {() => void} handleSwitchPage void function
 * @returns {JSX.Element} JSX.Element
 */

const Test = ({ handleSwitchPage, setCurrentPage }) => {
  const [disableBtn, setDisableBtn] = useState(true);

  const handleClose = () => {
    setCurrentPage('start');
  };

  return (
    <>
      <Card
        question={<Question />}
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

export default Test;
