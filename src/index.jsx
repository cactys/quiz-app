import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App/App';
import Welcome from './pages/Welcome/Welcome';
import Question from './pages/Question/Question';

import { mockAnswers, mockQuestions } from './mock/mock';
import './index.css';
import Result from './pages/Result/Result';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App children={<Question {...mockQuestions} />} /> */}
    {/* <App children={<Welcome />} /> */}
    <App children={<Result {...mockAnswers} />} />
  </StrictMode>
);
