const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

const charSet = "abcdefghijklmnopqrstuvxwyz0123456789!@#$%^&*()-=_+[]{};:|,.<>/?`~";
const fontSize = 15;
const columns = screenWidth / fontSize;
const drops = [];

//creat drops
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * screenHeight;
}

//draw the characters on the canvas
function draw () {
    ctx.fillStyle = "rgba( 0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
        ctxfillText(randomChar, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > screenHeight && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops [i]++;
    }
}

//start the animation loop
setInterval(draw,30);