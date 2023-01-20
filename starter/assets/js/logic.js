// 1. Start button that goes to first question when clicked.

// 2. Multiple choice questions with buttons for each answer.

// 3. When answer is clicked, show correct or wrong, move to next question.

// 4. If answer was incorrect subtract time from the clock.

// 5. When all questions are answered || timer === 0 end quiz.

// 6. When the game ends, score is displayed and user can input initials.

// 7. Submit button goes to highscores.


// variable declarations
var startButton = document.querySelector('#start');
var startScreen = document.querySelector("#start-screen");
var questionsContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesContainer = document.querySelector("#choices");
var timerContainer = document.querySelector("#timer");
var endScreenContainer = document.querySelector("#end-screen");
var finalScoreContainer = document.querySelector("#final-score");
var score = 0;


// questions array
var title = [];
for (let i = 0; i<questions.length; i++) {
    tempTitles = questions[i].title;
    title.push(tempTitles)
}


// choices array
var choices = [];
for (let i = 0; i<questions.length; i++) {
    tempChoices = questions[i].choices;
    choices.push(tempChoices)
}


// start button && timer
startButton.addEventListener('click', function() {
    startScreen.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');



     populateQuestion();

    //  var counter = 300;
    //  var timer = setInterval(function() {
    //      counter--;
    //      timerContainer.textContent = counter;
    //      if (counter <= 0) {
    //          endGame()
    //          clearInterval(timer);
    //      }
    //  }, 1000);
});


//populate question
function populateQuestion(question) {
    choicesContainer.innerHTML = '';
    questionTitle.textContent = title[0];
    var choicesList = document.createElement('ul');
    for (let i = 0; i < 4; i++) {
        var choice = document.createElement('li');
        choice.textContent = choices[0][i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList);
}

li.addEventListener("click", answer) {

    
}

// question results




//end game
function endGame() {
    // When the game ends, it should display their score and give the user the ability to save their initials and their score

     questionsContainer.setAttribute("class", "hide");
     endScreenContainer.setAttribute("class", "visible");
     finalScoreContainer.textContent = score;
     clearInterval(timer);
}


//next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        populateQuestion(questions[currentQuestion]);
    } else {
        endGame();
    }
}


//save high score
function saveHighscore(initial) {
    // get the current highscores value from localstorage
    // json parse current highscores from localstorage, this will be an array of objects
    // push initial + score to the array
    // order the array from highest score to lowest
    // json stringify then save back to localstorage
}


// Another click event listener on li for choices
//    Check answer
//        if correct, add 1 to score, call nextQuestion()
//        if wrong, remove 10 seconds from the interval, call nextQuestion()


// Click event listener to submit button
//    var initial = initialInput.value.trim()
//    saveHighscore(initial)
//    redirect to highscore page

