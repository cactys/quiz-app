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

const Test = ({
  handleSwitchQuestion,
  setCurrentPage,
  disableBtn,
  onChangeAnswer,
  handleClose
}) => {

  return (
    <>
      <Card
        question={<Question />}
        closeBtn={handleClose}
        answers={<Answer onChangeAnswer={onChangeAnswer} />}
      />
      <Button
        title="Ответить"
        htmlType="button"
        answerCount={true}
        disabled={disableBtn}
        handleButton={handleSwitchQuestion}
      />
    </>
  );
};

export default Test;
