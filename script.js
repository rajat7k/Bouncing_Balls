// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// function to generate random color

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}





class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 51+this.size) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 51+this.size) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

let balls = [];


// let testBall =new Ball(50,50,5,5,'red',10);

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 50, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
    }

    // testBall.draw();
    // console.log(testBall);
    // testBall.update();
    // console.log(testBall);
    requestAnimationFrame(loop);

}

function showBalls(){
    let len=document.getElementById('numberOfBalls').value;

    balls=[]
while (balls.length < len) {
    const size = random(10, 20);
    const ball = new Ball(
        random(51 + size, width - size),
        random(51 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size
    );
    console.log(ball.velX ,ball.velY);

    balls.push(ball);
}
    loop();
}


// setInterval(loop(),1000);