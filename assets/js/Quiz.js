var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var questionEl = document.querySelector(".question-text");
var introPage = document.querySelector(".quiz-intro");
var alertEl = document.querySelector(".alert");
var highscoreBtn = document.getElementById("highscoreBtn");
var homeBtn = document.getElementById("homeBtn");
var highscoreEl = document.querySelector(".highscores");
// TODO: change variable names
var initialEl = document.querySelector(".initials");
var scoresEl = document.querySelector(".highscores");
var buttonTwo = document.querySelector("#homeBtn");
var myScore = document.querySelector(".myScore");
var finalScore = document.querySelector("#finalScore");
var resetInitials = document.querySelector("#inputEl");
var clearBtn = document.getElementById("clearBtn");
var viewScores = document.getElementById("highscore-link");
var hideH2 = document.getElementById("hide");
var resultsID = document.querySelector("#resultsID");

// QUESTION ARRAY
var questions = [
	{
		question: "Math.random() returns...",
		answers: {
			optionA: "a random number that can be any value",
			optionB: "a random number between 0 and 100",
			optionC: "a random number between 0 and 1",
			optionD: "a random number between 0 and 1000",
		},
		correctAnswer: "a random number between 0 and 1",
	},
	{
		question:
			"Which of the following type of variable is visible only within a function where it is defined?",
		answers: {
			optionA: "global variable",
			optionB: "local variable",
			optionC: "Both of the above",
			optionD: "none of the above",
		},
		correctAnswer: "local variable",
	},
	{
		question:
			"Which built-in method returns the calling string value converted to upper case?",
		answers: {
			optionA: "toUpperCase()",
			optionB: "toUpper()",
			optionC: "changeCase(case)",
			optionD: "None of the above",
		},
		correctAnswer: "toUpperCase()",
	},
	{
		question: "How does JavaScript store dates in a date object?",
		answers: {
			optionA: "The number of milliseconds since January 1st, 1970",
			optionB: "The number of days since January 1st, 1900",
			optionC: "The number of seconds since Netscape's public stock offering",
			optionD: "None of the above",
		},
		correctAnswer: "The number of milliseconds since January 1st, 1970",
	},
];

var currentQuestion = 0;
var previousQuestion = questions.length - 1;
var score = 0;
// var timeLeft = "";
var setIntervalId = "";
var highScores = [];

// start timer
function countdown() {
	var timeLeft = questions.length * 15;

	// Use the 'setInterval()' method to call a function every 1000 milliseconds
	var timedInterval = setInterval(function () {
		// As long as the 'timeLeft' is greater than 1
		if (timeLeft > 1) {
			//Set the 'textContent' of 'timerEl' to show the remaining seconds
			timerEl.textContent = timeLeft;
			// Decrement 'timeLeft' by 1
			timeLeft--;
		} else {
			// Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
			timerEl.textContent = "";
			// Use 'clearInterval()' to stop the timer
			clearInterval(timedInterval);
			// alert('Time is Up!');
		}
	}, 1000);
}

