import { createContext, useMemo, useState } from 'react';
import data from '../../data/quizz_questions.json';

export const QuestionsContext = createContext(null);

export const QuestionsContextProvider = ({ children }) => {
  const [questionsData, setQuestionsData] = useState(data);

  const valueQuestionsContext = useMemo(
    () => ({ questionsData, setQuestionsData }),
    [questionsData]
  );

  return (
    <QuestionsContext.Provider value={valueQuestionsContext}>
      {children}
    </QuestionsContext.Provider>
  );
};
