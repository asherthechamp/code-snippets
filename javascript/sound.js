// one

function soundLoaded() {
  
    // enable buttons, the sounds are loaded
    
     var button1 = document.querySelector("#explosion");
     button1.disabled = false;
     button1.addEventListener("click", function() {
     sound.play('blast');
     });
      
     var button2 = document.querySelector("#basic_explosion");
     button2.disabled = false;
     button2.addEventListener("click", function() {
       sound.play('laser');
     });
    
     var button3 = document.querySelector("#winner");
     button3.disabled = false;
     button3.addEventListener("click", function() {
       sound.play('winner');
     });
  }
  
  
  // Load and decode sounds
  var sound = new Howl({
    urls: ['https://goldfirestudios.com/proj/howlerjs/sounds.mp3', 'https://goldfirestudios.com/proj/howlerjs/sounds.ogg'],
    sprite: {
      blast: [0, 2000],
      laser: [3000, 700],
      winner: [5000, 9000]
    }, 
    onload: function() { 
       console.log("Sound loaded");
       soundLoaded();
    }
  });

//   <!DOCTYPE html>
// <html>
// <head>
// <title>Howler.js example - Example #2</title>
//   <meta charset="utf-8"/>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.25/howler.min.js"></script>
// </head>
// <body>
//   <p>This example loads, decode and play sounds using the HowlerJS library</p>
//     <button id="explosion" disabled>BOOM !</button>
//     <button id="basic_explosion" disabled>Basic Explosion</button>
//         <button id="winner" disabled>Winner!</button>
// </body>
// </html>

// two

// support webkit-prefix for chrome (and friends)
if (window.webkitAudioontext !== undefined) {
    AudioContext = webkitAudioContext;
  }
  // support moz-prefix for Firefox (and friends)
  if (window.mozAudioContext !== undefined) {
    AudioContext = mozAudioContext;
  }

  var context = new AudioContext();
  var player = new ChiptunePlayer(context.destination);

  window.onload = function() {
    document.getElementById("play").onclick = function() {
      player.play();
    }
    document.getElementById("pause").onclick = function() {
      player.pause();
    }
    document.getElementById("loop").onclick = function() {
      player.setLooping(this.checked);
    }

    var fileaccess = document.querySelector("*");
    fileaccess.ondrop = function(e) {
      var file = e.dataTransfer.files[0];
      try { player.unload(); } catch(err) {};

      var loop = document.getElementById("loop").checked;
      player.load(file, loop, function() {
        document.querySelector(".loadedfile").innerHTML = file.name;
      });
      e.preventDefault();
    }
    fileaccess.ondragenter = function(e){e.preventDefault();}
    fileaccess.ondragover = function(e){e.preventDefault();}

    var demolink = document.querySelector("#demosong");
    demolink.onclick = function() {
      try { player.unload(); } catch(err) {};

      var loop = document.getElementById("loop").checked;
      player.load("https://deskjet.github.io/chiptune.js/tunes/mysteristerium.mod", loop, function() {
        document.querySelector(".loadedfile").innerHTML = "mysteristerium.mod";
      });
    }
  }

//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Making chiptune music with WebAudio - Example #3</title>
//     <meta charset="utf-8"/>
//     <script  src="https://rawgithub.com/deskjet/chiptune.js/master/libxmp.js"></script>
//     <script src="https://rawgithub.com/deskjet/chiptune.js/master/chiptune.js"></script>
//   </head>
//   <body>
//     <div id="headphones"></div>
//     <div id="content">
//       <div id="info">
//         <p>Usage: Drop any module file (.mod, .xm, .it, etc.) on this page and hit play!</p>
//       </div>
//       <div id="headline"><span>chiptune.js</span></div>
//       <div id="controls">
//         <span class="loadedfile">nothing loaded</span><br>
//         <a id="play" class="control"></a>
//         <a id="pause" class="control"></a>
//         <input type="checkbox" id="loop"/>
//         <label for="loop" class="control"></label>
//       </div>
//       <div id="demosong"><a href="#">Load demo song<br>(mysterysterium by maktone)</a></div>
//     </div>
//   </body>
// </html>

/* ==========================================================================
   HTML5 Boilerplate styles - h5bp.com (generated via initializr.com)
   ========================================================================== */

