// one

var darkVador = {
    race: 'human',
    job: 'villain',
    talk: function() {
      return 'come to the dark side, Luke!';
    },
    describeYourself: function() {
      return "I'm a " + this.race + " and I'm a " + this.job + " in a series of movies!";
    }
  }
  
  function dvSpeak() {
   document.body.innerHTML += '<p>Dark Vador describes himself: ' + darkVador.describeYourself(); + '</p>';  document.body.innerHTML += '<p>Dark Vador says ' + darkVador.talk(); + '</p>';
  }

//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <title>JavaScript OOP: methods</title>
//   </head>
//   <body>
//     <button onclick='dvSpeak();'>Make Dark Vador speak!</button>
//     </body>
// </html>

// two - object functions and .this

// useful to have them as global variables
var canvas, ctx, w, h; 
var mousePos;

var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red',
  
  move: function(x, y) {
    this.x = x;
    this.y = y;
  },
  
  draw: function(ctx) {
    // draw the player at its current position
    // with current width, height and color
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, this.width, this.height);
  
    // GOOD practice: restore the context
    ctx.restore();    
  }
}

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // add a mousemove event listener to the canvas
    canvas.addEventListener('mousemove', mouseMoved);

    // ready to go !
    mainLoop();
};

function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mainLoop() {
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the player
  player.draw(ctx);
  
  // make the player follow the mouse
  // the animations starts as the page is loaded
  // maybe the mouse is not yet over the canvas
  // this is why we test if the mousePos is defined
  if(mousePos !== undefined)
      player.move(mousePos.x, mousePos.y);
  
  // ask for a new animation frame
  requestAnimationFrame(mainLoop);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Draw a monster in a canvas</title>
// </head>
// <body>
//   <canvas id="myCanvas"  width="400" height="400"></canvas>
// </body>
// </html>

// canvas {
//     border: 1px solid black;
//   }

// three - classes

class Hero {
  constructor(name, side) {
    this.name = name;
    this.side = side;   
  }
  
  speak() {
    return "<p>My name is " + this.name +
      ", I'm with the " + this.side + ".</p>";
  }
}

var darkVador = new Hero("Dark Vador", "empire");
var luke = new Hero("Luke Skywalker", "rebels");
var ianSolo = new Hero("Ian Solo", "rebels");

function makeHeroesSpeak() {
  document.body.innerHTML += darkVador.speak();
   document.body.innerHTML += luke.speak();
   document.body.innerHTML += ianSolo.speak();
}

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <title>JavaScript OOP: create objects with an ES6 class</title>
//   </head>
//   <body>
//     <p>Look at the JS code. This time we created multiple objects using an ES6 class named Hero.</p>
//  <p>   
//    <button onclick='makeHeroesSpeak();'>Make Star Wars heroes speak!</button>
//     </p>
  
//     </body>
// </html>

// four - static properties and functions

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // static property
    Point.nbPointsCreated++;
  }

  // static method
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}
// static property
Point.nbPointsCreated=0;

// We create 3 points
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const p3 = new Point(12, 27);

document.body.innerHTML += "<p>Distance between points (5, 5) and (10, 10) is " + 
                     Point.distance(p1, p2) + "</p>";
document.body.innerHTML += "Number of Points created is " + Point.nbPointsCreated;

// five - getters and setters

// ES6 get and set
class Person {
  constructor(givenName, familyName) {
      this.givenName = givenName;    // "normal name"
      this._familyName = familyName; // starts with "_"
  }

  // getters and setters are useful for processing
  // properties, doing checks, changing them before
  // returning their value, etc.
  // having "get familyName" is equivalent to declaring a property
  // named "familyName", but in this case we have to use ANOTHER
  // name for the variable that will be used to store the property
  // value. A convention is to keep the same name but add an 
  // underscore at the beginning. 
  // Ex: get name(n) { this._name = n;}
  
  get familyName() {
      return this._familyName.toUpperCase();
  }

  set familyName(newName) {
      // validation could be checked here such as 
      // only allowing non numerical values
      this._familyName = newName;   
  }

  walk() {
      return (this.givenName + ' ' + this._familyName + ' is walking.');
  }
}
       
let michel = new Person('Michel', 'Buffa');

document.body.innerHTML += "<p>" 
                      + michel.walk() 
                      + "</p>";

