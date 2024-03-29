//Resolution independent code 

function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    let c = canvas.getContext('2d');
    c.scale(dpr, dpr);
    return c;
  }
  
//Add control for the snake
let d="RIGHT";
document.addEventListener('keydown',direction);
//Direction Cases
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

const box=10;
//Create the food
let food={
   x:Math.floor(Math.random()*48+1)*box,
   y:Math.floor(Math.random()*44+3)*box
}

//Make the snake
let snake=[];
snake[0]={x:9*box,y:10*box};
snake[1]={x:8*box,y:10*box};

let score=0;

// cheack collision function
function collision(head,array){
  for(let i = 0; i < array.length; i++){
      if(head.x == array[i].x && head.y == array[i].y){
          return true;
      }
  }
  return false;
}

//Draw function
function draw()
{
  c.clearRect(0,0,canvas.width,canvas.height);
  //Match area
  c.fillStyle="black";
  c.fillRect(10,30,480,440);

  //Draw food
  c.fillStyle="blue";
  c.fillRect(food.x,food.y,box,box);

  //Draw Snake
  for(let i=0;i<snake.length;i++)
  {
    c.fillStyle=(i==0)?"green":"white";
    c.fillRect(snake[i].x,snake[i].y,box,box);
    c.strokeStyle="red";
    c.strokeRect(snake[i].x,snake[i].y,box,box);
  }
  
  //Score
  c.fillStyle="blue";
  c.font="30px Changa One";
  c.fillText("score :",10,25);
  c.fillText(score,90,25);

  //SNAKE MOVES
   let snakeX=snake[0].x;
   let snakeY=snake[0].y;
   if(d=="LEFT")
   {
     snakeX-=box;
   }
   if(d=="RIGHT")
   {
     snakeX+=box;
   }
   if(d=="UP")
   {
     snakeY-=box;
   }
   if(d=="DOWN")
   {
     snakeY+=box;
   }

  //Snake eats the food
   if(snakeX==food.x && snakeY==food.y)
   {
     score++;
     food={
      x:Math.floor(Math.random()*48+1)*box,
      y:Math.floor(Math.random()*44+3)*box
     }
   }
   else
   {
    snake.pop();
   }
   let newHead={
    x:snakeX,
    y:snakeY
  }

   //Collison detection
   if(snakeX<box || snakeY<3*box || snakeX>48*box || snakeY>46*box || collision(newHead,snake))
   {
      clearInterval(game);
   }
   snake.unshift(newHead);

}

let game=setInterval(draw,100);

