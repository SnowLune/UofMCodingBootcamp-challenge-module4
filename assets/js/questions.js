class Question {
   constructor(t, answers, correctAnswerIndex) {
      this.text = t;
      this.answers = answers;
      this.correctAnswer = answers[correctAnswerIndex];
   }
}

questions = [
   new Question(
      "Which of the following is NOT a basic data type?",
      ["numbers", "date", "null", "boolean"],
      1
   ),

   new Question(
      "JavaScript is a...",
      ["compiled language", "interpreted language"],
      1
   ),
   new Question(
      "JavaScript is a strongly typed language.",
      ["true", "false"],
      1
   ),
   new Question("JavaScript only runs in browsers.", ["true", "false"], 1)
];