// Notice that we use here the "normal" names givenName and familyName
document.body.innerHTML += "<p>Our teacher is " 
                      + michel.givenName 
                      + ' ' + michel.familyName 
                      + "</p>";

// six - game with classes

// useful to have them as global variables
let canvas, ctx, w, h; 
let mousePos;

// an empty array!
let balls = []; 
let initialNumberOfBalls;
let globalSpeedMutiplier = 1;
let colorToEat = 'red';
let wrongBallsEaten = goodBallsEaten = 0;
let numberOfGoodBalls;

// SOUNDS
let ballEatenSound;

// Player as a singleton/simple object
let player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red',
  
  move(x, y) {
    this.x = x;
    this.y = y;
  },
  
  draw(ctx) {
    // draw the player at its current position
    // with current width, height and color
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, this.width, this.height);
  
    // GOOD practice: restore the context
    ctx.restore();    
  }
}

window.onload = function init() {
    // called AFTER the page has been loaded
  
    // Start playing the background music as soon as the page has loaded
    playBackgroundMusic();
  
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // start game with 10 balls, balls to eat = red balls
    startGame(10);
  
    // add a mousemove event listener to the canvas
    canvas.addEventListener('mousemove', mouseMoved);

    // Load the sound and start the game only when the sound has been loaded
    ballEatenSound = new Howl({
                urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
                onload: function () {
                  // start the animation
                    mainLoop();
                }
            });
  
};

function playBackgroundMusic() {
   let audioPlayer = document.querySelector("#audioPlayer");
   audioPlayer.play();
}

function pausebackgroundMusic() {
   let audioPlayer = document.querySelector("#audioPlayer");
   audioPlayer.pause();  
}

function startGame(nb) {
  do {
    balls = createBalls(nb);
    initialNumberOfBalls = nb;
    numberOfGoodBalls = countNumberOfGoodBalls(balls, colorToEat);
  } while(numberOfGoodBalls === 0);
  
  wrongBallsEaten = goodBallsEaten = 0;
}

function countNumberOfGoodBalls(balls, colorToEat) {
  let nb = 0;
  
  balls.forEach(function(b) {
    if(b.color === colorToEat)
      nb++;
  });
  
  return nb;
}

//===== CALLED BY GUI WHEN THE USER USES INPUT FIELDS
function changeNbBalls(nb) {
  startGame(nb);
}

function changeColorToEat(color) {
  colorToEat = color;
}

function changePlayerColor(color) {
  player.color = color;
}

function changeBallSpeed(coef) {
    globalSpeedMutiplier = coef;
}

//==== CALLED WHEN A USER USES ITS MOUSE
function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//==== MAIN ANIMATION GAME LOOP
function mainLoop() {
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the player
  player.draw(ctx);
  // draw all balls
  drawAllBalls(balls);
  
  // animate the ball that is bouncing all over the walls
  moveAllBalls(balls);
  
 // make the player follow the mouse
  // the animations starts as the page is loaded
  // maybe the mouse is not yet over the canvas
  // this is why we test if the mousePos is defined
  if(mousePos !== undefined)
      player.move(mousePos.x, mousePos.y);
  
  // draw the game score
  drawScore(balls);

  // ask for a new animation frame
  requestAnimationFrame(mainLoop);
}

//==== UTILITY FUNCTION
// Collisions between rectangle and circle
function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
   let testX=cx;
   let testY=cy;
   if (testX < x0) testX=x0;
   if (testX > (x0+w0)) testX=(x0+w0);
   if (testY < y0) testY=y0;
   if (testY > (y0+h0)) testY=(y0+h0);
   return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
}

//=== FUNCTIONS RELATED TO BALLS

class Ball {
  constructor(x, y, radius, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  
  draw(ctx) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
    ctx.fill();
 
    // GOOD practice: restore the context
    ctx.restore();    
  }
  
  move() {
      this.x += this.speedX;
      this.y += this.speedY;    
  }
}

