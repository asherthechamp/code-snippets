window.onkeydown = function(evt) {
    document.body.innerHTML += "key = " + evt.key + "<br>";
   document.body.innerHTML += "code = " + evt.code + "<br><br>";
  }

//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>key and keyCode</title>
//     <meta charset="utf-8"/>
//   </head>
//   <body>
//    <p>Press some keys on your keyboard and see the corresponding evt.key and evt.code values. If you are not using a QWERTY keyboard, notice that the values might be different. This is because an 'a' on an AZERTY keyboard, will correspond to the KeyQ code on the reference keyboard.</p>
//     <p>  You typed:</p>
//   </body>
// </html>