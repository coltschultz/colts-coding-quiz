
// Question List & Other Question Related Global Variables
    var q1 = {
        q: "q1 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q2 = {
        q: "q2 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q3 = {
        q: "q3 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q4 = {
        q: "q4 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q5 = {
        q: "q5 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q6 = {
        q: "q6 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q7 = {
        q: "q7 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var q8 = {
        q: "q8 Which answer is correct?",
        a1: "Incorrect",
        a1t: 10,
        a2: "Correct",
        a2t: -10,
        a3: "Incorrect",
        a3t: 10,
        a4: "Incorrect",
        a4t: 10
    }

    var questionPool = [q1, q2, q3, q4, q5, q6, q7, q8];
    var questionIndex = "";
    var activeQuestion = "";

// Preset Elements
    var body = document.body;
    var newGameEl = document.createElement("button");
    var h1El = document.createElement("h1");
    var timerBoxEl = document.createElement("div");
    var questionBoxEl = document.createElement("div");
    var answerBoxEl = document.createElement("div");
        answerBoxEl.setAttribute("id", "answerbox")
    var answersEl = document.createElement("ul");
    var answerOneEl = document.createElement("button");
    var answerTwoEl = document.createElement("button");
    var answerThreeEl = document.createElement("button");
    var answerFourEl = document.createElement("button");

// Set Up Welcome Page
    questionBoxEl.textContent = "When you click the NEW GAME button below, the game will begin after a 5 second countdown. Missing questions will deduct time. Your score will equal the time you have left after completing all questions.";
    answerOneEl.textContent = "START GAME";
    newGameEl.textContent = "NEW GAME";
    body.appendChild(newGameEl);
    newGameEl.setAttribute("id", "new")
    body.appendChild(questionBoxEl);
    body.appendChild(h1El);
    body.appendChild(timerBoxEl);
    body.appendChild(answerBoxEl);
    answerBoxEl.appendChild(answersEl);
    answerBoxEl.setAttribute("style",  "visibility:hidden");
    answersEl.appendChild(answerOneEl);
    answersEl.appendChild(answerTwoEl);
    answersEl.appendChild(answerThreeEl);
    answersEl.appendChild(answerFourEl);
    
// Set Initial Timer Value & Display Timer
var gametimer = function () {
var gametime = setInterval(function () {
    h1El.textContent = "Timer: " + timer;
    timer--;

    if (timer === 0) {
        endgame();
    }
}, 1000);
}

var countdown = function() {
   
    var newTime = setInterval(function() {
        h1El.textContent = "Timer: " + timer;
        timer--;
        
        if (timer === 0) {
            timer = 60;
            gametimer();
            newQuestion();
        }
    }, 1000);
}




    var timer = 05;
    var newTime = function() {
        h1El.textContent = "Timer: " + timer
    }
    newTime();

var getRandomQuestion = function() {
   var ranQ = [Math.floor(Math.random()*questionPool.length)];
   questionIndex = ranQ;
   return questionPool[ranQ];
}

var clear = function() {
    body.removeChild(questionBoxEl);
    body.removeChild(answerBoxEl);
    answerBoxEl.removeChild(answersEl);
    answersEl.removeChild(answerOneEl);
    answersEl.removeChild(answerTwoEl);
    answersEl.removeChild(answerThreeEl);
    answersEl.removeChild(answerFourEl);

}

var endgame = function() {
    alert('Game Over');
    clearInterval(gametime);
}

var newQuestion = function() {
    if (timer <= 1 | questionPool.length === 0) {
        endgame();
    }
    else {
    clear();
    body.appendChild(questionBoxEl);
    body.appendChild(answerBoxEl);
    answerBoxEl.setAttribute("style",  "visibility:visible");
    answerBoxEl.appendChild(answersEl);
    answersEl.appendChild(answerOneEl);
    answersEl.appendChild(answerTwoEl);
    answersEl.appendChild(answerThreeEl);
    answersEl.appendChild(answerFourEl);
    activeQuestion = getRandomQuestion();
    questionBoxEl.textContent = activeQuestion.q;
    answerOneEl.textContent = activeQuestion.a1;
    answerOneEl.setAttribute("data-time", activeQuestion.a1t);
    answerTwoEl.textContent = activeQuestion.a2;
    answerTwoEl.setAttribute("data-time", activeQuestion.a2t);
    answerThreeEl.textContent = activeQuestion.a3;
    answerThreeEl.setAttribute("data-time", activeQuestion.a3t);
    answerFourEl.textContent = activeQuestion.a4;
    answerFourEl.setAttribute("data-time", activeQuestion.a4t);
    console.log(activeQuestion.q);
    questionPool.splice(questionPool.indexOf(activeQuestion), 1);
}
    
}







// Check User's Answer onClick

// Display Start Screen





// Display Start Button

// Make a new question
//    var newQuestion = function() {
    // questionBoxEl.textContent = q1.q;
    // answerOneEl.textContent = q1.a1;

    // answerOneEl.setAttribute("id", "answer");
    // answerOneEl.setAttribute("data-time", q1.a1t);
//    }


    

// Handle Clicks
    var newEl = document.querySelector("#new");
    var container = document.querySelector("#answerbox");   

    newEl.addEventListener("click", function(){
        countdown();
        newGameEl.remove();
    });

    // Check Answer upon Selection
    container.addEventListener("click", function(event) {
        var element = event.target;
        var val = element.dataset.number;
        if (timer - element.dataset.time > 0) {
            timer = timer - element.dataset.time;
            newTime();
            }
            else {
                // player is out of time, need to set conditions for this
                // endgame();
            }
        newQuestion();
      });

// 3 table rows: timer, question, answers
// When User Clicks Button:
// Count Down Timer for 5 Seconds
// User Timers-Intervals activity
// Start the game
// Set the timer to 60 seconds
// newQuestion()
// If user selects incorrect answer, deduct 5 seconds, newQuestion()
// use data-attributes activity to adjust score
// If user selects correct answer, newQuestion()


// When timer or questions equal to 0 seconds, endGame()
