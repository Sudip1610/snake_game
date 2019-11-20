//Resolution independent code 
function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    let c = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    c.scale(dpr, dpr);
    return c;
  }

const canvas=document.getElementById('canvas');
const c=setupCanvas(canvas);
/*
//Text at the start of the game
c.font="800 90px Courier New";
c.textAlign = "center";
c.fillText("Start",250,250);
*/

//Create the match area
c.filStyle="black";
c.fillRect(10,30,480,440);

//Create the food
c.fillStyle="white";
let box=10;
let x=Math.floor(Math.random()*(canvas.width-box));
let y=Math.floor(Math.random()*(canvas.height-box));
c.fillRect(x,y,box,box);

//Make the snake
console.log(canvas.width);
console.log(canvas.height);

