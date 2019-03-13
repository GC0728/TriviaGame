// GLOBAL VARIABLES
var rightAnswer = 0;
var wrongAnswer = 0;
var count = 0;

var time = 0;
var clockRunning = false;
var oneMinute;
// setTimeout(quizTimer);

// TIMER 
/* THIS IS CAUSING IMMEDIATE ALERT ON BUTTON PRESS. CLICK IS RUNNING CONCURRENTLY WITH SETTIMEOUT FUNCTION
setTimeout(oneMinute, 5000);
function oneMinute() {
    alert("This Works!");
    console.log(oneMinute);
}; */
/* var timer = {
    quizTimer: setTimeout(function(timer){
    alert("UP! Time is UP!")
}, 5000)}; */
// THIS WORKS 03/13/2019:
$("#start").click(start);
function start(quizTimer) {
    quizTimer.disabled = true;
    setTimeout(function(){
        quizTimer.disabled = false;
        alert("UP! TIME IS UP!")
    }, 5000);
};

// function setTimeout() {
//     alert("Correct Answers Incorrect Answers"
//     )
// };




