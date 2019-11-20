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
//Add control for the snake
let d;
document.addEventListener('keydown',direction);
function direction(event)
{
  if(event.keyCode==37 && d!="RIGHT")
  {
    d="LEFT";
  }
  if(event.keyCode==38 && d!="DOWN")
  {
    d="UP";
  }
  if(event.keyCode==39 && d!="LEFT")
  {
    d="RIGHT";
  }
  if(event.keyCode==40 && d!="UP")
  {
    d="DOWN";
  }
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

const box=10;
//Create the food
//c.fillStyle="white";
let food={
   x:Math.floor(Math.random()*48+1)*box,
   y:Math.floor(Math.random()*44+3)*box
}

//Make the snake
let snake=[];
snake[0]={x:9*box,y:10*box};
snake[1]={x:8*box,y:10*box};

//Draw function
let score=0;

function draw()
{
  for(let i=0;i<snake.length;i++)
  {
    c.fillStyle=(i==0)?"green":"white";
    c.fillRect(snake[i].x,snake[i].y,box,box);
    c.strokeStyle="red";
    c.strokeRect(snake[i].x,snake[i].y,box,box);
  }
  c.fillStyle="blue";
  c.font="30px Changa One";
  c.fillText("score :",10,25);
  c.fillText(score,90,25);
}

let game=setInterval(draw,100);

