// 1. Start button that goes to first question when clicked.

// 2. Multiple choice questions with buttons for each answer.

// 3. When answer is clicked, show correct or wrong, move to next question.

// 4. If answer was incorrect subtract time from the clock.

// 5. When all questions are answered || timer === 0 end quiz.

// 6. When the game ends, score is displayed and user can input initials.

// 7. Submit button goes to highscores.


// variable declarations
const startButton = document.querySelector('#start');
const startScreen = document.querySelector("#start-screen");
const questionsContainer = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesContainer = document.querySelector("#choices");
const timerContainer = document.querySelector(".timer");
const endScreenContainer = document.querySelector("#end-screen");
const finalScoreContainer = document.querySelector("#final-score");
const timer = document.querySelector("#time");
const submitButton = document.querySelector("#submit")
let highScore = document.querySelector(".highScore")
let initialInput = document.querySelector("#initials")
let score = 0;
let questionIndex = 0;


// questions array
const title = [];
for (let i = 0; i<questions.length; i++) {
    tempTitles = questions[i].title;
    title.push(tempTitles)
}


// choices array
const choices = [];
for (let i = 0; i<questions.length; i++) {
    tempChoices = questions[i].choices;
    choices.push(tempChoices)
}


// start button && timer
let counter = 300;
startButton.addEventListener('click', function() {
    startScreen.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');
    populateQuestion();

     let countdown = setInterval(function() {
         counter--;
         timer.textContent = counter;
         if (counter <= 0) {
             endGame()
             clearInterval(countdown);
         }
     }, 1000);

});


//show score
const showScore = document.createElement("div");
 showScore.textContent = "Score: 0";
 timerContainer.appendChild(showScore)


//populate question
function populateQuestion() {
    choicesContainer.innerHTML = '';
    questionTitle.textContent = title[questionIndex];
    for (let i = 0; i < 4; i++) {
        const choice = document.createElement('button');
        choice.textContent = choices[questionIndex][i];
        choicesContainer.appendChild(choice);
        choice.addEventListener("click", function(event) {
            const option = event.target.textContent;
            console.log(option)
            questionIndex++
            if (questionIndex < questions.length) {
                populateQuestion();
            } else {
                endGame();
            }
            console.log(questions[questionIndex-1].answer)

            if (option === questions[questionIndex-1].answer) {
                    score++;
            
                 } else {
                    counter -= 10;
                }
            showScore.textContent = "Score: " + score;
        });
    }
 };


//end game
function endGame() {
     questionsContainer.setAttribute("class", "hide");
     endScreenContainer.setAttribute("class", "visible");
     finalScoreContainer.textContent = score;
     clearInterval(counter);
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
submitButton.addEventListener("click", function() {
    let initialStorage = initialInput.value.trim();
    let scoreStorage = score;
    saveHighscore(initialStorage, scoreStorage)
})


function saveHighscore(initialStorage, scoreStorage) {
    for (let i = 0; i<highScore.length; i++) {
        highScore.value(localStorage.getItem(initialStorage, ))
    }
    // json parse current highscores from localstorage, this will be an array of objects
    // push initial + score to the array
    // order the array from highest score to lowest
    // json stringify then save back to localstorage
}