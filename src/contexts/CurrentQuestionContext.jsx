import { getRandomQuestion } from '@/utils/utils';
import { createContext, useEffect, useMemo, useState } from 'react';

export const CurrentQuestionContext = createContext(null);

export const CurrentQuestionContextProvider = ({ children, data }) => {
  const [allQuestion, setAllQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    if (data)
      setAllQuestion(
        getRandomQuestion(
          data.questions[Math.floor(Math.random() * data?.questions.length)],
          data.countries
        )
      );
  }, [data]);

  const valueCurrentQuestionContext = useMemo(
    () => ({
      currentQuestion,
      setCurrentQuestion,
      allQuestion,
      setAllQuestion,
    }),
    [currentQuestion, allQuestion]
  );

  return (
    <CurrentQuestionContext.Provider value={valueCurrentQuestionContext}>
      {children}
    </CurrentQuestionContext.Provider>
  );
};