// display questions when start button clicked
function startGame() {
	console.log(currentQuestion);
	currentQuestion++;
	questionEl.innerHTML = "";
	if (currentQuestion <= previousQuestion) {
		console.log("Next Question");
		// create question container
		var questionContainer = document.createElement("div");
		questionContainer.className = "question-content row";
		// create and display question into container
		var questionDisplay = document.createElement("h2");
		questionDisplay.className = "col-12 text-center";
		questionDisplay.innerHTML = questions[currentQuestion].question;
		// create multiple choice container
		var choicesContainer = document.createElement("div");
		choicesContainer.className = "multiple-choice row";

		// create and display multiple choice questions into container
		// choice A
		var choiceA = document.createElement("button");
		choiceA.className = "answerBtn col-6 justify-content-around";
		choiceA.setAttribute("type", "button");
		choiceA.innerHTML = questions[currentQuestion].answers.optionA;

		// choice B
		var choiceB = document.createElement("button");
		choiceB.className = "answerBtn col-6 justify-content-around";
		choiceB.setAttribute("type", "button");
		choiceB.innerHTML = questions[currentQuestion].answers.optionB;

		// choice C
		var choiceC = document.createElement("button");
		choiceC.className = "answerBtn col-6 justify-content-around";
		choiceC.setAttribute("type", "button");
		choiceC.innerHTML = questions[currentQuestion].answers.optionC;

		// choice D
		var choiceD = document.createElement("button");
		choiceD.className = "answerBtn col-6 justify-content-around";
		choiceD.setAttribute("type", "button");
		choiceD.innerHTML = questions[currentQuestion].answers.optionD;

		// append to HTML
		questionEl.appendChild(questionContainer);
		questionContainer.appendChild(questionDisplay);

		questionEl.appendChild(choicesContainer);
		choicesContainer.appendChild(choiceA);
		choicesContainer.appendChild(choiceB);
		choicesContainer.appendChild(choiceC);
		choicesContainer.appendChild(choiceD);
	} else {
		endGame();
	}
	countdown();
}

// end quiz and collect time left
function endGame() {
	// TODO: change this around to look different
	clearInterval(setIntervalId);
	initialEl.classList.remove("hide");
	scoresEl.classList.remove("hide");
	buttonTwo.classList.add("hide");
	myScore.classList.remove("hide");
	finalScore.textContent = timeLeft;
}

// stores final scores
function finalScores() {
	// TODO: change variable names (li1)
	window.localStorage.getItem("high scores");
	JSON.parse(window.localStorage.getItem("high scores"));
	var highScoreArray = JSON.parse(window.localStorage.getItem("high scores"));
	resultsID.innerHTML = "";
	for (let index = 0; index < highScoreArray.length; index++) {
		const li1 = document.createElement("li");
		li1.textContent = highScoreArray[index];
		resultsID.appendChild(li1);
	}
}

// highscore form initials submition
highscoreBtn.addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	buttonTwo.classList.remove("hide");
	initialEl.classList.add("hide");
	alertEl.classList.add("hide");
	hideH2.classList.remove("hide");
	var name = document.getElementById("inputEl").value;
	var highScoreItem = `${timeLeft} ${name}`;
	var highScore1 = window.localStorage.getItem("high scores");
	if (highScore1 === null) {
		highScores = [];
	} else {
		highScores = JSON.parse(highScore1);
	}
	highScores.push(highScoreItem);
	localStorage.setItem("high scores", JSON.stringify(highScores));

	finalScores();

	resetInitials.value = "";
});

// return to home button
homeBtn.addEventListener("click", (event) => {
	introPage.classList.remove("hide");
	highscoreEl.classList.add("hide");
	myScore.classList.add("hide");
	document.getElementById("resultsID").textContent = "";
	if (timeLeft === 0) {
		clearInterval(timerEl);
	} else {
		timerEl.textContent = timeLeft--;
	}
	countdown();
});

// clear high scores btn
clearBtn.addEventListener("click", (event) => {
	localStorage.clear();
});

// navigate to highscore page
viewScores.addEventListener("click", (event) => {
	event.preventDefault();
	introPage.classList.add("hide");
	highscoreEl.classList.remove("hide");
	myScore.classList.remove("hide");
	hideH2.classList.remove("hide");
	window.localStorage.getItem("high scores");
	finalScores();
});

// answering function
document.addEventListener("click", (event) => {
	if (event.target.matches(".answerBtn")) {
		if (event.target.textContent === questions[currentQuestion].correctAnswer) {
			alertEl.textContent = "Correct!";
			startGame();
		} else {
			alertEl.textContent = "Wrong!";
			// FIXME: not subtracting time on wrong answer
			timeLeft -= 15;
			startGame();
		}
	}
});

// click start button
startBtn.addEventListener("click", (event) => {
	questionEl.classList.remove("hide");
	introPage.classList.add("hide");
	currentQuestion = -1;
	timeLeft = questions.length * 15;
	startGame();
	// countdown();
});
