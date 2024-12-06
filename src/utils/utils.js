/**
 *
 * @param {object} question {question: string, correctAnswer: string, flag:string}
 * @param {Array} answers [string]
 * @returns
 */

export const getRandomQuestion = (question, answers) => {
  const answerList = new Array();

  answerList.push(question.correctAnswer);
  while (answerList.length < 4) {
    answerList.forEach((item, index) => {
      answerList.indexOf(item) === answerList.lastIndexOf(item)
        ? answerList.push(answers[Math.floor(Math.random() * answers.length)])
        : answerList.push(answers[index]);
    });
  }

  return {
    question: question,
    answers: answerList.sort(() => 0.5 - Math.random()),
  };
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
