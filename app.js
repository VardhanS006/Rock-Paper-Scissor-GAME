let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

const drawGame = () =>{
    
    msg.innerText=("GAME DRAW Play Again");
    msg.style.backgroundColor= "Gold";
}

const playgame = (userChoice) => {
    
    //generate computer choise
    const compChoice = genCompChoice();
    

    if(userChoice == compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock") {
           userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        
        playgame(userChoice);
    });
})