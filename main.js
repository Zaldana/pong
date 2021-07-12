// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the computer paddle element
const ball = document.querySelector('.ball');

// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

//BALL x - position, y - position, x - velocity, and y - velocity
let ballXposition = 420;
let ballXvelocity = 1;
let ballYposition = 250;
let ballYvelocity = 1;

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {

    // Update the ball's x position
    ballXposition = ballXposition + ballXvelocity;

    // Apply the ball  x-position 
    ball.style.left = `${ballXposition}px`;

    // Update the bals's x position
    ballYposition = ballYposition + ballYvelocity;

    // Apply the ball  x-position 
    ball.style.top = `${ballYposition}px`;

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    //If paddle hits bottom
    if (computerPaddleYPosition === 500) {

        computerPaddleYVelocity = computerPaddleYVelocity * -1;

    }

    if (computerPaddleYPosition === 0) {

        computerPaddleYVelocity = computerPaddleYVelocity * -1;

    }
    
    //If ball hits left
    if (ballXposition === 0) {

        ballXvelocity = ballXvelocity * -1;
        
    }

    //If ball hits right
    if (ballXposition === 830) {

        ballXvelocity = ballXvelocity * -1;


    }

    //If ball hits top
    if (ballYposition === 0) {

        ballYvelocity = ballYvelocity * -1;


    }

    //If ball hits bottom
    if (ballYposition === 580) {

        ballYvelocity = ballYvelocity * -1;

    }
}

// Call the update() function every 35ms
setInterval(update, 5);
