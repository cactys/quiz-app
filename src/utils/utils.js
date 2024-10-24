export const getRandomQuestion = (question, answers) => {
  const answerList = new Array();

  answerList.push(question.correctAnswer + ' ' + 'true');
  while (answerList.length < 4) {
    answerList.forEach((i) => {
      answerList.indexOf(i) === answerList.lastIndexOf(i)
        ? answerList.push(answers[Math.floor(Math.random() * answers.length)])
        : answerList.push(i);
    });
  }

  return {
    question: question,
    answers: answerList.sort(() => 0.5 - Math.random()),
  };
};
