var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var myQuestions = [
    {
        question: 'Math.random() returns...',
        answers: {
            a: 'a random number that can be any value',
            b: 'a random number between 0 and 100',
            c: 'a random number between 0 and 1',
            d: 'a random number between 0 and 1000'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which of the following type of variable is visible only within a function where it is defined?',
        answers: {
            a: 'global variable',
            b: 'local variable',
            c: 'Both of the above',
            d: 'none of the above'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Which built-in method returns the calling string value converted to upper case?',
        answers: {
            a: 'toUpperCase()',
            b: 'toUpper()',
            c: 'changeCase(case)',
            d: 'None of the above'
        },
        correctAnswer: 'a'
    },
    {
        question: 'How does JavaScript store dates in a date object?',
        answers: {
            a: 'The number of milliseconds since January 1st, 1970',
            b: 'The number of days since January 1st, 1900',
            c: 'The number of seconds since Netscape\'s public stock offering',
            d: 'None of the above'
        },
    }
    // Ans: A
];

var message = 'Time is up!';
var words = message.split(' ');

// TIMER FUNCTION
function countdown() {
    var timeLeft = 10;

    // Use the 'setInterval()' method to call a function every 1000 milliseconds
    var timedInterval = setInterval(function() {
        // As long as the 'timeLeft' is greater than 1
        if (timeLeft > 1) {
            //Set the 'textContent' of 'timerEl' to show the remaining seconds
            timerEl.textContent = timeLeft;
            // Decrement 'timeLeft' by 1
            timeLeft--;
        } else {
            // Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
            timerEl.textContent = '';
            // Use 'clearInterval()' to stop the timer
            clearInterval(timedInterval);
            // alert('Time is Up!');
        }
    }, 1000);
};

function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

function showResults(){}

// display quiz right away
buildQuiz();



// on submit, show results
// submitButton.addEventListener('click', showResults);
startBtn.onclick = countdown;


