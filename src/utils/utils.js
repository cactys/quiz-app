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
