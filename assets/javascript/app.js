// GLOBAL VARIABLES
var trueCounter = 0;
console.log(trueCounter);
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

var sunny = [
    {q: "Who is the bird?", a: "Dee"},
    {q: "Who is the golden god?", a: "Dennis"},
    {q: "Whoo pooped the bed", a: "Frank"},
    {q: "Who slept with Dennis' prom date?", a: "MacDonald"},
    {q: "Dayman, fighter of the nightman?", a: "True", a2: "False"},
];


var choices = ["Dee", "Dennis", "Frank", "MacDonald", "Charlie", "Rickety Cricket", "Artemis", 
             "Doyle McPoyle", "Waitress", "Maureen Ponderosa", "The Lawyer", "Liam McPoyle", 
             "Bill Ponderosa", "Gail the Snail", "Charlie's Mom", "Luther", "Jack Kelly"];

var images = [];

// APPEND QUESTIONS
$("#dee").append(sunny[0].q);
$("#dennis").append(sunny[1].q);
$("#frank").append(sunny[2].q);
$("#mac").append(sunny[3].q);
$("#charlie").append(sunny[4].q);

// APEND CHOICES
$("#d1").append(choices[0]);
$("#d2").append(choices[5]);
$("#d3").append(choices[11]);
$("#d3").append(choices[15]);


$("#d2a").append(choices[7]);
$("#d2b").append(choices[8]);
$("#d2c").append(choices[1]);
$("#d2d").append(choices[12]);

$("#f1").append(choices[12]);
$("#f2").append(choices[2]);
$("#f3").append(choices[6]);
$("#f4").append(choices[16]);

$("#m1").append(choices[10]);
$("#m2").append(choices[3]);
$("#m3").append(choices[2]);
$("#m4").append(choices[14]);

$("#c1").append(sunny[4].a);
$("#c2").append(sunny[4].a2);



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
    trueCounter += 1;
    console.log(trueCounter);
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
    






