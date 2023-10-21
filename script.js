let titleBtn = document.querySelector(".titleBtn");
let backBtn = document.querySelector(".backBtn");
let title = document.querySelector(".title");
const body = document.querySelector("body");
let canvas = document.querySelector(".canvas");
let context = canvas.getContext("2d");

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Set initial canvas size
setCanvasSize();

// Update canvas size when the window is resized
window.addEventListener("resize", setCanvasSize);

function colourChange() {
  let char = "ABCDEF01234567890";
  colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += char[Math.floor(Math.random() * char.length)];
  }
  return colour;
}

function changeTitle() {
  let randomColour = colourChange();
  title.style.color = randomColour;
}

function changeBackground() {
  let randomColour = colourChange();
  body.style.background = randomColour;
}

titleBtn.addEventListener("click", changeTitle);
backBtn.addEventListener("click", changeBackground);

// CIRCLE STUFF

class Circle {
  constructor(xpos, ypos, radius, colour) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.colour = colour;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = this.colour;
    context.stroke();
    context.closePath();
  }
}

function handleEvents(event) {
  event.preventDefault();
  let x, y;
  if (event.clientX && event.clientY) {
    x = event.clientX;
    y = event.clientY;
  } else if (event.touches && event.touches.length > 0) {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  }

  console.log("X Coordinate: " + x);
  console.log("Y Coordinate: " + y);

  let randomCircleRadius = Math.floor(Math.random() * 100);
  let randomCircleColour = colourChange();
  let my_circle = new Circle(x, y, randomCircleRadius, randomCircleColour);
  my_circle.draw(context);
}

canvas.addEventListener("click", handleEvents);
canvas.addEventListener("touchstart", handleEvents);

function resetPage() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  title.style.color = "black";
  body.style.background = "white";
}

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetPage);
