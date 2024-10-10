# Владимир
## katleta

### 🔧 Инструкция:
1. Установите зависимости:
```sh
    npm i
```
2. Запустить проект:
```sh
    npm run dev
```
3. Инструкция по смене компонентов для проверки

3.1. Добро пожаловать
  + Импортировать в index.jsx компонент `<Welcome />`.
```js
import Welcome from './pages/Welcome/Welcome';

<App children={<Welcome />} />
```
3.2. Вопросы
  + Импортировать в index.jsx компонент `<Question />` в пропсы добавить mock данные `{...mockQuestions}` предварительно импортировав и в index.jsx.
```js
import Question from './pages/Question/Question';
import { mockQuestions } from './mock/mock';

<App children={<Question {...mockQuestions} />} />
```
3.2. Результат
  + Импортировать в index.jsx компонент `<Result />` в пропсы добавить mock данные `{...mockAnswers}`, что бы переключаться между страницами, в mock.js достаточно добавить true или false.
```js
import Result from './pages/Result/Result';
import { mockAnswers } from './mock/mock';

<App children={<Result {...mockAnswers} />} />
```
`mock.js`
```js
// пример включения страницы с частично правильными ответами
export const mockAnswers = [
  {
    answersPartiallyCorrect: true, // частично правильные ответы
    result: {
      incorrect: '12',
      error: '6',
    },
    answersCorrect: false, // полностью плавильные ответы
    answersIncorrect: false, // правильных ответов нет
  },
];
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
