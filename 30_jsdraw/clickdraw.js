let c = document.getElementById('slate');
let ctx = c.getContext("2d");
let mode = "rect";
let toggleMode = (e) => {
  console.log("toggling...");
  if (mode == "rect") {
    mode = "circ";
  } else {
    mode = "rect";
  }
}

let drawRect = function(e) {
  let mouseX = offsetX;
  let mouseY = offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);
}

let drawCircle = (e) => {
  let mouseX = offsetX;
  let mouseY = offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);
}

let draw = (e) => {
  if (mode == "rect") {drawRect(ctx);}
  else {drawCircle(ctx);}
}

let wipeCanvas = () => {
  ctx.clearRect(0, 0, c.width, c.height);
}

c.addEventListener("click", draw);
let bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode);
let clearB = document.getElementById("button);
clearB.addEventListener();
