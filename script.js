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

titleBtn.addEventListener("click", changeTitle);
backBtn.addEventListener("click", changeBackground);
let colour;
function colourChange() {
  let char = "ABCDEF01234567890";
  colour = "#"; // Declare colour with let or var
  for (let i = 0; i < 6; i++) {
    colour += char[Math.floor(Math.random() * char.length)];
  }
  return colour;
}

function changeTitle() {
  colourChange();
  title.style.color = colour;
}

function changeBackground() {
  colourChange();
  body.style.background = colour;
}

// CIRCLE STUFF

// get x and y coordinates of click event
// Function to handle mouse click events
function handleClick(event) {
  // Get the clicked element
  const clickedElement = event.target;

  // Check if the clicked element is a button or title
  if (
    clickedElement.tagName === "BUTTON" ||
    clickedElement.tagName === "H1" ||
    clickedElement.tagName === "H2" /* Add more tag names as needed */
  ) {
    // Clicked on a button or title, do nothing
    return;
  }

  // Get the x and y coordinates of the click event
  const x = event.clientX;
  const y = event.clientY;

  // Do something with the x and y coordinates
  console.log("X Coordinate: " + x);
  console.log("Y Coordinate: " + y);
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

  function colourChanger() {
    let char = "ABCDEF01234567890";
    let colour1 = "#";
    for (let i = 0; i < 6; i++) {
      colour1 += char[Math.floor(Math.random() * char.length)];
    }
    console.log(colour1); // Optional: log the color for debugging
    return colour1; // Return the generated color value
  }

  let randomCircleRadius = Math.floor(Math.random() * 100);
  let randomCircleColour = colourChanger();
  let my_circle = new Circle(x, y, randomCircleRadius, randomCircleColour);
  my_circle.draw(context);
}

// Add a click event listener to the window
window.addEventListener("click", handleClick);

function resetPage() {
  location.reload();
}

// Get the reset button element
let resetBtn = document.querySelector(".reset");

// Add click event listener to the reset button
resetBtn.addEventListener("click", resetPage);
