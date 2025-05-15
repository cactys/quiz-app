import { createContext, useMemo, useState } from 'react';

export const CurrentQuestionContext = createContext(null);

export const CurrentQuestionContextProvider = ({ children }) => {
  const [allQuestion, setAllQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

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
