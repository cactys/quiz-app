import { createContext, useMemo, useState } from 'react';

export const CounterQuestionsContext = createContext(null);

export const CounterQuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [incorrectQuestions, setIncorrectQuestions] = useState(0);
  const [errorQuestions, setErrorQuestions] = useState(0);
  const [minQuestions, setMinQuestions] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(1);
  const [disableBtn, setDisableBtn] = useState(true);

  const ValueCounterQuestionsContext = useMemo(
    () => ({
      questions,
      setQuestions,
      questionNumber,
      setQuestionNumber,
      incorrectQuestions,
      setIncorrectQuestions,
      errorQuestions,
      setErrorQuestions,
      minQuestions,
      setMinQuestions,
      maxQuestions,
      setMaxQuestions,
      disableBtn,
      setDisableBtn,
    }),
    [
      questions,
      questionNumber,
      incorrectQuestions,
      errorQuestions,
      minQuestions,
      maxQuestions,
      disableBtn,
    ]
  );

  return (
    <CounterQuestionsContext.Provider value={ValueCounterQuestionsContext}>
      {children}
    </CounterQuestionsContext.Provider>
  );
};
