import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@components/App/App';
import { QuestionsContext } from './contexts/QuestionsContext';
import data from '../data/quizz_questions.json';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionsContext.Provider value={data}>
      <App />
    </QuestionsContext.Provider>
  </StrictMode>
);
