// one

var parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   }       
          ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  functionPlot(parameters);

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Plotting functions in JavaScript using the 
//     function plot library</title>
//   <meta charset="utf-8"/>
//   <script src="https://d3js.org/d3.v3.min.js"></script>
//   <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
// </head>
// <body>
//   <div id="myFunction"></div>
// </body>
// </html>

// div {
//     float: left;
//   }
  
//   #myFunction {
//     padding: 25px;
//     width: 250px;
//     height: 250px;
//   }

// two

functionPlot({
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   },
   {
      fn: 'cos(x)', 
      color: 'blue'
   }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  });

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Plotting functions in JavaScript using the 
//     function plot library</title>
//   <meta charset="utf-8"/>
//   <script src="https://d3js.org/d3.v3.min.js"></script>
//   <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
// </head>
// <body>
//   <div id="myFunction"></div>
// </body>
// </html>

// div {
//     float: left;
//   }
  
//   #myFunction {
//     padding: 25px;
//     width: 250px;
//     height: 250px;
//   }

// three

var ttt = functionPlot({
    target: '#quadratic',
    data: [{
      fn: 'x^2', 
      color: 'red',
      derivative: {
        fn: '2 * x',
        color: 'green',
        updateOnMouseMove: true
      }
    }],
    grid: true,
    yAxis: {domain: [0, 1]},
    xAxis: {domain: [0, 1]}
  });
  
  ttt.root.width="200px";
  ttt.root.height="200px";
  
  functionPlot({
    target: '#sin',
    data: [{
      fn: 'sin(x)', 
      color: 'blue', 
      range: [-1, 8], 
      closed: true
    }],
    tip: {
        xLine: true,
        yLine: true
    },
    yAxis: {domain: [-2, 3]},
    xAxis: {domain: [-2, 9]},
  });
  
  functionPlot({
    target: '#multiple',
    data: [
      {fn: 'x*x', color: 'red'},
      {fn: '3*x', color: 'green'},
      {fn: 'cos(x)', 
       color: 'blue', 
       range: [3, 6],
       closed: true
      },
      {fn: 'cos(x)', 
       color: 'blue' 
      },
      {fn: '-3*x^2 + x^2', 
       nSamples: 150, 
       graphType: 'scatter'}
    ]
  });

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Plotting functions in JavaScript using the 
//     function plot library - Example #1</title>
//   <meta charset="utf-8"/>
//   <script src="https://d3js.org/d3.v3.min.js"></script>
//   <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
// </head>
// <body>
//   <div id="quadratic"></div>
//   <div id="sin"></div>
//   <div id="multiple"></div>
// </body>
// </html>

// div {
//     float: left;
//   }
  
//   #quadratic {
//     padding: 25px;
//     width: 250px;
//     height: 250px;
//   }
  
//   #sin {
//     padding: 25px;
//   }
  
//   #multiple {
//     padding: 25px;
//   }

// four 

var ttt = functionPlot({
    target: '#myFunction',
    data: [{
      fn: 'sin(x^2)', 
      color: 'red'
   }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]},
  });

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Plotting functions in JavaScript using the 
//     function plot library</title>
//   <meta charset="utf-8"/>
//   <script src="https://d3js.org/d3.v3.min.js"></script>
//   <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
// </head>
// <body>
//   <div id="myFunction"></div>
// </body>
// </html>

// div {
//     float: left;
//   }
  
//   #myFunction {
//     padding: 25px;
//     width: 250px;
//     height: 250px;
//   }