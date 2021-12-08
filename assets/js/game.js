var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var BtnA = document.getElementById("btn-a");
var BtnB = document.getElementById("btn-b");
var BtnC = document.getElementById("btn-c");
var BtnD = document.getElementById("btn-d");
var userScore = document.getElementById("user-score");
var questionText = document.getElementById("question-text");
var multipleChoice = document.getElementById("multichoice");

var currentQuestion = 0;
var score = 0;

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
		correctAnswer: "c",
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
		correctAnswer: "b",
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
		correctAnswer: "a",
	},
	{
		question: "How does JavaScript store dates in a date object?",
		answers: {
			optionA: "The number of milliseconds since January 1st, 1970",
			optionB: "The number of days since January 1st, 1900",
			optionC: "The number of seconds since Netscape's public stock offering",
			optionD: "None of the above",
		},
	},
	// Ans: A
];

// CREATE QUESTION FUNCTION
var createQuestion = function () {
	currentQuestion = 0;
	var questionContainerEl = document.createElement("div");
	questionContainerEl.className = "content";

	// create and display question
	var questionDisplay = document.createElement("h2");
	questionDisplay.innerHTML = questions[currentQuestion].question;
	// create multiple choice questions
};

// TIMER FUNCTION
function countdown() {
	var timeLeft = 10;

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

// on submit, show results
// submitButton.addEventListener('click', showResults);
startBtn.onclick = countdown;
console.log(countdown());
startBtn.onclick = createQuestion;
