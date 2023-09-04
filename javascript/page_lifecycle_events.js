// one

function init() {
    var status = document.querySelector('#pageStatus');
    status.innerHTML = 'LOADED!';
    
    // start working!
    // ....
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example1 of the 'load' event</title>
// </head>
// <body onload='init();'>
//   <p>This page uses <code>&lt;body onload='init();'&gt;</code> in the JS code  to execute the init function ONLY WHEN THE PAGE HAS BEEN LOADED!</p>
  
//   <p>This is important as very often we cannot do important things before the DOM is ready (all HTML elements have been created and can be manipulated from JavaScript).</p>
  
//   <p>PAGE STATUS: <span id="pageStatus">NOT LOADED YET</span></p>
// </body>
// </html>

// #pageStatus {
//     border:1px solid red;
//     padding: 2px;
//     color:red;
//   }

// two

window.onload = init;

function init() {
  var status = document.querySelector('#pageStatus');
  status.innerHTML = 'LOADED!';
  
  // start working!
  // ....
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example 2 of the 'load' event</title>
// </head>
// <body>
//   <p>This page uses <code>window.onload = init;</code> in the JS code  to execute the init function ONLY WHEN THE PAGE HAS BEEN LOADED!</p>
  
//   <p>This is important as very often we cannot do important things before the DOM is ready (all HTML elements have been created and can be manipulated from JavaScript).</p>
  
//   <p>PAGE STATUS: <span id="pageStatus">NOT LOADED YET</span></p>
// </body>
// </html>

// #pageStatus {
//     border:1px solid red;
//     padding: 2px;
//     color:red;
//   }

// three

window.onload = resize;
window.onresize = resize;

function resize(evt) {
  console.log("resize");
  var pageSizeSpan = document.querySelector('#pageSize');
  pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
  
 // screen size
var screenSizeSpan = document.querySelector('#screenSize');
  screenSizeSpan.innerHTML = "Width: " + screen.width + " Height: " + screen.height;
  
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example1 of the 'resize' event</title>
// </head>
// <body>
//   <p>This page uses <code>window.onresize = resize;</code> in the JS code  to execute the resize function. Try to change the size of your window now!</p>
 
//   <p>Curent page size: <span id="pageSize"></span></p>
//   <p>Screen size: <span id="screenSize"></span></p>
// </body>
// </html>

// #pageSize, #screenSize {
//     border:1px solid red;
//     padding: 2px;
//     color:red;
//   }

// four

window.onload = init;

var progressBar;

function init() {
  progressBar = document.querySelector(".progress div");

  window.addEventListener("scroll", function() {
      var max = document.body.scrollHeight - window.innerHeight;
      var percent = (window.pageYOffset / max) * 100;
      progressBar.style.width = percent + "%";
  });
}
 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example of the 'scroll' event</title>
// </head>
//   <body>
// <div class="progress">
//   <div>Percentage</div>
//     </div>
//     <p id="text">Scroll me and the progress bar on the right will show 
//   the percentage of scroll. Look also at the CSS
//   code (body is 2000px height, for example)...</p>
//   </body>
// </html>

// .progress {
//     border: 1px solid blue;
//     width: 100px;
//     position: fixed;
//     top: 10px; right: 10px;
//   }
  
//   .progress > div {
//     height: 12px;
//     background: lightBlue;
//     width: 0%;
//     font-size:8px;
//   }
  
//   #text {
//     margin-top:50px;
//   }
//   body {
//     height: 2000px;
//   }