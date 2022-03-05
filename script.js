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
    var howMany = 8;
    var questionIndex = "";
    var activeQuestion = "";

    var timer = 60;
    var score = 00;
    var winners = [];

// Preset Elements
    var body = document.body;
    var scoreboard = document.querySelector("#scoreboard");
    var newGameEl = document.createElement("button");
    var h1El = document.createElement("h1");
    var timerBoxEl = document.createElement("div");
    var questionBoxEl = document.createElement("div");
    var questionBoxContainerEl = document.createElement("div");
    var answerBoxEl = document.createElement("div");
    var answersEl = document.createElement("ul");
    var answerOneEl = document.createElement("button");
    var answerTwoEl = document.createElement("button");
    var answerThreeEl = document.createElement("button");
    var answerFourEl = document.createElement("button");
    var scoreTableEl = document.createElement("div");
    var scoreListEl = document.createElement("ul");
    var userEntryEl = document.createElement("li");

// Set Up Welcome Page
    questionBoxEl.textContent = "When you click the NEW GAME button below, the game will begin after a 5 second countdown. Missing questions will deduct time. Your score will equal the time you have left after completing all questions.";
    answerOneEl.textContent = "START GAME";
    newGameEl.textContent = "NEW GAME";
    body.appendChild(questionBoxContainerEl);
    questionBoxContainerEl.appendChild(questionBoxEl);
    body.appendChild(timerBoxEl);
    body.appendChild(h1El);
    h1El.textContent = "Time: 60 | Score: 00";
    body.appendChild(answerBoxEl);
    answerBoxEl.appendChild(answersEl);
    answerBoxEl.setAttribute("style",  "visibility:hidden");
    answersEl.appendChild(answerOneEl);
    answersEl.appendChild(answerTwoEl);
    answersEl.appendChild(answerThreeEl);
    answersEl.appendChild(answerFourEl);
    questionBoxContainerEl.setAttribute("id", "questionboxcontainer");
    questionBoxEl.setAttribute("id", "questionbox");
    answerBoxEl.setAttribute("id", "answerbox");
    timerBoxEl.appendChild(newGameEl);
    newGameEl.setAttribute("id", "new");

// Set Initial Timer Value & Display Timer
    var newTime = function() {
    h1El.textContent = "Time: " + timer + " | Score: " + score + " | Question: (" + howMany + " of 8)"
}

var gametimer = function () {
var gametime = setInterval(function () {
    if (timer && howMany>0) {
        h1El.textContent = "Time: " + timer + " | Score: " + score + " | Question: (" + howMany + " of 8)"
        timer--;
    }
    else if (howMany<1) {
        clearInterval(gametime);
        h1El.textContent = "Score: " + score; 
        endgame();
    }
    else {
        
        clearInterval(gametime);
        h1El.textContent = "Score: " + score;   
        clear();
        endgame();

    }
}, 1000);
}


// High Score & Endgame





var endgame = function() {
    var scores = JSON.parse(localStorage.getItem('scores'));
    

    clear();
    h1El.textContent = "Score: " + score;
    var userInit = prompt('Please enter your initials.'); 
    // body.appendChild(scoreTableEl);
    // scoreTableEl.appendChild(scoreListEl);
    // scoreListEl.textContent = "Player:" + userInit + ", Score: " + score
    var scoreId = userInit + '-' + (Math.floor(Math.random() * 10000));
    var userDataObj = { userInit, score, scoreId }
    console.log(userDataObj);
    scores.push(userDataObj);
    console.log(scores);

    var scoreString = JSON.stringify(scores);
    localStorage.setItem('scores', scoreString);

    getScores();

    
}

var createList = function(userDataObj) {
    var scoreEl = document.querySelector("#scores");


    var userInfoEl = document.createElement("li");
    userInfoEl.innerHTML =
     "<h3>" + userDataObj.userInit + "</h3><h4>" + userDataObj.score + "</h4><hr>";
    scoreEl.appendChild(userInfoEl);
}

var getScores = function() {
    var scoreList = localStorage.getItem('scores');
    var myscores = JSON.parse(scoreList);
    var reversed = myscores.reverse();
    reversed.splice(5);
    console.log('myscores', myscores);

    for (var i = 0; i < myscores.length; i++) {
        // pass each task object into the `createTaskEl()` function
        createList(myscores[i]);

    }
      
   

    // var paragraph = document.createElement("p");
    // var infor = document.createTextNode(myscores);
    // paragraph.appendChild(infor);
    // scoreboard.appendChild(paragraph);
    
}
  






// Question Mechanics

var getRandomQuestion = function() {
   var ranQ = [Math.floor(Math.random()*questionPool.length)];
   questionIndex = ranQ;
   return questionPool[ranQ];
}

var clear = function() {
    questionBoxContainerEl.removeChild(questionBoxEl);
    body.removeChild(answerBoxEl);
    answerBoxEl.removeChild(answersEl);
    answersEl.removeChild(answerOneEl);
    answersEl.removeChild(answerTwoEl);
    answersEl.removeChild(answerThreeEl);
    answersEl.removeChild(answerFourEl);

}

var newQuestion = function() {
    if (timer < 1 || questionPool.length === 0) {
        endgame();
    }
    else {
    clear();
    body.appendChild(questionBoxContainerEl);
    questionBoxContainerEl.appendChild(questionBoxEl);
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

var startGame = function() {
    gametimer();
    newQuestion();
}

// Handle Clicks
    var newEl = document.querySelector("#new");
    var container = document.querySelector("#answerbox");   

    newEl.addEventListener("click", function(){
        startGame();
        newGameEl.remove();
    });



// Check Answer upon Selection
container.addEventListener("click", function(event) {
    var element = event.target;
    var val = element.dataset.number;
    if (timer - element.dataset.time > 0) {
        timer = timer - element.dataset.time;
        newTime();
        howMany--;
        console.log(howMany);
        }
        else {
            endgame();
        }
    if (element.dataset.time < 0) {
        score = score - element.dataset.time;
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

// BUG: when you get -10 but dont have 10 you dont lose points bc it cant go below zero
