/**
 *
 * @param {Array} arr [ questions: {question: string, correctAnswer: string, flag: string}, countries: {string}]
 * @param {number} number number
 * @returns
 */
export const getQuestionFromNumber = (arr, number) => {
  const { questions, countries } = arr;

  if (!Array.isArray(questions) || !Array.isArray(countries) || number <= 0) {
    return [];
  }

  const result = new Array();

  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());

  for (let i = 0; i < number && i < shuffledQuestions.length; i++) {
    const question = shuffledQuestions[i];
    const correctAnswer = question.correctAnswer;

    const answers = new Set();
    answers.add(correctAnswer);

    while (answers.size < 4) {
      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];
      answers.add(randomCountry);
    }

    result.push({
      question: question,
      answers: [...answers].sort(() => 0.5 - Math.random()),
    });
  }

  return result;
};

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {} random number
 */

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *
 * @param {number} number number of incorrect or error answers
 * @param {boolean} incorrect true or false
 * @returns {string} string of declension
 */
export const getDeclension = (number, incorrect) => {
  const lastNumber = number % 10;
  if (number > 10 && [11, 12, 13, 14].includes(number % 100))
    return incorrect ? 'вопросов' : 'ошибок';
  if (lastNumber === 1) return incorrect ? 'вопрос' : 'ошибку';
  if ([2, 3, 4].includes(lastNumber)) return incorrect ? 'вопроса' : 'ошибки';
  if ([5, 6, 7, 8, 9, 0].includes(lastNumber))
    return incorrect ? 'вопросов' : 'ошибок';
};