//    html,
//    button,
//    input,
//    select,
//    textarea {
//        color: #222;
//    }
   
//    body {
//        font-size: 1em;
//        line-height: 1.4;
//    }
   
//    hr {
//        display: block;
//        height: 1px;
//        border: 0;
//        border-top: 1px solid #ccc;
//        margin: 1em 0;
//        padding: 0;
//    }
   
//    img {
//        vertical-align: middle;
//    }
   
//    fieldset {
//        border: 0;
//        margin: 0;
//        padding: 0;
//    }
   
//    textarea {
//        resize: vertical;
//    }
   
//    .chromeframe {
//        margin: 0.2em 0;
//        background: #ccc;
//        color: #000;
//        padding: 0.2em 0;
//    }
   
   
//    /* ==========================================================================
//       Author's custom styles
//       ========================================================================== */
//    @font-face {
//        font-family: amiga;
//        src: url('https://deskjet.github.io/chiptune.js/fonts/amiga4ever_pro2.ttf');
//        font-weight:400;
//    }
   
//    * {
//      -webkit-user-select: none;
//      cursor: default;
//    }
   
//    body {
//      background-color: #FF5C00;
//      font-family: amiga;
//      overflow: hidden;
//    }
   
//    #headphones {
//      margin: 0 auto;
//      position: relative;
//      top: 40px;
//      width: 45em;
//      height: 45em;
//      background-image: url('https://deskjet.github.io/chiptune.js/img/headphones.svg');
//      background-repeat: no-repeat;
//      background-size: 100%;
//    }
   
//    #content {
//      position: relative;
//      top: -45em;
//    }
   
//    #headline {
//      position: relative;
//      top: 0.5em;
//      font-size: 5em;
//      background-color: white;
//      padding-left: 0.5em;
//      text-align: center;
//    }
   
//    #controls {
//      position: relative;
//      top: 10em;
//      text-align: center;
//    }
   
//    #info {
//      background-color: rgba(0,0,0,0.8);
//      color: white;
//      padding: 1em;
//      font-size: 16px;
//    }
   
//    .control {
//      width: 5em;
//      height: 5em;
//      border-radius: 2.5em;
//      background-color: rgb(80,80,80);
//      display: inline-block;
//      box-shadow: 0px 9px 0px rgba(50,50,50,1), 0px 9px 25px rgba(0,0,0,.7);
//      transition: all .1s ease;
//      cursor: pointer;
//    }
   
//    .control:active, .control.pressed {
//      box-shadow: 0px 3px 0px rgba(50,50,50,1), 0px 3px 6px rgba(0,0,0,.7);
//    }
   
//    #play {
//      background-image: url('https://deskjet.github.io/chiptune.js//img/play.svg');
//      background-size: 75%;
//      background-position: 16px 9px;
//      background-repeat: no-repeat;
//    }
   
//    #pause {
//      background-image: url('https://deskjet.github.io/chiptune.js//img/pause.svg');
//      background-size: 75%;
//      background-position: center;
//      background-repeat: no-repeat;
//    }
   
//    #loop {
//      display: none;
//    }
   
//    #loop + label {
//      background-image: url('https://deskjet.github.io/chiptune.js//img/loop.svg');
//      background-size: 75%;
//      background-position: center;
//      background-repeat: no-repeat;
//    }
   
//    #loop:checked + label {
//      box-shadow: 0px 3px 0px rgba(50,50,50,1), 0px 3px 6px rgba(0,0,0,.7);
//    }
   
//    #demosong {
//      font-size: 75%;
//      text-align: center;
//    }
   
//    #demosong a {
//      border-bottom: 1px solid black;
//    }
   
//    #demosong a:hover {
//      color: white;
//      border-color: white;
//      cursor: pointer;
//    }
   
//    /* ==========================================================================
//       Media Queries
//       ========================================================================== */
   
//    @media only screen and (min-width: 35em) {
   
//    }
   
//    @media print,
//           (-o-min-device-pixel-ratio: 5/4),
//           (-webkit-min-device-pixel-ratio: 1.25),
//           (min-resolution: 120dpi) {
   
//    }
   
