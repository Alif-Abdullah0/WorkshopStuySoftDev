/*
Team Big Bird Catastrophe :: Alif Abdullah, William Chen, Shadman Rakib
SoftDev pd2
K32 __ canvas based JS drawing animation
2022-02-17
*/
let c = document.getElementById("playground");
let dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
let stopButton = document.getElementById("buttonStop");// GET STOP BUTTON
let movieButton = document.getElementById("buttonMovie");
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
let xInc = true;
let yInc = true;
let movieX;
let movieY;
let img = new Image();
img.src = 'logo_dvd.jpg';
//var drawDot = function() {
let drawDot = () => {
  console.log("drawDot invoked...");
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

let drawMovie = () => {
  console.log("drawMovie invoked...");
  if (requestID) {
    window.cancelAnimationFrame(requestID);
  }

  /*
  if (!movieX) {
    movieX = (c.width/9) + Math.floor(Math.random() * (c.width - (2*c.width/9)));
  }


  if (!movieY) {
    movieY = (c.height/16) + Math.floor(Math.random() * (c.height - (2*c.height/16)));
  }
  */

  if (xInc) {
    movieX++;
  } else {
    movieX--;
  }

  if (yInc) {
    movieY++;
  } else {
    movieY--;
  }

  if (movieX > (c.width - (c.width/9))) {
    xInc = false;
  }

  if (movieX < (c.width/9)) {
    xInc = true;
  }

  if (movieY > (c.height - (c.height/16))) {
    yInc = false;
  }

  if (movieY < (c.height/16)) {
    yInc = true;
  }
  clear();
  ctx.drawImage(img, movieX, movieY, c.width/9, c.width/16);
  requestID = window.requestAnimationFrame(drawMovie);
}

let setMoviePos = () => {
  movieX = (c.width/9) + Math.floor(Math.random() * (c.width - (2*c.width/9)));
  movieY = (c.height/16) + Math.floor(Math.random() * (c.height - (2*c.height/16)));
}


//var stopIt = function() {
let stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
movieButton.addEventListener( "click", drawMovie);
movieButton.addEventListener( "click", setMoviePos)
