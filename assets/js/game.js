var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');

var message = 'Time is up!';
var words = message.split(' ');

// Timer that counts down
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


startBtn.onclick = countdown;


// var startBtnEl = document.querySelector('#start-btn');
// var timerDisplay = document.querySelector('#timer');
// var counter = 10;


// // var startTimer = function() {
// //     var timerEl = document.createElement('p');
// //     timerEl.className = 'start-btn';
// //     timerEl.appendChild(timerDisplay)
// // };

// // COUNTDOWN FUNCTION
// var countdown = function(){
//     console.log(counter);
//     counter--;
//         if(counter === 0){
//             console.log('Times Up!');
//             clearInterval(startCountdown);
//         };

// };
// var startCountdown = setInterval(countdown, 1000);


// startBtnEl.addEventListener('click', countdown);



// Video in lesson 4.1.7 on callback functions gave this code
// var counter= 10
// var countdown = function() {
//     console.log(counter);
//     counter--;
//         if(counter === 0) {
//             console.log('blastoff');
//             clearInterval(startCountdown);
//         };
// };

// var startCountdown = setInterval(countdown, 1000);

// **********************************************************

// var sayHello = function() {
//     console.log('hello there');
// };

// var timedGreeting = setTimeout(sayHello, 2000);

// clearTimeout(timedGreeting);
