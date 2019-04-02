const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

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
}*/