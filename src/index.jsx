import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@components/App/App';
import { QuestionsContextProvider } from './contexts/QuestionsContext';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionsContextProvider>
      <App />
    </QuestionsContextProvider>
  </StrictMode>
);
