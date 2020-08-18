var startButton = document.getElementById("start")
var questionScreen = document.getElementById("gameField")
var secondsLeft = 30
var answersEl = document.getElementById("answers")
var timer
var currentQuestion = 0
function time() {
  timer = setInterval(function () {
    secondsLeft--
    document.getElementById("timer").textContent = "Time: " + secondsLeft + " sec"
    if (secondsLeft === 0) {
      clearInterval(timer)
      console.log('end game')
      alert("game over!")
    }

  }, 1000)
}

function showQuestion() {
  var questionEl = document.getElementById("question")
  answersEl.innerHTML = ""
  questionEl.textContent = questions[currentQuestion].question
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    var button = document.createElement("button")
    button.textContent = questions[currentQuestion].answers[i]
    button.setAttribute('value', i)
    button.classList.add("answer", "btn", "btn-success")
    answersEl.appendChild(button)
  }

}

function init() {
  //start timer
  time()
  //make welcome screen invisible
  var startScreen = document.getElementById("startScreen")
  startScreen.setAttribute("class", "d-none")
  //display first question
  questionScreen.classList.remove("d-none")
  showQuestion()
}

function checkAnswer() {
  if (!event.target.classList.contains('answer')) return;
  var userGuess = parseInt(event.target.value)
  if (userGuess !== questions[currentQuestion].correct) {
    secondsLeft = secondsLeft - 15
    console.log('you are wrong')
  }
  currentQuestion++
  showQuestion()

}

answersEl.addEventListener("click", checkAnswer)
startButton.addEventListener("click", init)


function checkAnswer(event) {
  correctAnswer = questions[currentQuestion].correct;
  console.log(parseInt(event.target.value), correctAnswer)
  if (parseInt(event.target.value) === correctAnswer) {
    console.log("correct");
  } else {
    console.log("wrong")
    secondsLeft -= 10;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function showScore() {
  clearInterval(timerInterval);
  quizQuestionsEl.removeAttribute("class");
  quizQuestionsEl.setAttribute("class", "hide");
  quizEndEl.removeAttribute("class");
  quizEndEl.setAttribute("class", "row");
  scoreEL.textContent = "Time Left: " + timeLeft
}
//saveScoreEl.addEventListener("click", saveScore)
function saveScore() {
  var highScores = JSON.parse(localStorage.getItem("highscores")) || []
  var initials = initialsEl.value
  var newScore = { initials: initials, score: timeLeft }
  highScores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(highScores))
  window.location.href = "scores.html";
  loadScores()
}
function loadScores() {
  var highScores = JSON.parse(localStorage.getItem("highscores")) || []
  highScores.sort(function (a, b) {
    return b.score - a.score;
  })
  var highscoreEL = document.getElementById("highscores");
  for (var i = 0; i < highScores.length; i++) {
    var liTag = document.createElement("li");
    liTag.textContent = highScores[i].score + " - " + highScores[i].initials;
    highscoreEL.appendChild(liTag)
  }
}