function createBalls(n) {
  // empty array
  let ballArray = [];
  
  // create n balls
  for(let i=0; i < n; i++) {
     
    // Create some random values...
    let x = w/2;
    let y = h/2;
    let radius =  5 + 30 * Math.random(); // between 5 and 35
    let speedX =  -5 + 10 * Math.random(); // between -5 and + 5
    let speedY =  -5 + 10 * Math.random(); // between -5 and + 5
    let color = getARandomColor();

    // Create the new ball b
    let b = new Ball(x, y, radius, color, speedX, speedY);
    
    // add ball b to the array
    ballArray.push(b);
  }
  // returns the array full of randomly created balls
  return ballArray;
}

function getARandomColor() {
  let colors = ['red', 'blue', 'cyan', 'purple', 'pink', 'green', 'yellow'];
  // a value between 0 and color.length-1
  // Math.round = rounded value
  // Math.random() a value between 0 and 1
  let colorIndex = Math.round((colors.length-1)*Math.random()); 
  let c = colors[colorIndex];
  
  // return the random color
  return c;
}

function drawScore(balls) {
  ctx.save();
  ctx.font="20px Arial";
  
  if(balls.length === 0) {
    ctx.fillText("Game Over!", 20, 30);
  } else if(goodBallsEaten === numberOfGoodBalls) {
    ctx.fillText("You Win! Final score : " + (initialNumberOfBalls - wrongBallsEaten), 
                 20, 30);
  } else {
    ctx.fillText("Balls still alive: " + balls.length, 210, 30);
    ctx.fillText("Good Balls eaten: " + goodBallsEaten, 210, 50);
     ctx.fillText("Wrong Balls eaten: " + wrongBallsEaten, 210, 70);
  }
  ctx.restore();
}


function drawAllBalls(ballArray) {
    ballArray.forEach(function(b) {
      b.draw(ctx);
    });
}


function moveAllBalls(ballArray) {
  // iterate on all balls in array
  balls.forEach(function(b, index) {
      // b is the current ball in the array
      b.move();
  
      testCollisionBallWithWalls(b); 
    
      testCollisionWithPlayer(b, index);
  });
}

function testCollisionWithPlayer(b, index) {
  if(circRectsOverlap(player.x, player.y,
                     player.width, player.height,
                     b.x, b.y, b.radius)) {
    // PLAY A PLOP SOUND!
    ballEatenSound.play();
    
    // we remove the element located at index
    // from the balls array
    // splice: first parameter = starting index
    //         second parameter = number of elements to remove
    if(b.color === colorToEat) {
      // Yes, we remove it and increment the score
      goodBallsEaten += 1;
    } else {
      wrongBallsEaten += 1;
    }
    
    balls.splice(index, 1);

  }
}

function testCollisionBallWithWalls(b) {
    // COLLISION WITH VERTICAL WALLS ?
    if((b.x + b.radius) > w) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = w - b.radius;
  } else if((b.x -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = b.radius;
  }
  
  // COLLISIONS WTH HORIZONTAL WALLS ?
  // Not in the else as the ball can touch both
  // vertical and horizontal walls in corners
  if((b.y + b.radius) > h) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.y = h - b.radius;
  } else if((b.y -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.Y = b.radius;
  }  
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Small game with sound</title>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.28/howler.min.js"></script>
// </head>
// <body>
//   <audio src = "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3" 
//         id="audioPlayer">
// </audio>
// <div id="controls">
//     <label for="nbBalls">Number of balls: </label>
//     <input type="number" min=1 max=30 
//            value=10 id="nbBalls"
//            oninput="changeNbBalls(this.value);">
//     <p></p>
//    <label for="colorChooser">Player color: </label>
//     <input type="color" value='#FF0000'
//            oninput="changePlayerColor(this.value);" id="colorChooser">
//     <p></p>
//       <label for="selectColorOfBallToEat">Color of ball to eat: </label>
//       <select onchange="changeColorToEat(this.value);" id="selectColorOfBallToEat">
//         <option value='red'>red</option>
//         <option value='blue'>blue</option>
//         <option value='green'>green</option>
//     </select>
//     <p></p>

//    <label for="ballSpeed">Change ball speed: </label>
//     - <input type="range" value='1'
//              min=0.1 max=3 step=0.1
//            oninput="changeBallSpeed(this.value);"
//              id="ballSpeed"> + 
//     <p></p>
    
//   </div>
//   <canvas id="myCanvas"  width="400" height="400"></canvas>
// </body>
// </html>

// #myCanvas {
//   border: 1px solid black;
//   float:left;
// }

// #controls {
//   float:left;
// }

