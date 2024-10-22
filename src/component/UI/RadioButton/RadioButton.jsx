import React from 'react';

const RadioButton = ({ answer }) => {
  return (
    <div>
      <input id="answer" type="radio" value={answer} />
      <label htmlFor="answer">{answer}</label>
    </div>
  );
};

export default RadioButton;
