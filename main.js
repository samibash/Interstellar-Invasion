//Getting the canvas Id through the DOM, naming the variable "canvas".
const canvas = document.getElementById("myCanvas");

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
function drawProjectile() {
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
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
    if(e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "ArrowLeft") {
        leftPressed = false;
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
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    drawAliens(1.5);

    if (spacePressed === true) {
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
    if(rightPressed && shipX < canvas.width-shipWidth) {
        shipX += 5;
    }
    else if(leftPressed && shipX > 0) {
        shipX -= 5;
    }
}
setInterval(draw, 10);












//a looping function. 

//the clearRect makes it so that everytime this function loops, the canvas erases itself. So that
//you wont have an object making skid marks of itself across the screen.

//this is the beginning of the content of what you're trying to animate.





/*function drawCirc() {
    c.beginPath();
    c.arc(300, 400, 10, 0, Math.PI*2);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}
setInterval(drawCirc, 10);*/


//rectangle
/*for (let i = 0; i < 20; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.fillStyle = "rgba(255, 0, 0, 0.1"
    c.fillRect(x, 200, 150, 150);
    c.fillStyle = "rgba(0, 255, 0, 0.1"
    c.fillRect(x, 300, 100, 100);
    c.fillStyle = "rgba(0, 0, 255, 0.1"
    c.fillRect(x, 400, 100, 100);
    c.fillStyle = "rgba(255, 0, 0, 0.1"
    c.fillRect(x, 250, 100, 100);
}

//line(s)
for (let i = 0; i < 12; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.moveTo(200, 300);
    c.moveTo(600, 500);
    c.lineTo(x, y);
    c.lineTo(x, y);
    c.strokeStyle = "rgba(140, 100, 4)"
    c.stroke();
}


//arch / circles
for (let i = 0; i < 10; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}

let x = 10;
let y = 20;
*/

