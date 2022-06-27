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
}

// Start Quiz listener
startBtn.onclick = startQuiz;
