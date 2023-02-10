const scoresContainer = document.querySelector("#highscores");
let savedStorage = JSON.parse(localStorage.getItem("localScore"));



// check if local storage is empty and populate high scores page
if (localStorage == null) {
    highScores = [];
} else {
    highScores = savedStorage
for (let i = 0; i < savedStorage.length; i++) {
    let scoresList = document.createElement("li");
    scoresList.textContent = savedStorage[i].savedInitials + " - " + savedStorage[i].savedScore;
    scoresContainer.appendChild(scoresList);
}}