//    /* ==========================================================================
//       Helper classes
//       ========================================================================== */
   
//    .ir {
//        background-color: transparent;
//        border: 0;
//        overflow: hidden;
//        *text-indent: -9999px;
//    }
   
//    .ir:before {
//        content: "";
//        display: block;
//        width: 0;
//        height: 150%;
//    }
   
//    .hidden {
//        display: none !important;
//        visibility: hidden;
//    }
   
//    .visuallyhidden {
//        border: 0;
//        clip: rect(0 0 0 0);
//        height: 1px;
//        margin: -1px;
//        overflow: hidden;
//        padding: 0;
//        position: absolute;
//        width: 1px;
//    }
   
//    .visuallyhidden.focusable:active,
//    .visuallyhidden.focusable:focus {
//        clip: auto;
//        height: auto;
//        margin: 0;
//        overflow: visible;
//        position: static;
//        width: auto;
//    }
   
//    .invisible {
//        visibility: hidden;
//    }
   
//    .clearfix:before,
//    .clearfix:after {
//        content: " ";
//        display: table;
//    }
   
//    .clearfix:after {
//        clear: both;
//    }
   
//    .clearfix {
//        *zoom: 1;
//    }
   
//    /* ==========================================================================
//       Print styles
//       ========================================================================== */
   
//    @media print {
//        * {
//            background: transparent !important;
//            color: #000 !important; /* Black prints faster: h5bp.com/s */
//            box-shadow: none !important;
//            text-shadow: none !important;
//        }
   
//        a,
//        a:visited {
//            text-decoration: underline;
//        }
   
//        a[href]:after {
//            content: " (" attr(href) ")";
//        }
   
//        abbr[title]:after {
//            content: " (" attr(title) ")";
//        }
   
//        /*
//         * Don't show links for images, or javascript/internal links
//         */
   
//        .ir a:after,
//        a[href^="javascript:"]:after,
//        a[href^="#"]:after {
//            content: "";
//        }
   
//        pre,
//        blockquote {
//            border: 1px solid #999;
//            page-break-inside: avoid;
//        }
   
//        thead {
//            display: table-header-group; /* h5bp.com/t */
//        }
   
//        tr,
//        img {
//            page-break-inside: avoid;
//        }
   
//        img {
//            max-width: 100% !important;
//        }
   
//        @page {
//            margin: 0.5cm;
//        }
   
//        p,
//        h2,
//        h3 {
//            orphans: 3;
//            widows: 3;
//        }
   
//        h2,
//        h3 {
//            page-break-after: avoid;
//        }
//    }

// three - background audio music

function play() {
    var player = document.querySelector("#audioPlayer");
    player.play();
 }
 
 function pause() {
    var player = document.querySelector("#audioPlayer");
   player.pause();  
 }

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Using the audio element from JS</title>
//   <meta charset="utf-8"/>
//   </head>
//   <body>
//     <p>  This example shows how we can play/pause a background music from javaScript.</p>
//     <p>This example uses a <code>&lt;audio&gt;</code> element with a <code>control</code> attribute. If you omit it, you will not see the audio player anymore! This is perfect for a game! Look at the functions play() and pause() called by the buttons below.</p>
//  <audio src = "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3" 
//         id="audioPlayer" 
//         controls>
// </audio>
// <p></p>

// <button onclick="play();" id="playButton">Play</button>
// <button onclick="pause();" id="pauseButton">Pause</button>
//   </body>
// </html>

// four - play sound with houler

window.onload = init;

var sound;

function init() {
    var button = document.querySelector("#button1");
  
    sound = new Howl({
                urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
                onload: function () {
                    console.log("Loaded asset ");
                  button.disabled = false; // enable the play sound button
                }
            });
}

