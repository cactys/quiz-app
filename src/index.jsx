import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App/App';
import Welcome from './pages/Welcome/Welcome';
import Question from './pages/Question/Question';

import { mockQuestions } from './mock/mock-questions';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App children={<Question {...mockQuestions} />} />
  // </StrictMode>
);
