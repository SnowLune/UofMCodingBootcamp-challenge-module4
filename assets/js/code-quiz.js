// state vars
var currentQuestionIndex = 0;
var timerId;
var timeLimit = questions.length * 10;

// DOM element variables
var startBtn = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var answersEl = document.getElementById("answers");
var submitBtn = document.getElementById("submit-question");

// Start Quiz function
function startQuiz() {
   var startEl = document.getElementById("start-quiz");
   startEl.setAttribute("class", "hidden");

   // show questions
   questionsEl.removeAttribute("class");

   // set timer
   timerId = setInterval(clockTick, 1000);
   timerEl.textContent = timeLimit;

   getQuestion();
}

function getQuestion() {
   var currentQuestion = questions[currentQuestionIndex];

   var textEl = document.getElementById("question-text");
   textEl.textContent = currentQuestion.text;

   answersEl.innerHTML = "";

   currentQuestion.answers.forEach((answer, i) => {
      // Create simple button for every possible answer
      var answerOption = document.createElement("button");
      answerOption.setAttribute("class", "answer");
      answerOption.setAttribute("value", answer);
      answerOption.textContent = answer;

      answerOption.onclick = answerSubmit;

      answersEl.appendChild(answerOption);
   });
}

function clockTick() {
   timeLimit--;
   timerEl.textContent = timeLimit;

   if (timeLimit <= 0) {
      // add end quiz function
   }
}

function answerSubmit(event) {
   if (this.value !== questions[currentQuestionIndex].correctAnswer) {
      timeLimit = Math.max(timeLimit - 10, 0);
      timerEl.textContent = timeLimit;
   } 
   else {

   }

   currentQuestionIndex++;

   if (currentQuestionIndex >= questions.length) {
      endQuiz();
   }
   else {
      getQuestion();
   }
}

// Start Quiz listener
startBtn.onclick = startQuiz;
