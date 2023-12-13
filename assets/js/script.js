/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: HTML 5 Canvas
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const canvas = document.getElementById("draw");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext("2d"); // 2 prams - context type and context attributes

// Default theme
let chathams_blue = "#1A4B84";

// Apply some properties to ctx
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

// Init
let isDrawing = false;
let isErasing = false; // Track eraser state
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing && !isErasing) return; // Check for mouse click
  ctx.beginPath(); // Begin a new path
  if (isErasing) {
    ctx.strokeStyle = "#fff";
  } else {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  }

  // Start drawing the line
  ctx.moveTo(lastX, lastY);

  // Go to current mouse location
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  if (!isErasing) {
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }
}

// Event Listeners
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // Mouse cursor's coordinates
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  isErasing = false;
});
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
  isErasing = false;
});

const eraserIcon = document.getElementById("eraserIcon");
eraserIcon.addEventListener("click", () => {
  isErasing = !isErasing;
  if (isErasing) {
    eraserIcon.classList.add("active");
  } else {
    eraserIcon.classList.remove("active");
  }
});

// Set theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

console.log("hello world");

let num = 10;
num == 10;

function addNum(a = 10, b = 20) {
  return a + b;
}
