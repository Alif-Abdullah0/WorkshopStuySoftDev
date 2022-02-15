let c = document.getElementById("slate");
let ctx = c.getContext("2d");
let mode = "rect";
let toggleMode = (e) => {
  console.log("toggling from " + mode + "..." );
  if (mode == "rect") {
    mode = "circ";
  } else {
    mode = "rect";
  }
}

let drawRect = function(e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  ctx.beginPath();
  ctx.moveTo(mouseX-30, mouseY+20);
  ctx.lineTo(mouseX+30,mouseY+20);
  ctx.lineTo(mouseX+30,mouseY-20);
  ctx.lineTo(mouseX-30,mouseY-20);
  ctx.lineTo(mouseX-30,mouseY+20);
  ctx.stroke();
  ctx.fillStyle = 'black';
  ctx.fill();
  console.log("mouseclick registered at ", mouseX, mouseY);
}

let drawCircle = (e) => {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  ctx.beginPath();
  ctx.arc(mouseX,mouseY, 40, 0, 2*Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  console.log("mouseclick registered at ", mouseX, mouseY);
}

let draw = (e) => {
  if (mode == "rect") {drawRect(event);}
  else {drawCircle(event);}
}

let wipeCanvas = () => {
  ctx.clearRect(0, 0, c.width, c.height);
}

c.addEventListener("click", draw);
let bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode);
let clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);

