// DOM element variables
var startBtn = document.getElementById("start-button");

// Start Quiz function
function startQuiz() {
   var startEl = document.getElementById("start-quiz");
   startEl.setAttribute("class", "hidden");

   // show questions
   questionsEl.removeAttribute("class");

   // set timer
   timerId = setInterval(clockTick, 1000);
   timerEl.textContent = time;

   addQuestion();
}

// Start Quiz listener
startBtn.onclick = startQuiz;
