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
