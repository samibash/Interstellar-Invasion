const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
const c = canvas.getContext("2d");

const shipHeight = 35;
const shipWidth = 95;
const shipX = (canvas.width-shipWidth) / 2;

let rightPressed = false;
let leftPressed = false;

function drawShip() {
    c.beginPath();
    c.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
    c.fillStyle = "white"
    c.fill();
    c.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    e.preventDefault();
    if(e.key == "a" || e.which == 65) {
        rightPressed = true;
    }
    else if (e.key == "d" || e.which == 68) {
        leftPressed = true;
    }
    drawShip();
}

function keyUpHandler(e) {
    e.preventDefault();
    if(e.key == "a" || e.which == 65) {
        rightPressed = false;
    }
    else if (e.key == "d" || e.which == 68) {
        leftPressed = false;
    }
    drawShip();
}


/*const x = canvas.width/2;
const y = canvas.height-30;

function drawSquare() {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}
setInterval(drawSquare, 10);*/


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

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();    
    c.fillStyle = "rgba(255, 0, 0, 0.1"
    c.fillRect(x, y, 150, 150);
    c.fillStyle = "rgba(0, 255, 0, 0.1"
    c.fillRect(x, y, 100, 100);
    c.fillStyle = "rgba(0, 0, 255, 0.1"
    c.fillRect(x, y, 100, 100);

    x += 1;
    y += 1;
}

animate();*/

