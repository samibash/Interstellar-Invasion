const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
const c = canvas.getContext("2d");

const shipHeight = 55;
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
    c.rect(shipX, canvas.width-shipWidth, shipHeight, shipWidth);
    c.fillStyle = "white";
    c.fill();
    c.closePath();
}

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    
    if(rightPressed && shipX < canvas.width-shipWidth) {
        shipX += 7;
    }
    else if(leftPressed && shipX > 0) {
        shipX -= 7;
    }
}
setInterval(draw, 15);





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

