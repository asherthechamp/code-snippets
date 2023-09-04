// one

window.onclick = processClick;

function processClick(evt) {
  var clicks = document.querySelector('#clicks');

  var target = evt.target.id;
  
  if(target === "") {
    clicks.innerHTML += "You clicked on the window, not on a particular element!<br>";
  } else {
    clicks.innerHTML += "Element clicked id: " + target + "<br>";
   
  }
  
  
  evt.stopPropagation(); // try commenting it and click on the button or div
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>detect mouse clicks on elements</title>
// </head>
//   <body>
//     <button id="button1" onclick="processClick(event)">Button1</button>
//     <div id="myDiv" onclick="processClick(event)">Click also on this div!</div>
//     <div id="clicks"></div>
//   </body>
// </html>

// #myDiv {
//     color:red;
//     background-color: pink;
//     width:100px;
//     height:100px;
//     text-align:center;
//     margin:20px;
//   }

// two

var m = ['client','page','screen']; // mods
$(document).mousemove(function(e){
  for(var i=0; i<3; i++){
    $('#'+m[i]).text((e[m[i]+'X'])+' '+ (e[m[i]+'Y']));
  }
  $('#scrollTop').text(
    $('html, body').scrollTop()
  );
});

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
// <meta charset=utf-8 />
// <title>client - page - screen</title>
// </head>
// <body>
//     <table>
//       <tr>
//         <td>Mouse position inside:</td>
//         <td>X &nbsp;&nbsp;&nbsp; Y</td>
//       </tr>
//       <tr>
//         <td>- client:</td>
//         <td id="client"></td>
//         <td>Client Viewport</td>
//       </tr>
//       <tr>
//         <td>- page:</td>
//         <td id="page"></td>
//         <td>Document Page (scroll down to see the difference)</td>
//       </tr>
//       <tr>
//         <td>(scrollTop:</td>
//         <td id="scrollTop"></td>
//         <td>Scroll top [pageY-clientY] )</td>
//       </tr> 
//       <tr>
//         <td>- screen:</td>
//         <td id="screen"></td>
//         <td>Screen</td>
//       </tr>
//     </table>
// </body>
// </html>

// body{
//     height:4000px;
//     font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;
//   }
  
  
//   table{
//     position:fixed;
//     width:100%;
//     padding:10px 20px;
//     background:#eee;
//     border-spacing:5px 0; 
//   }
//   table td{
//     vertical-align:bottom;
//     border:1px dashed #ddd;
//     padding:3px 10px;
//   }
//   table tr:first-child{
//     background:#ddd;
//   }

// three

window.onmousemove = processMouseMouve;

function processMouseMouve(evt) {
  var mousePositions = document.querySelector('#mousePositions');
  mousePositions.innerHTML = "clientX: " + evt.clientX +
                              " clientY: " + evt.clientY + "<br>" +
                             " pageX : " + evt.pageX +
                              "  pageY : " + evt.pageY +
                              "<br>";

  var mouseScreenPositions = document.querySelector('#mouseScreenPositions');
  mouseScreenPositions.innerHTML = "screenX: " + evt.screenX +
                             " screenY: " + evt.screenY + 
                             "<br>";
 }

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>mousemove events relative to page</title>
// </head>
//   <body>
//     <h1>Please move the mouse on this window!"</h1>
//     <div id="mousePositions"></div>
//     <p>Yep! The above values are the same  when we're listening on the window and we did not scrolled the page!</p>
//         <div id="mouseScreenPositions"></div>

//   </body>
// </html>

// four

window.onload = init;

function init() {
  // page has been loaded
  canvas = document.querySelector('#myCanvas');
  
  canvas.addEventListener('mousemove', processMouseMouve)
}

function processMouseMouve(evt) {
  var mousePositions = document.querySelector('#mousePositions');
  
  mousePositions.innerHTML = "mouse pos X: " + evt.clientX +
                              " mouse pos Y: " + evt.clientY + 
                              "<br>" 
 }

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>mousemove events relative to page</title>
// </head>
//   <body>
//     <h1>Please move the mouse on the grey canvas below!</h1>
//     <p>The mouse position is not correct (try to move the cursor at the top left corner of the cavas: it should be 0,0 but it isn't. And if you scroll the page it's worse). clientX and clientY cannot be used "as is".</p>
//     <canvas id="myCanvas" width=300 height=50></canvas>
//     <div id="mousePositions"></div>
    
//         <div id="mouseScreenPositions"></div>

//   </body>
// </html>

// canvas {
//     border:4px solid;
//     margin-left:20px;
//     background-color:lightGrey;
//   }
  
//   body {
//     height:2000px;
//   }

// five

window.onload = init;

function init() {
  // page has been loaded
  canvas = document.querySelector('#myCanvas');
  
  canvas.addEventListener('mousemove', processMouseMouve)
}

function processMouseMouve(evt) {
  var mousePositions = document.querySelector('#mousePositions');
  var rect = evt.target.getBoundingClientRect()
  var mouseX = evt.clientX - rect.left;
  var mouseY = evt.clientY - rect.top;
  
  mousePositions.innerHTML = "mouse pos X: " + mouseX +
                              " mouse pos Y: " + mouseY + 
                              "<br>" 
 }

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>mousemove events relative to page</title>
// </head>
//   <body>
//     <h1>Please move the mouse on the grey canvas below!</h1>
//     <p>You'll see that there is a no more a problem:  (0, 0) is now at the top left corner of the canvas, even if we scroll the page!</p>
//     <canvas id="myCanvas" width=300 height=50></canvas>
//     <div id="mousePositions"></div>
    
//         <div id="mouseScreenPositions"></div>

//   </body>
// </html>

// canvas {
//     border:4px solid;
//     margin-left:20px;
//     background-color:lightGrey;
//   }
  
//   body {
//     height:2000px;
//   }

// six

window.onmousemove = moveElem;
window.onmouseup = stopMovingElem;
window.onload = init;

var selected = null; // element to be moved
var oldMouseX, oldMouseY; // Stores x & y coordinates of the mouse pointer
var elemX, elemY;

function init() {
    document.querySelector('.draggable').onmousedown = function (evt) {
        dragInit(evt);
    };
}
  
// Will be called when user starts dragging an element
function dragInit(evt) {
    // Store the elem
    selected = evt.target;
    elemX = selected.offsetLeft;
    elemY = selected.offsetTop;
  
    oldMouseX = evt.clientX;
    oldMouseY = evt.clientY;
}

// Will be called when user dragging an element
function moveElem(e) {
    // new mouse ps
    var newMouseX = e.clientX;
    var newMouseY = e.clientY;
  
    if(oldMouseX !== undefined) {
        // how many pixels did we move the mouse?
        var dx = newMouseX - oldMouseX;
        var dy = newMouseY - oldMouseY;
     }
    
    if (selected !== null) {  
        // move the selected element dx, dy pixels hozontally/vertically
        changePosOfSelectedElement(dx, dy);
    }
  
    // update the old position of the mouse
    oldMouseX = newMouseX;
    oldMouseY = newMouseY;
}

function changePosOfSelectedElement(dx, dy) {
  // update the old position of the selected element
  elemX += dx;
  elemY += dy;
  
  // change the pos on screen of the element
  // by modifying its CSS left/top properties
  selected.style.left = elemX + 'px';
  selected.style.top = elemY + 'px';
}

// Destroy the object when we are done
function stopMovingElem() {
    selected = null;
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>mousemove events relative to page</title>
// </head>
//   <body>
//     <h1>Please click and drag the div below.</h1>
//    <div id="dragMe" class='draggable'>Drag me!</div>
//   </body>
// </html>

// body {
//     padding:10px
//   }
  
//   .draggable {
//     width:100px;
//     height:100px;
//     background-color:#666;
//     color:white;
//     padding:10px 12px;
//     cursor:move;
//     position:absolute; /* important (all position that's not `static`) */
//   }

// seven

window.onload = init;

var menu, menuIsVisible;

function init() {
   menu = document.querySelector("#context-menu"); 
  menuIsVisible = false;
  /* to attach a context menu to all divs, you can do this:
     var divs = document.querySelectorAll(".div");

     divs.forEach(function(d) {
          addContextMenu(d);
     });
  */

  // attache the context menu to the first div
  var div1 = document.querySelector("#div1");
  addContextMenu(div1);

  // Clicking anywhere on the window toggle the menu off
  window.addEventListener('click', toggleMenuOff);
}

function addContextMenu(elem) {
    elem.addEventListener("contextmenu", function(e) {
            //console.log("contextmenu activated");
            e.preventDefault(); // avoids default right click menu
            toggleMenuOn();
            positionMenu(e);
    });
}
      
function toggleMenuOn() {
   if(!menuIsVisible) {
       menuIsVisible = true;
        menu.classList.add("context-menu--active"); // see further in the DOM section of the course
    }
}

function toggleMenuOff() {
    if(menuIsVisible) {
       menuIsVisible = false;
        menu.classList.remove("context-menu--active");
     }
}


function positionMenu(e) {
     // Mouse position is relative to the element clicked
  
     // We make the coords absolute in the page
     var clickCoordsX = e.pageX;
     var clickCoordsY = e.pageY;
  

     var menuWidth = menu.offsetWidth + 1;
     var menuHeight = menu.innerHeight + 1;

     var elementWidth = e.target.offsetWidth;
     var elementHeight = e.target.offsetHeight;

     if ((elementWidth - clickCoordsX) < menuWidth) {
       menu.style.left = elementWidth - menuWidth + "px";
     } else {
       menu.style.left = clickCoordsX + "px";
     }

     if ((elementHeight - clickCoordsY) < menuHeight) {
       menu.style.top = elementHeight - menuHeight + "px";
     } else {
       menu.style.top = clickCoordsY + "px";
     }
   }

// Actions called when a menu item is choosen

function menuItem1() {
  console.log('learn');
  toggleMenuOff();
}

function menuItem2() {
  console.log('clear');
  toggleMenuOff();
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Example of right click context menu in pure JS</title>
// </head>
// <body>
//     <div>
//       <nav id="context-menu" class="context-menu">
//         <ul class="context-menu__items">
//           <li class="context-menu__item" id="context-menu-learn" onclick="menuItem1();">
//             Learn
//           </li>
//           <li class="context-menu__item" onclick="menuItem2();">
//             Clear
//           </li>
//           <li class="context-menu__item" onclick="toggleMenuOff();">
//             Close
//           </li>
//         </ul>
//       </nav>
//     </div>
//   <p>Try to right click on this div:</p>
//   <div id="div1" class="div">A Div with a context menu</div>
// <p>  This one does not have a context menu attached, try also a right click:  </p>
//   <div id="div2" class="div">Another Div without a context menu</div>
// </body>
// </html>


// .context-menu {
//     display: none;
//     position: absolute;
//     z-index: 10;
//     padding: 12px 0;
//     width: 240px;
//     background-color: #fff;
//     border: solid 1px #dfdfdf;
//     box-shadow: 1px 1px 2px #cfcfcf;
//   }
  
//   .context-menu--active {
//     display: block;
//   }
  
//   .context-menu__items {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }
  
//   .context-menu__item {
//     display: block;
//     margin-bottom: 4px;
//     padding: 4px 12px;
//     color: #0066aa;
//     text-decoration: none;
//   }
  
//   .context-menu__item:last-child {
//     margin-bottom: 0;
//   }
  
  
//   .context-menu__item:hover {
//     color: #fff;
//     background-color: #0066aa;
//   }
  
//   #div1 {
//     background-color:red;
//     height:100px;
//   }
  
//   #div2 {
//     background-color:green;
//     height:100px;
//   }

// eight 

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//   <title>First example of an event listener</title>
//   <meta charset="utf-8">
//   <script>
//     addEventListener('click', function(evt) {
//         document.body.innerHTML += "Button clicked!<br>";
//     });
// </script>
// </head>
// <body>
//   <p>Click anywhere on this page</p>
// </body>
// </html>

// nine 

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//   <title>Second example of an event listener</title>
//     <meta charset="utf-8">
// </head>
// <body>
//   <button id="myButton">Click me!</button>
//   <p></p>
//   <script>
//     var b = document.querySelector("#myButton");
//     b.addEventListener('click', function(evt) {
//       alert("Button clicked");
//     });
//   </script> 
// </body>
// </html>

// ten

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//   <title>Third example of an event listener</title>
//     <meta charset="utf-8">
//       <script>
//          function processClick(evt) {
//           alert("Button clicked");
//         };
//   </script> 
// </head>
// <body>
//   <button id="myButton" onclick="processClick(event);">Click me!</button>
// </body>
// </html>

// eleven 

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//   <title>Removing an event listener</title>
//     <meta charset="utf-8">
// </head>
// <body>
//   <button id="myButton">Click me, this will work only once!</button>
//   <p></p>
//   <script>
//     var b = document.querySelector("#myButton");
//     b.addEventListener('click', processClick);
    
//     function processClick(evt) {
//      alert("Button clicked, event listener removed, try to click on the button again: nothing will happen anymore!"); 
//       b.removeEventListener('click', processClick);
//     }
//   </script> 
// </body>
// </html>

// twelve

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Mouse over</title>
//   <meta charset="utf-8"/>
// </head>
// <body> 
//    <button>Put the mouse cursor over me</button>
// </body>
// </html>  

// button:hover {
//     color:red;
//     border:2px solid;
//   }