// GLOBAL VARIABLES
var rightAnswer = 0;
var wrongAnswer = 0;
var count = 0;

var time = 0;
var clockRunning = false;
var oneMinute;
// setTimeout(quizTimer);
// *PERHAPS TRY CREATING AN ARRAY IN AN OBJECT. I.E. CREATE AN OBJECT WITH AN ARRAY FOR THE PROPERTY:VALUE PAIRS*
var questions = {
    category1:["What is your name?"],
    category2:["What is your quest?"],
    category3:["Do you have my stapler?"],

};

$("#1").append(questions.category1[0]);
$("#2").append(questions.category2[0]);
$("#3").append(questions.category3[0]);
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




