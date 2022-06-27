// state vars
var currentQuestionIndex = 0;
var timerId;
var timeLimit = questions.length * 10;

// DOM element variables
var startBtn = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit-question");

// Start Quiz function
function startQuiz() {
   var startEl = document.getElementById("start-quiz");
   startEl.setAttribute("class", "hidden");

   // show questions
   questionsEl.removeAttribute("class");

   // set timer
   timerId = setInterval(clockTick, 1000);
   timerEl.textContent = time;

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
      answerOption.textContent = i + 1 + answer;

      answerOption.onclick = answerSubmit;

      answersEl.appendChild(answerOption);
   });
}

function clockTick() {
   time--;
   timerEl.textContent = timeLimit;

   if (timeLimit <= 0) {
      // add end quiz function
   }
}

// Start Quiz listener
startBtn.onclick = startQuiz;
