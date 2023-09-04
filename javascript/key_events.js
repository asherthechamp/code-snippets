// one

window.onkeyup = processKeyUp;
window.onkeydown = processKeyDown;

/* or we could have written:
   window.addEventListener('keyup', processKeyUp);
   window.addEventListener('keydown', processKeyDown);
*/

function processKeyUp(evt) {
  var keys = document.querySelector('#keys');
  keys.innerHTML += "keyup: " + evt.key + " code: " + evt.keyCode + "<br>";
}

function processKeyDown(evt) {
  var keys = document.querySelector('#keys');
  keys.innerHTML += "keydown: " + evt.key + " code: " + evt.keyCode + "<br>";
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example of the 'keyup' and 'keydown' events on the window object</title>
// </head>
//   <body>
//     <p>Please type some keys and see what happens</p>
//     <div id="keys"></div>
//   </body>
// </html>4

// two

window.onkeydown = processKeyDown;

/* or we could have written:
   window.addEventListener('keypress', processKeyPress);
*/

function processKeyDown(evt) {
  var keys = document.querySelector('#keys');
  
   keys.innerHTML += "keypress: " + evt.key + 
                   " code: " + evt.keyCode + " Modifiers : ";

  var modifiers = "";
  
  if(event.shiftKey)
    modifiers += "SHIFT ";

  if(event.altKey)
    modifiers += "ALT ";

  if(event.ctrlKey)
    modifiers += "CTRL ";

  if(modifiers === "")
    modifiers = "NONE";
  
  keys.innerHTML += modifiers + "<br>";
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example of the 'keypress' event on the window object, awith shift, meta and alt</title>
// </head>
//   <body>
//     <p>Please type some keys and see what happens. Try typing key modifiers at the same time: shift, alt, control</p>
//     <div id="keys"></div>
//   </body>
// </html>
