// GLOBAL VARIABLES
var rightCounter = 0;
var wrongCounter = 0;
var count = 0;
var gameTimer;
var time = 0;
var clockRunning = false;
var oneMinute;
var timeleft = 60;
// var seconds = Math.floor((t % (1000 * 60)) / 1000);

// setTimeout(quizTimer);
// *PERHAPS TRY CREATING AN ARRAY IN AN OBJECT. I.E. CREATE AN OBJECT WITH AN ARRAY FOR THE PROPERTY:VALUE PAIRS*
// QUESTIONS ARE ALL OBJECT PROPERTY:VALUE PAIRS, SO CAN CALL BY OBJECT.PROPERTY
var questions = {
    cat1:["What is your name?"],
    cat2:["What is your quest?"],
    cat3:["Do you have my stapler?"],

};

var questions2 = {


};

var answerChoices = {
    choice1: ["Greg Chu"],
    choice2: ["Learn to Code!"],
    choice3: [/* MAKE THIS TRUE/FALSE, BOOLEAN? */],
};

var images = [];

// APPEND QUESTIONS
$("#1").append(questions.cat1);
$("#2").append(questions.cat2);
$("#3").append(questions.cat3);

// APEND ANSWERS
$(".answerFormat").append(answerChoices.choice1[0]);

// RANDOM PICKER. QUESTION-ANSWER COMBOS NEEDS TO BE PAIRED TOGETHER. ARRAYS OF OBJECTS RANDOMNESS GENERATOR TO PICK FROM THIS ARRAY

// TIMER
/* var timeleft = 60;
var downloadTimer = setInterval(function(){
  $("#countdown").text(` ${timeleft} seconds remaining `);
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    $("#countdown").text("Finished")
  }
}, 1000); */
/////////////////
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
// THIS WORKS 03/14/2019; HOWEVER, THERE IS A SLIGHT DELAY WITH RUNNING DOWNLOADTIMER:
$("#start").click(start);
function start(quizTimer, gameClock) {
    quizTimer.disabled = true;
    setTimeout(function(){
        quizTimer.disabled = false;
        alert("UP! TIME IS UP!")
    }, 1000 * 60);
    console.log(quizTimer);
    var gameClock = setInterval(function(){
        $("#countdown").text(` ${timeleft} seconds remaining `);
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(gameClock);
          $("#countdown").text("Finished")
        }
      }, 1000);
};





