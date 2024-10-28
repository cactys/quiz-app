import { createContext } from 'react';
import data from '../../data/quizz_questions.json';

export const QuestionsContext = createContext(data);
