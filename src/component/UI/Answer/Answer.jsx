import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import dataAnswer from '../../../../data/quizz_questions.json';

const Answer = () => {
  const answer = dataAnswer.questions;
  console.log(answer);

  return <div>{<RadioButton answer={'кукушачка'} />}</div>;
};

export default Answer;
