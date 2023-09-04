// one

paperScript = function() {
	var mousePoint = view.center;
	var amount = 25;
	var colors = ['red', 'white', 'blue', 'white'];

	for (var i = 0; i < amount; i++) {
		var rect = new Rectangle([0, 0], [25, 25]);
		rect.center = mousePoint;
		var path = new Path.Rectangle(rect, 6);
		path.fillColor = colors[i % 4];
		var scale = (1 - i / amount) * 20;
		path.scale(scale);
		
	}

	function onMouseMove(event) {
		mousePoint = event.point;
	}

	var children = project.activeLayer.children;

	function onFrame(event) {
		for (var i = 0, l = children.length; i < l; i++) {
			var item = children[i];
			var delta = (mousePoint - item.position) / (i + 5);
			item.rotate(Math.sin((event.count + i) / 10) * 7);
			if (delta.length > 0.1)
				item.position += delta;
		}
	}
}

var a = document.createElement('script')
a.setAttribute('type', 'text/paperscript');
a.setAttribute('canvas', 'canvas');
var src = paperScript.toString();
a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
document.body.appendChild(a);

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Example 4: use an external JS file</title>
//     <meta charset="utf-8"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.22/paper.js"></script>
//   </head> 
//   <body>	
// 		<canvas id="canvas" resize></canvas></body>

// </html>

// body {
// 	bleh:adf;
// 	meh:d;
// }
// html {
// }

// two

var parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  function plot() {
    var f = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    
    functionPlot(parameters);
  }

//   <!DOCTYPE html>
// <html lang="en"> 
// <head>
//   <title>Plotting functions in JavaScript using the 
//     function plot library</title>
//   <meta charset="utf-8"/>
//   <script src="https://d3js.org/d3.v3.min.js"></script>
//   <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
// </head>
// <body onload="plot();">
//   <h2>Interactive function plotter</h2>
//   <section id="plotSettings">
//   <label for="xMin">xMin: </label>
//   value: <input type=number id="xMin" value=0 step=0.5
//                 oninput="plot();">
//     <p></p>
//   <label for="xMax">xMax: </label>
//   value: <input type=number id="xMax" value=6.28 step=0.5
//                 oninput="plot();">

//   <p></p>
//  <label for="yMin">yMin: </label>
//   value: <input type=number id="yMin" value=-1 step=0.5
//                 oninput="plot();">
//     <p></p>
//   <label for="yMax">yMax: </label>
//   value: <input type=number id="yMax" value=1 step=0.5
//                 oninput="plot();">
//     <p></p>
//   <label for="color">Color: </label>
//   value: <input type=color id="color"
//                 onchange="plot();">
//     <p></p>
//       <label for="function">Function to plot: </label>
//   <input id="function" type="text" 
//          value="sin(x)" 
//          onchange="plot();">
//     <p></p>
//   <button onclick="plot();">Plot it!</button>

//   </section>
  
//   <section id="plot">
//      <div id="myFunction"></div>
//   </section>

// </body>
// </html>



// section {
//     border:4px solid grey;
//     border-radius:15px;
//     box-shadow: 5px 5px 5px grey;
//     float:left;
//     height:360px;
//     padding: 20px;
//     margin:10px;
//   }
  
//   #plotSettings {
//     width:140px;
//   }
  
//   #plot {
//     width:550px;
//   }
  