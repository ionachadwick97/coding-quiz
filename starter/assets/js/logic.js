// 1. Start button that goes to first question when clicked.

// 2. Multiple choice questions with buttons for each answer.

// 3. When answer is clicked, show correct or wrong, move to next question.

// 4. If answer was incorrect subtract time from the clock.

// 5. When all questions are answered || timer === 0 end quiz.

// 6. When the game ends, score is displayed and user can input initials.

// 7. Submit button goes to highscores.



// Prepare the questions in question.js file
// var questions = ...
// var score = 0;
// var currentQuestion = 0;



// Prepare all selector that we might need to point to the html element
var startButton = document.querySelector('#start');
var startScreen = document.querySelector("#start-screen");
var questionsContainer = document.querySelector("#questions");
var questionsTitle = document.querySelector("#question-title");
var choicesContainer = document.querySelector("#choices");
var timerContainer = document.querySelector("#timer");
var endScreenContainer = document.querySelector("#end-screen");
var finalScoreContainer = document.querySelector("#final-score");
// var questions = 


// questions.forEach(function(question) {
//     populateQuestion(question);
// });

// start button && timer
startButton.addEventListener('click', function() {
    startScreen.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');


//     currentQuestion = 0;
     populateQuestion(questions[1]);

     var counter = 100;
     var timer = setInterval(function() {
         counter--;
         timerContainer.textContent = counter;
         if (counter <= 0) {
             endGame()
             clearInterval(timer);
         }
     }, 1000);
});

//populate question
function populateQuestion(question) {
    var question = question.title;
    var choices = question.choices;

    choicesContainer.innerHTML = '';
    questionTitle.textContent = question;
    var choicesList = document.createElement('ul');
    for (let i = 0; i < choices.length; i++) {
        var choice = document.createElement('li');
        choice.textContent = choices[i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList);
}

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
    // json parse current highscores from localstorage, this will be an array of object
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
