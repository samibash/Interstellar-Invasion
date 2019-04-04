//Getting the canvas Id through the DOM, naming the variable "canvas".
           //const canvas = document.getElementById("myCanvas");
        let alien 
        let player1 
        let projectiles

        let spaceshipImage
        let alienImage
        let missleImage

function preload() {
    spaceshipImage = loadImage('https://image.flaticon.com/icons/png/512/139/139714.png');
    missleImage = loadImage('http://www.public.asu.edu/~lbreaux/git417/images/ball-sprite.png');
    alienImage = loadImage('https://i.imgur.com/mS0hGaS.png');
}

console.log(spaceshipImage);



/*
//making the width of the game canvas as wide as the computer screen.
//and height adjusted to the header, so all could fit on page.
canvas.width = window.innerWidth;
canvas.height = 575;

//created a variable for the canvas' "paintbrush".
const c = canvas.getContext("2d");

//created variables for the height and width of the ship.
const shipHeight = 45;
const shipWidth = 100;
//created a variable for the user ship to be on the center of the page.
let shipX = (canvas.width - shipWidth) / 2;

//function for drawing user ship that begins in the center of page.
function drawShip() {
    c.beginPath();
    c.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

//function for drawing & randomly moving those pesky aliens from left to right, then back again.
let alienimg2 = document.getElementById("alienImg2");
let x1 = 100;
let x2 = 550;
let x3 = 1000;
let x4 = 325;
let x5 = 775;

function drawAliens(max) {
    c.drawImage(alienimg2, x1, 100, 70, 50);
    x1+=1 * Math.random() * Math.floor(max);
    c.drawImage(alienimg2, x2, 100, 70, 50);
    x2+=1 * Math.random() * Math.floor(max);
    c.drawImage(alienimg2, x3, 100, 70, 50);
    x3+=1 * Math.random() * Math.floor(max);
    c.drawImage(alienimg2, x4, 100, 70, 50);
    x4+=1 * Math.random() * Math.floor(max);
    c.drawImage(alienimg2, x5, 100, 70, 50);
    x5+=1 * Math.random() * Math.floor(max);
}

//function for drawing my circular projectile that begins at the ship. However, I haven't solved how
//to create an independent trajectory for itself -- keeps following the ship.
let y4 = 500;
function drawProjectile(point) {
    c.beginPath();
    c.arc(shipX, y4, 5, 0, Math.PI*2);
    y4--;
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

//created eventlisteners for the left and right arrow keys.
//these are the conditions. the actual command for movement is in the 
//draw function near the bottom.
let rightButton = false;
let leftButton = false;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
    if(e.key == "ArrowRight") {
        rightButton = true;
    }
    else if (e.key == "ArrowLeft") {
        leftButton = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "ArrowRight") {
        rightButton = false;
    }
    else if (e.key == "ArrowLeft") {
        leftButton = false;
    }
}

//created an eventlistener for the spacebar. These are the conditions
//for the projectile to be called in the draw function below.
let spacePressed = false;
document.addEventListener("keypress", keyPressSpacebar);
function keyPressSpacebar(e) {
    if (e.code === "Space") {
        spacePressed = true;
    }
}

//the draw function that calls all the other functions in my code:
//(drawShip; drawAliens; and drawProjectile).
//below that are the conditions for the movement of the alien ships & user.
function draw() {
//the clearRect makes it so that everytime this function loops, the canvas erases itself. 
//So that you wont have an object making skid marks of itself across the screen.
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    drawAliens(1);
    if(spacePressed === true) {
        drawProjectile();
    }
    if (x1 >= 200) {
        x1 = 100;
    }
    if (x2 >= 650) {
        x2 = 550;
    }
    if (x3 >= 1100) {
        x3 = 1000;
    }
    if (x4 >= 425) {
        x4 = 325;
    }
    if (x5 >= 875) {
        x5 = 775;
    }
    if(rightButton && shipX < canvas.width-shipWidth) {
        shipX += 5;
    }
    else if(leftButton && shipX > 0) {
        shipX -= 5;
    }
}
setInterval(draw, 10);*/