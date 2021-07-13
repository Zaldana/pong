// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the ball element
const ball = document.querySelector('.ball');

// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');

//get start button
const startButton = document.querySelector('.start');

//get stop button
const stopButton = document.querySelector('.stop');

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
let computerPaddleYVelocity = 1;

// The y-velocity of the player paddle
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 1;

// Update the pong world
function update() {

    

    //THE BALL ========================================================================

    // Update & apply the ball's X position
    ballXposition = ballXposition + ballXvelocity;
    ball.style.left = `${ballXposition}px`;

    // Update & apply the balls's Y position
    ballYposition = ballYposition + ballYvelocity;
    ball.style.top = `${ballYposition}px`;

    //If ball hits left wall
    if (ballXposition === 0) {

        ballXvelocity = ballXvelocity * -1;

    }

    //If ball hits right wall
    if (ballXposition === 850) {

        ballXvelocity = ballXvelocity * -1;

    }

    //If ball hits top wall
    if (ballYposition === 0) {

        ballYvelocity = ballYvelocity * -1;

    }

    //If ball hits bottom wall
    if (ballYposition === 580) {

        ballYvelocity = ballYvelocity * -1;

    }

    //Computer Paddle==================================================================

    // Update and apply the computer paddle's Y position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    //If computer paddle hits bottom
    if (computerPaddleYPosition === 480) {

        computerPaddleYVelocity = computerPaddleYVelocity * -1;


    }
    //If computer paddle hits top
    if (computerPaddleYPosition === 0) {

        computerPaddleYVelocity = computerPaddleYVelocity * -1;

    }

    //Paddle Ball Bounce ======================================================
    
    if (ballXposition > 783 && ballYposition <= computerPaddleYPosition + 120 && ballYposition >= computerPaddleYPosition) {

        ballXvelocity = ballXvelocity * -1;
        console.log("ball" + ballYposition);
        console.log(computerPaddleYPosition);

    }

    if (ballXposition < 50 && ballYposition <= playerPaddleYPosition + 120 && ballYposition >= playerPaddleYPosition) {

        ballXvelocity = ballXvelocity * -1;
        console.log("ball" + ballYposition);
        console.log(computerPaddleYPosition);

    }

    //Player paddle ===============================================================

    // Update and apply the player paddle's position
    playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;
    playerPaddle.style.top = `${playerPaddleYPosition}px`;


    //If computer paddle hits bottom
    if (playerPaddleYPosition === 480) {

        playerPaddleYVelocity = playerPaddleYVelocity * -1;

    }

    if (playerPaddleYPosition === 0) {

        playerPaddleYVelocity = playerPaddleYVelocity * -1;

    }

}


startButton.addEventListener('click', function() { setInterval(update, 1) });

stopButton.addEventListener('click', function () { location.reload() });