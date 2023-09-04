// one

window.onload = init;

function init() {
  // we're sure that the DOM is ready
  // before querying it
  
  // add a shadow to all images
  // select all images
  var listImages = document.querySelectorAll("img");

  // change all their width to 100px
  listImages.forEach(function(img) {
    // img = current image
    img.style.boxShadow = "5px 5px 15px 5px grey";
    img.style.margin = "10px";
  });  
  
}

function addBorderToFirstImage() {
  // select the first image with id = img1
  var img1 = document.querySelector('#img1');

  // Add a red border, 3px wide
  img1.style.border = '3px solid red';  
}

function resizeAllImages() {
  // select all images
  var listImages = document.querySelectorAll("img");

  // change all their width to 100px
  listImages.forEach(function(img) {
    // img = current image
    img.width = 100;
  });
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>querySelector and querySelector example 1</title>
// </head>
// <body>
//   <button onclick="addBorderToFirstImage();">
//     Add a border to the first image
//   </button>
//   <br>
//   <button onclick="resizeAllImages();">
//     Resize all images
//   </button>
//   <br>
//   <p>Click one of the buttons above!</p>
// <img src="https://mainline.i3s.unice.fr/mooc/Ntvj5rq.png" 
//      id="img1"
//      width=200 alt="image #1">
// <img src="https://mainline.i3s.unice.fr/mooc/yiU59oi.gif" 
//      width=200 alt="image #2">
// <img src="https://mainline.i3s.unice.fr/mooc/6FstYbc.jpg" 
//      width=200 alt="image #3">
// <img src="https://mainline.i3s.unice.fr/mooc/L97CyS4.png" 
//      width=200 alt="image #4">
// </body>
// </html>

// two

function firstLiClassRedInUl() {
    // first li of class="red" in a ul
    var elm = document.querySelector("ul li.red");
    elm.style.color = 'red';
  }
  
  function allLisInUlOfClassNav() {
    // get all li directly in a ul of class nav
    var list = document.querySelectorAll("ul.nav > li");
    
    list.forEach(function(elm) {
      elm.style.textDecoration = "underline";
    })
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>querySelector and querySelector example 1</title>
// </head>
// <body>
//   <button onclick="firstLiClassRedInUl();">Select first li of class red and color it in red</button>
//   <br>
//   <button onclick="allLisInUlOfClassNav();">Underline All li in a ul of class nav</button>
  
// <ul class="nav">
//     <li>Home</li>
//     <li class="red">Products</li>
//     <li>About</li>
// </ul>
//   Another list:
//   <ul>
//     <li>Apple</li>
//     <li class="red">Cherries</li>
//     <li>Oranges</li>
// </ul>
// </body>
// </html>

// three

function displayListOfCheckedItems() {
  // all inputs that have been checked
  var listOfSelectedValues="";
  
  var list = document.querySelectorAll("#fruits input:checked");  
  list.forEach(function(elm) {
    listOfSelectedValues += elm.value + " ";
    
    // Put the li in red.
    // the li is the parent of the current input elem stored
    // in the elm variable
    elm.parentNode.style.color = 'green';
  });
  document.body.append("You selected: " + listOfSelectedValues);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>querySelector and querySelector example 1</title>
// </head>
// <body>
//   <button onclick="displayListOfCheckedItems();">Show Checked items</button>
//   <br>
// <ul id="fruits">
//     <li>
//        <input type="checkbox" name="fruit" value="apples">Apples
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="oranges">
//         Oranges
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="bananas">   
//         Bananas
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="grapes">
//         Grapes
//     </li>
// </ul>
// </body>
// </html>

// four

function changeBackGroundOfPs(id) {
  var paragraphs = document.querySelectorAll("#" + id + " p");

  // Another way to iterate on all elements in a collection
  for (var i = 0; i < paragraphs.length; i++ ) {
    paragraphs[i].style.backgroundColor = "lightGreen";
  }
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Change background color of p under an element whose id is known</title>
// </head>
// <body>
//   <button onclick="changeBackGroundOfPs('firstDiv');">Change backgrounds of p under a given element known by id</button>
//   <br>
// <div id="firstDiv">
//   <p>First paragraph.</p>
//   <p>Second paragraph.</p>
// </div>
// </body>
// </html>

// four 

function add() {
  // get the current value of the input field
  var val = document.querySelector('#newNumber').value;
  if((val !== undefined) && (val !== "")) {
    // val exists and non empty
    // get the list of numbers. It's a <ul>
    var ul = document.querySelector("#numbers");
    // add it to the list as a new <li>
    var newNumber = document.createElement("li");
    newNumber.textContent = val;
    // or newNumber.innerHTML = val
    ul.append(newNumber);
  }
}
 
function reset() {
  // get the list of numbers. It's a <ul>
  var ul = document.querySelector("#numbers");
  // reset it: no children
  ul.innerHTML = ""; 
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Adding new elements to the DOM</title>
// </head>
// <body>
// <label for="newNumber">Please enter a number</label>
// <input type="number" id="newNumber" value=0>
// <button onclick="add();">Add to the list</button>
// <br>
// <button onclick="reset();">Reset list</button>
 
// <p>You entered:</p>
// <ul id="numbers"></ul>
// </body>
// </html>

// input:invalid {
//   color:pink;
// }

// five

function add() {
  // get the current value of the input field
  var val = document.querySelector('#newNumber').value;
  
  if((val !== undefined) && (val !== "")) {
    // val exists and non empty
    
    // get the list of numbers. It's a <ul>
    var ul = document.querySelector("#numbers");
     
    ul.innerHTML += "<li>" + val + "</li>";
  }
}

function reset() {
  document.querySelector("#numbers").innerHTML = "";
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Adding new elements to the DOM</title>
// </head>
// <body>
//   <label for="newNumber">Please enter a number</label>
//   <input type="number" id="newNumber" value=0>
//   <button onclick="add()">Add to the list</button>
//   <br>
//   <button onclick="reset();">Reset list</button>

// <p>You entered:</p>
// <ul id="numbers"></ul>
// </body>
// </html>

// input:invalid {
//   color:pink;
// }

// six moving elements in the dom

function move(elem) {
  var targetList = document.querySelector('#coolBrowsers');
  targetList.append(elem);
  
  // trick to remove the click listener once
  // the image has been moved into the list
  elem.onclick = null;
}

{/* <!DOCTYPE html>
 <html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Moving elements using appendChild()</title>
</head>
<body>
  <p>Click on a browser image to move it to the list of cool browsers:</p><br/>
  <img src="https://mainline.i3s.unice.fr/mooc//ABiBCwZ.png" id="cr" 
       onclick="move(this)" alt="Logo Chrome">
  <img src="https://mainline.i3s.unice.fr/mooc//n7xo93U.png" id="ff" 
       onclick="move(this)" alt="Logo Firefox">
  <img src="https://mainline.i3s.unice.fr/mooc//ugUmuGQ.png" id="ie" 
       onclick="move(this)" alt="Logo IE">
  <img src="https://mainline.i3s.unice.fr/mooc//jfrNErz.png" id="op" 
       onclick="move(this)" alt="Logo Opera">
  <img src="https://mainline.i3s.unice.fr/mooc//gDJCG0l.png" id="sf" 
       onclick="move(this)" alt="Logo Safari"><br/>
  <div class="box" id="coolBrowsers">
    <p>Cool Web browsers</p>
  </div>
</body>
</html> */}

// .box {
//   border: silver solid;
//   width: 256px;
//   height: 128px;
//   margin: 10px;
//   padding: 5px;
//   float: left;
// }

// seven drag and drop

function drag(target, evt) {
  // When dragged, copy into the drag'n'drop clipboard
  // the id of the dragged elem (it's target.id)
  evt.dataTransfer.setData("browser", target.id);
}

function drop(target, evt) {
  // get the id of the element being dragged
  var id = evt.dataTransfer.getData("browser");

  target.appendChild(document.getElementById(id));
    // prevent default behavior
    evt.preventDefault();
}

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Drag and drop</title>
//      <meta charset="utf-8">
//   </head>
// <body>
//   <p id="text" ondragstart="drag(this, event)">Drag and drop browser images in a zone:</p><br/>
//   <img src="https://mainline.i3s.unice.fr/mooc/ABiBCwZ.png" id="cr" 
//        ondragstart="drag(this, event)" alt="Logo Chrome">
//   <img src="https://mainline.i3s.unice.fr/mooc/n7xo93U.png" id="ff" 
//        ondragstart="drag(this, event)" alt="Logo Firefox">
//   <img src="https://mainline.i3s.unice.fr/mooc/ugUmuGQ.png" id="ie" 
//        ondragstart="drag(this, event)" alt="Logo IE">
//   <img src="https://mainline.i3s.unice.fr/mooc/jfrNErz.png" id="op" 
//        ondragstart="drag(this, event)" alt="Logo Opera">
//   <img src="https://mainline.i3s.unice.fr/mooc/gDJCG0l.png" id="sf" 
//        ondragstart="drag(this, event)" alt="Logo Safari"><br/>

//   <div class="box" ondragover="return false" ondrop="drop(this, event)">
//     <p>Cool Web browsers</p>
//   </div>
  
//   <div class="box" ondragover="return false" ondrop="drop(this, event)">
//     <p>Web browsers from the 90's</p>
//   </div>
// </body>
// </html>

// .box {
//   border: silver solid;
//   width: 256px;
//   height: 128px;
//   margin: 10px;
//   padding: 5px;
//   float: left;
// }

// eight remove elements

function removeSelected() {  
  var list = document.querySelectorAll("#fruits input:checked"); 
  var ul = document.querySelector("#fruits");
  
  list.forEach(function(elm) {
    // elm is an <input type="checkbox">, its parent is a li
    // we want to remove from the <ul> list
    // when we remove the <li>, the <input> will also
    // be removed, as it's a child of the <li>
    var li = elm.parentNode;
    ul.removeChild(li);
  });
}

function reset() {
  var ul = document.querySelector("#fruits");
  // Empty the <ul>
  ul.innerHTML = "";
  
  // Adds each list item to the <ul> using innerHTML += ...
  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='apples'>Apples</li>";

  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='oranges'>Oranges</li>";

    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='bananas'>Bananas</li>";

    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='grapes'>Grapes</li>";
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>RemoveChild example</title>
// </head>
// <body>
//   <button onclick="removeSelected();">Remove selected items</button>
//   <button onclick="reset();">Reset in initial configuration</button>
//   <br>
// <ul id="fruits">
//     <li>
//        <input type="checkbox" name="fruit" value="apples">Apples
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="oranges">
//         Oranges
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="bananas">   
//         Bananas
//     </li>
//     <li>
//        <input type="checkbox" name="fruit" value="grapes">
//         Grapes
//     </li>
// </ul>
// </body>
// </html>