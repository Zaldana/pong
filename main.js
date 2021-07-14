// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the ball element
const ball = document.querySelector('.ball');

// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');

//get start button
const startButton = document.querySelector('.start');

//get stop button
const resetButton = document.querySelector('.reset');

//get score
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let x = 1;

//Player score counter
let scorePlayer = 0;
let scoreComputer = 0;

// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

//BALL Starting position
let ballXposition = 420;
let ballXvelocity = 1;
let ballYposition = 250;
let ballYvelocity = 1;

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
// let computerPaddleYVelocity = 1;

// The y-velocity of the player paddle
let playerPaddleYPosition = 235;
// let playerPaddleYVelocity = 1;

//Start & Reset ===============================================================================

//Stop interval
let stop = null;

//Start Button
startButton.addEventListener('click', function () { 
    stop = setInterval(update, 1); 
    startButton.style.boxShadow = "0 0 25px grey";
    startButton.style.textShadow = "0 0 20px grey";
    startButton.style.color = "rgba(255, 255, 255, 0.187)";});

//Reset Button
resetButton.addEventListener('click', function () {
    ballYposition = 350;
    ballXposition = 420;
    stop = setInterval(update, 1);
    resetButton.style.boxShadow = "0 0 25px grey";
    resetButton.style.textShadow = "0 0 20px grey";
    resetButton.style.color = "rgba(255, 255, 255, 0.187)";
    ballXvelocity = 1;
    ballYvelocity = 1; });

// Update the pong world ==================================================================

function update() {

    // Ball top & bottom bounce ===========================================================

    // Update & apply the ball's X position
    ballXposition = ballXposition + ballXvelocity;
    ball.style.left = `${ballXposition}px`;

    // Update & apply the balls's Y position
    ballYposition = ballYposition + ballYvelocity;
    ball.style.top = `${ballYposition}px`;

    //If ball hits top wall
    if (ballYposition === 0) {

        ballYvelocity = ballYvelocity * -1;

    }

    //If ball hits bottom wall
    if (ballYposition === 580) {

        ballYvelocity = ballYvelocity * -1;

    }

    // Ball Scoring =======================================================================

    //If ball scores left
    if (ballXposition < 5) {

        clearInterval(stop);
        resetButton.style.boxShadow = "0 0 25px orangeRed";
        resetButton.style.textShadow = "0 0 25px orangeRed";
        resetButton.style.color = "peachpuff";
        scoreComputer += 1;
        computerScore.innerText = scoreComputer;

    }

    //If ball hits right wall
    if (ballXposition > 840) {

        clearInterval(stop);
        resetButton.style.boxShadow = "0 0 25px orangeRed";
        resetButton.style.textShadow = "0 0 25px orangeRed";
        resetButton.style.color = "peachpuff";
        scorePlayer += 1;
        playerScore.innerText = scorePlayer;

    }

    //Computer Paddle=========================================================================
    
    // console.log
    // if (ballXvelocity >= 2) {

    //     x === .9;

    // }
    // console.log(x);
    
    if (ballYposition > 100) {

        computerPaddleYPosition = (ballYposition - 100) * x;
        computerPaddle.style.top = `${computerPaddleYPosition}px`;
    }

    //Paddle Ball Bounce ======================================================================
    
    //Computer side
    if (ballXposition > 783 && ballYposition <= computerPaddleYPosition + 120 && ballYposition >= computerPaddleYPosition) {

        ballXvelocity = (ballXvelocity * -1);

    }

    //Player side
    if (ballXposition < 45 && ballYposition <= playerPaddleYPosition + 120 && ballYposition >= playerPaddleYPosition) {

        ballXvelocity = (ballXvelocity * -1.4);

    }

}

//Player controls =========================================================================

document.addEventListener("keydown", function (event) {
    
    if (playerPaddleYPosition < 460) {
        switch (event.key) {
            case "Down":
            case "ArrowDown":
                playerPaddleYPosition = playerPaddleYPosition + 45;
                playerPaddle.style.top = `${playerPaddleYPosition}px`;
                break;
        }
    }

    if (playerPaddleYPosition > 20) {
        switch (event.key) {
            case "Up":
            case "ArrowUp":
            playerPaddleYPosition = playerPaddleYPosition - 45;
            playerPaddle.style.top = `${playerPaddleYPosition}px`;
            break;
        }
    }

});

