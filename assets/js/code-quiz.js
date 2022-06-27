// state vars
var currentQuestionIndex = 0;
var timerId;
var timeLimit = questions.length * 10;
var score = 0;
var highScore = JSON.parse(localStorage.getItem("highScore"));
if (!highScore) {
   highScore = 0;
}
var questionCount = questions.length;

// DOM element variables
var startBtn = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");
var feedbackEl = document.getElementById("feedback");
var timeEl = document.getElementById("time");
var timerEl = document.getElementById("timer");
var answersEl = document.getElementById("answers");
var submitBtn = document.getElementById("submit-question");
var highscoreBtn = document.getElementById("save-score");

// Start Quiz function
function startQuiz() {
   var startEl = document.getElementById("start-quiz");
   startEl.setAttribute("class", "hidden");

   // show questions
   questionsEl.removeAttribute("class");

   // set timer
   timerId = setInterval(clockTick, 1000);
   timeEl.textContent = timeLimit;

   getQuestion();
}

function getQuestion() {
   var currentQuestion = questions[currentQuestionIndex];

   var textEl = document.getElementById("question-text");
   textEl.textContent = currentQuestion.text;

   answersEl.innerHTML = "";

   currentQuestion.answers.forEach((answer) => {
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
   timeEl.textContent = timeLimit;

   if (timeLimit <= 0) {
      endQuiz();
   }
}

function answerSubmit(event) {
   // disable buttons
   var buttonEls = document.getElementsByClassName("answer");
   for (i = 0; i < buttonEls.length; i++) {
      buttonEls[i].setAttribute("disabled", "");
   }

   if (this.value !== questions[currentQuestionIndex].correctAnswer) {
      timeLimit = Math.max(timeLimit - 10, 0);
      timeEl.textContent = timeLimit;

      // feedback
      feedbackEl.textContent = "Incorrect.";
   } else {
      score += 1;
      // feedback
      feedbackEl.textContent = "Correct!";
   }

   setTimeout(() => {
      feedbackEl.textContent = "";

      currentQuestionIndex++;

      if (currentQuestionIndex >= questions.length) {
         endQuiz();
      } else {
         getQuestion();
      }
   }, 600);
}

function endQuiz() {
   // clear timer
   timeLimit = 0;
   clearInterval(timerId);

   // hide elements
   questionsEl.setAttribute("class", "hidden");
   timerEl.setAttribute("class", "hidden");

   // show results
   var resultsEl = document.getElementById("results");
   resultsEl.removeAttribute("class");

   document.getElementById("score").textContent = score;
   document.getElementById("question-count").textContent = questionCount;
   document.getElementById("highscore").textContent = highScore;
}

function saveScore() {
   if (score > highScore) {
      localStorage.setItem("highScore", JSON.stringify(score));
      console.log("Saved highscore.");
   }
}

// Start Quiz listener
startBtn.onclick = startQuiz;
// Save highscore
highscoreBtn.onclick = saveScore;
