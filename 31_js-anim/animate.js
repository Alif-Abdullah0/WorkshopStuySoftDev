/*
Team Big Bird Apocalypse :: Alif Abdullah, Noakai Naronesty, Shadman Rakib
SoftDev pd2
K31 __ canvas based JS animation
2022-02-15
*/
let c = document.getElementById("playground");
let dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
let stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
let ctx = c.getContext("2d");// YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = 'red';// YOUR CODE HERE

let requestID;  //init global var for use with animation frames


//var clear = function(e) {
let clear = (e) => {
  console.log("clear invoked...");
  ctx.clearRect(0, 0, c.width, c.height);
};


let radius = 0;
let growing = true;

//var drawDot = function() {
let drawDot = () => {
  console.log("drawDot invoked...")
  // if requestID exists, that means
  // that a frame exists in the animation stack.
  // that frame already has been used,  so the only
  // left to do is to remove the framw.
  if (requestID) {
    window.cancelAnimationFrame(requestID);
  }

  if (radius >= c.width/2) {
    growing = false;
  } else if (radius <= 0) {
    growing = true;
  }

  if (growing) {
    radius+=2;
  } else {
    radius-=2;
  }

  // clear the previous frame's drawing
  clear();

  // draw the new frame's painting
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  // set current request count to current frame
  requestID = window.requestAnimationFrame(drawDot);
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
