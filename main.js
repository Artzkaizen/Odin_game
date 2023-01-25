let userScore = 0;
let compScore = 0;
let playerSpan = document.getElementById("userscore");
let compSpan = document.getElementById("compscore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const message = document.getElementById("message");
const result = document.getElementById("test");
const button = `<button onClick = hide() id="btn"> Restart Game</button>`;

//  listener for clicks
function main() {
    rock.addEventListener('click', function () {
          game("Rock")
          })
    paper.addEventListener('click', function () {
      game("Paper")
          })
    scissors.addEventListener('click', function () {
        game("Scissors")
      })
}
  
//  Gets random input for computer
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    return choice [Math.floor(Math.random() * 3)]
}


// Compares user input with computer input
function game(playerChoice) {
    if (userScore === 5 || compScore == 5) {
        if (userScore === 5 ) {
        result.style.display = "block";
        result.innerHTML = `<p class= "win">You've Won! the game</p> ${button}`
            return;
        }
        else{
            result.style.display = "block";
            result.innerHTML = `<p class= "lose">You've Lost! the game</p> ${button}`
                return;
            }
    } 
    const comp = getComputerChoice()
    switch (playerChoice + comp) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorPaper":
            win(playerChoice,comp)
            break;
        case "ScissorsRock":
        case "PaperScissors":
        case "RockPaper":
            lose(playerChoice, comp)
            break;
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockPaper":
            draw()
            break;
        default:
            break;
    }
}

// Logs out message after comparison 
function win(user, comp) {
    playerSpan.textContent = ++userScore;
    message.textContent = `You Win! ${user} beats ${comp}`
}
function draw() {
    message.textContent = "It's a Tie"
}
function lose(user, comp) {
    compSpan.textContent = ++compScore;
    if (lose) {
        message.classList.add("won")
    }
    message.textContent = `You Lose! ${comp} beats ${user}`
}

// Remove restart button and hides message
function hide() {
    result.style.display = "none";
    message.textContent = "";
    userScore = 0;
    compScore = 0;
    playerSpan.textContent = userScore;
    compSpan.textContent = compScore;
}

main()
