// one

function validateName(field) {
    // this is the input field text content
    var name = field.value;  
    
    // get the output div
    var output = document.querySelector('#nameTyped');
    // display the value typed in the div 
    output.innerHTML = "Valid name: " + name;
    
    // You can do validation here, set the input field to
    // invalid is the name contains forbidden characters
    // or is too short
    // for example, let's forbid names with length < 5 chars
    if(name.length < 5) {
      output.innerHTML = "This name is too short (at least 5 chars)";
    }
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Simple input field validation</title>
// </head>
// <body>
//   <h1>Simple input field validation using the 'input' event</h1>
//   <p>Just type a name in the input field and see what happens!</p>
// <label>
//   <span>Name (required):</span>
//   <input type="text" 
//          name="nom" 
//          maxlength="32" 
//          required
//          oninput = "validateName(this)">
// </label>
//   <p>
//   <span id="nameTyped"></span>
// </p>  
// </body>
// </html>

// two

function validateName(evt) {
    // this is the input field text content
    var key = evt.key;  
    
    // get the output div
    var output = document.querySelector('#keyTyped');
    // display the value typed in the div 
    output.innerHTML = "Valid key: " + key;
    
    // You can do validation here, set the input field to
    // invalid is the name contains forbidden characters
    // or is too short
    // for example, let's forbid names with length < 5 chars
    if(key === "!") {
      output.innerHTML = "This key is forbidden!";
      // remove the forbidden char
      // current typed value
      var name = evt.target.value;
      // we use the substring JavaScript function
      // to remove the last character
      // first parameter = start index
      // second = last index
      evt.target.value = name.substring(0, name.length-1);
    }
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Simple input field validation using keyup events</title>
// </head>
// <body>
//   <h1>Simple input field validation using the 'input' event</h1>
//   <p>Just type a name in the input field and see what happens! <span style="color:red"> TRY TO TYPE A "!" too</span></p>
// <label>
//   <span>Name (required):</span>
//   <input type="text" 
//          name="nom" 
//          maxlength="32" 
//          required
//          onkeyup = "validateName(event)">
// </label>
//   <p>
//   <span id="keyTyped"></span>
// </p>  
// </body>
// </html>

// three

function doSomething(evt) {
    // this is the slider value
    var val = evt.target.value;  
    
    // get the output div
    var output = document.querySelector('#sliderValue');
    // display the value typed in the div 
    output.innerHTML = "Value selected: " + val;
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JavaScript slider use</title>
// </head>
// <body>
//   <h1>Simple <code>&lt;input type=range&gt;</code> field validation using the 'input' event</h1>
//   <p>Just move the slider</p>
// <label>
//  1 <input type="range" 
//          min=1
//          max=12
//           step=0.1
//          oninput = "doSomething(event)"> 12
// </label>
//   <p>
//   <span id="sliderValue"></span>
// </p>  
// </body>
// </html>

// four 

function doSomething(evt) {
    // this is the slider value
    var val = evt.target.value;  
    
    // get the output div
    var output = document.querySelector('#numberValue');
    // display the value typed in the div 
    output.innerHTML = "Value selected: " + val;
  }

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JavaScript number input use</title>
// </head>
// <body>
//   <h1>Simple <code>&lt;input type=number&gt;</code> field validation using the 'input' event</h1>
//   <p>type a number or use the small vertical arrows</p>
// <label>
//   Type a number: 
// <input type="number" 
//          min=1
//          max=12
//           step=0.1
//          oninput = "doSomething(event)">
// </label>
//   <p>
//   <span id="numberValue"></span>
// </p>  
// </body>
// </html>

// five

function changePageBackgroundColor(color) {
    document.body.style.backgroundColor = color;  
      // get the output div
      var output = document.querySelector('#choosedColor');
      // display the value typed in the div 
      output.innerHTML = "Color selected: " + color;
    }

    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="utf-8">
    //   <meta name="viewport" content="width=device-width">
    //   <title>JavaScript color chooser use</title>
    // </head>
    // <body>
    //   <h1>Simple <code>&lt;input type=color&gt;</code> use</h1>
    //   <p>Pick a color to change the background color of the page</p>
    // <label>
    // <input type="color" 
    //          onchange = "changePageBackgroundColor(this.value);">
    //   <!-- we could have used oninput= in the previous line -->
    // </label>
    //   <p>
    //   <span id="choosedColor"></span>
    // </p>  
    // </body>
    // </html>