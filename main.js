//Getting the canvas Id through the DOM, naming the variable "canvas".
const canvas = document.getElementById("myCanvas");

//making the width of the game canvas as wide as the computer screen.
//and height adjusted to the header, so all could fit on page.
canvas.width = window.innerWidth;
canvas.height = 525;
 
//created a variable for the canvas' "paintbrush".
const c = canvas.getContext("2d");


const shipHeight = 45;
const shipWidth = 100;
let shipX = (canvas.width-shipWidth) / 2;

let rightPressed = false;
let leftPressed = false;


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawShip() {
    c.beginPath();
    c.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

let alienimg2 = document.getElementById("alienImg2");
let x1 = 100;
let x2 = 550;
let x3 = 1000;

function drawAliens() {
    c.drawImage(alienimg2, x1, 100, 70, 50);
    x1+=1
    c.drawImage(alienimg2, x2, 100, 70, 50);
    x2+=1
    c.drawImage(alienimg2, x3, 100, 70, 50);
    x3+=1
}

let y4 = 600;

function drawProjectile() {
    c.beginPath();
    c.arc(shipX, y4, 5, 0, Math.PI*2);
    y4--;
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}
drawProjectile();


let spacePressed = false;

document.addEventListener("keypress", keyPressSpacebar);

function keyPressSpacebar(e) {
    if (e.key == "Space character" || e.code == "Space") {
        spacePressed = true;
    }
}



function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    drawAliens();

    if (spacePressed == true) {
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

    if(rightPressed && shipX < canvas.width-shipWidth) {
        shipX += 20;
    }
    else if(leftPressed && shipX > 0) {
        shipX -= 20;
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

