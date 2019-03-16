// GLOBAL VARIABLES
var trueCounter = 0;
var wrongCounter = 0;
var count = 0;
var gameTimer;
var time = 0;
var clockRunning = false;
var oneMinute;
var timeleft = 30;
var randomArrayItem;
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
var quest1 = {
    question: "Who is the bird?",
    answer: "Dee!"
};

var quest2 = {
    question: "Who is the Golden God?",
    answer: "Dennis!"
};
// ARRAYS
var testQuestArray = [quest1.question, quest2.question];

var testAnswerArray = [quest1.answer, quest2.answer];

// setTimeout(quizTimer);
// *PERHAPS TRY CREATING AN ARRAY IN AN OBJECT. I.E. CREATE AN OBJECT WITH AN ARRAY FOR THE PROPERTY:VALUE PAIRS*
// QUESTIONS ARE ALL OBJECT PROPERTY:VALUE PAIRS, SO CAN CALL BY OBJECT.PROPERTY
var questions = {
    cat1:["What is your name?"],
    cat2:["What is your quest?"],
    cat3:["Do you have my stapler?"],

};

// var questions2 = [
//     {q: "Who is the bird?", a: "letterHere"},
//     {q: "Who is the golden god?", a: "Dennis!"}
// ];




var answerChoices = {
    choice1: ["Greg Chu"],
    choice2: ["Learn to Code!"],
    choice3: [/* MAKE THIS TRUE/FALSE, BOOLEAN? */],
};

var images = [];

// APPEND QUESTIONS
$("#1").append(gameQuest);
$("#2").append(questions.cat2);
$("#3").append(questions.cat3);

// APEND ANSWERS
$(".answerFormat").append(answerChoices.choice1[0]);

// RANDOM PICKER. QUESTION-ANSWER COMBOS NEEDS TO BE PAIRED TOGETHER. ARRAYS OF OBJECTS RANDOMNESS GENERATOR TO PICK FROM THIS ARRAY. NO REPEATS

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
    }, 1000 * 31);
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

$(".winSelect").click(winAlert);
function winAlert () {
    alert(randomArrayItem);
};
// WORKS 03/15/2019: 
var randomArrayItem = [testQuestArray[Math.floor(Math.random() * testQuestArray.length)]];
    
    console.log(randomArrayItem);

function gameQuest() {
    randomArrayItem = [testQuestArray[Math.floor(Math.random() * testQuestArray.length)]];
    return randomArrayItem;
};
var testSplice = randomArrayItem.splice();
console.log(testSplice);
    






