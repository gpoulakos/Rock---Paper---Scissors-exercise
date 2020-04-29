let userScore = 0;
let computerScore = 0;
//_span stands for DOM variables. HTML variables that store DOM elements
const userScore__span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function humanWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userWord = "user".fontsize(3).sup();
    const compWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore__span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${humanWord(userChoice)}${userWord}  beats ${humanWord(computerChoice)}${compWord}! You win! Good job!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const userWord = "user".fontsize(3).sup();
    const compWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore__span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${humanWord(userChoice)}${userWord}  loses to ${humanWord(computerChoice)}${compWord}! You lost! Sucker!!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);

}

function draw(userChoice, computerChoice) {
    //userScore__span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const userWord = "user".fontsize(3).sup();
    const compWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${humanWord(userChoice)}${userWord}  equals ${humanWord(computerChoice)}${compWord}! It 's a draw! Whatever...!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);

}
 
function game(userChoice) {
    const computerChoice = getComputerChoice();
    //console.log("user choice => " + userChoice);
    //console.log("computer choice => " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;

    }

}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
        //console.log("Hey, you clicked on rock!")
    

    paper_div.addEventListener('click', () => game("paper"));
        //console.log("Hey, you clicked on paper!")

    scissors_div.addEventListener('click', () => game("scissors"));
        //console.log("Hey, you clicked on scissors!")
}
main();