function playSound() {
  sound.play();
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.28/howler.min.js"></script>
//   <title>Simple example that uses howler.js for playing sound samples</title>
//   <meta charset="utf-8">
//   </head>
//   <body>
//     <p>Turn volume 1. As soon as the button becomes enabled, that means that the sound sample
//       has been downloaded and decoded in memory. It can now be played. Click on the button to play
//       this sound. Click it rapidly: you see, it's ok for a game!</p>
//     <button onclick="playSound();" id="button1" disabled>Play sound sample 1</button>
//   </body>
// </html>

// five images and audio assets




var assetsToLoadURLs = {
    backgroundImage: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/background.png' }, // http://www.clipartlord.com/category/weather-clip-art/winter-clip-art/
    logo1: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/SkywardWithoutBalls.png" },
    logo2: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/BoundsWithoutBalls.png" },
    bell: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/bells.png" },
    spriteSheetBunny: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/bunnySpriteSheet.png' },
    plop: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3', buffer: false, loop: false, volume: 1.0 },
    humbug: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3', buffer: true, loop: true, volume: 1.0 },
    concertino: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/christmas_concertino.mp3', buffer: true, loop: true, volume: 1.0 },
    xmas: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/xmas.mp3', buffer: true, loop: true, volume: 0.6 }
};

var loadedAssets;

function init() {
    // this call will load all assets
  document.body.innerHTML += "<p>Loading assets...</p>";
    loadAssets(startGame);
}

function startGame(assetsReadyToBeUsed) {
  document.body.innerHTML += "<p>IMAGES, SOUNDS, MUSICS READY TO BE USED!</p>";
  // We're ready to use all sounds, images, musics etc
  loadedAssets = assetsReadyToBeUsed;
  
  // ex: draw the images in a canvas
  drawImages();
  
  // play one of the background music
  // UNCOMMENT THIS LINE!
  playHumbug();
  
  // play plop every second
  // UNCOMMENT THIS LINE!
  setInterval(playPlop, 1000);
}

function playHumbug() {
  loadedAssets.humbug.play();
}

function playPlop() {
    loadedAssets.plop.play();
}

function drawImages() {
  var canvas = document.querySelector('#myCanvas');
  var ctx = canvas.getContext('2d');
  
  // background image drawImage can have different syntaxes : drawImage(img, x, y); or
  // drawImage(x, y, width, height), for other syntaxes see HTML5 fundamentals course
  ctx.drawImage(loadedAssets.backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(loadedAssets.bell, 20, 20);
  
  ctx.drawImage(loadedAssets.spriteSheetBunny, 190, 0);
  
}
//==========================

function loadAssets(callback) {
    // here we should load the sounds, the sprite sheets etc.
    // then at the end call the callback function           
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
}

// You do not have to understand in details the next parts of the code...
// just use the above function

/* ############################
    BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
    files have been loaded and decoded 
 ############################## */
function isImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function isAudio(url) {
    return (url.match(/\.(mp3|ogg|wav)$/) != null);
}

function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;

    // define ifLoad function
    var ifLoad = function () {
        if (++loadedAssets >= numberOfAssetsToLoad) {
            callback(assetsLoaded);
        }
        console.log("Loaded asset " + loadedAssets);
    };

    // get num of assets to load
    for (var name in assetsToBeLoaded) {
        numberOfAssetsToLoad++;
    }

    console.log("Nb assets to load: " + numberOfAssetsToLoad);

    for (name in assetsToBeLoaded) {
        var url = assetsToBeLoaded[name].url;
        console.log("Loading " + url);
        if (isImage(url)) {
            assetsLoaded[name] = new Image();

            assetsLoaded[name].onload = ifLoad;
            // will start async loading. 
            assetsLoaded[name].src = url;
        } else {
            // We assume the asset is an audio file
            console.log("loading " + name + " buffer : " + assetsToBeLoaded[name].loop);
            assetsLoaded[name] = new Howl({
                src: [url],
                buffer: assetsToBeLoaded[name].buffer,
                loop: assetsToBeLoaded[name].loop,
                autoplay: false,
                volume: assetsToBeLoaded[name].volume,
                onload: function () {
                    if (++loadedAssets >= numberOfAssetsToLoad) {
                        callback(assetsLoaded);
                    }
                    console.log("Loaded asset " + loadedAssets);
                }
            }); // End of howler.js callback
        } // if

    } // for
} // function


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   	<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script>
//   <title>Multiple sound and image loader</title>
//   <meta charset="utf-8">
//   </head>
//   <body>
//     <canvas id="myCanvas" width=400 height=400></canvas>
//   </body>
// </html>

// #myCanvas {
//     border:1px solid black;
    
//   }