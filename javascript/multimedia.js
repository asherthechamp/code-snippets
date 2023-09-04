// one

// <!DOCTYPE html> 
// <html lang="fr">
// <head>
//     <meta charset="utf-8"/>
// <title>Example #1: Video/Canvas Demo</title> 
// </head>

// <body>
// <!-- <video> tag, with the @controls attribute giving it the play/pause/seeker controls. Try removing the controls attribute, adding autoplay or loop
// -->
// <video id="vid" controls> 
//   <!-- I have three versions of the video encoded with different codecs.  The browser will automatically choose the first one it knows it can play.
//    --> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.webm type=video/webm> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.ogg type=video/ogg> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4 type=video/mp4> 
// </video> 
// <p>Example of custom controls:</p>
// <button onclick="playVideo();" style="cursor: pointer;">Play</button>

// <button onclick="pauseVideo();" style="cursor: pointer;">Pause</button>

// <button onclick="rewindVideo();" style="cursor: pointer;">
//   Retour au début</button>
//   <script>
//     vid = document.querySelector("#vid");
  
// function playVideo() {
//   vid.play();
// }
// function pauseVideo() {
//   vid.pause();
// }
  
// function rewindVideo() {
//   vid.currentTime = 0;
// }
// </script>
// </body>
// </html>

// two detect end of video and start another one

// <!DOCTYPE html> 
// <html lang="fr">
// <head>
//     <meta charset="utf-8"/>
// <title>Example #2: how to detect the end of a video</title> 
// </head>

// <body>
// <video id="vid" controls> 
//   <source src="https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.webm" type=video/webm> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.ogg" type=video/ogg> 
//   <source src="https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4" type=video/mp4> 
// </video> 
// <p>Press play, the video is already almost at the end (property <code>currentTime=120</code> when loading) 
//   </p>
//   <script>
//     let vid = document.querySelector("#vid");
//     vid.currentTime=120;
//     vid.addEventListener('ended', playNextVideo, false);
    
//     function playNextVideo() {
//       /*alert("End of the video!");*/
//       /* Whatever you want to do after the event, change the src attribute of the video element, for example, in order to play another video */
//     }
// </script>
// </body>
// </html>

// three  manage playlists

// <!doctype html>
// <html lang="fr">
//   <head>
//     <meta charset="utf-8"/>
//     <title>Example #3: how to manage playlists</title>
//     <script>
//       let myVideo;
//       let currentVideo = 0;
//       let sources = [
//         "https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4",
//         "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
//         ];
// // Set the src of the video to the next URL in the playlist
// // If at the end we start again from beginning (the modulo
// // source.length does that)
//       function loadNextVideo() {
//         myVideo.src = sources[currentVideo % sources.length]
//         myVideo.load();
//         currentVideo++;
//       }
// // ecouteur
//     function loadAndplayNextVideo() {
//       console.log("On joue " + sources[currentVideo % sources.length])
//       loadNextVideo();
//       myVideo.play();
//     }
// // Called when the page is loaded
//     function init() {
// // get the video element using the Selector API
//     myVideo = document.querySelector("#myVideo");
// // Defines a callback function called each time a video ended
//     myVideo.addEventListener('ended', loadAndplayNextVideo, false);
// // Loads the first video when the page is loaded
//     loadNextVideo();
//     }
//   </script>
// </head>
// <body onload="init()">
//     <video id="myVideo"
//       controls>
//     </video>
// </body>
// </html>

// four every transformation

/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/
(function(){

    /* predefine zoom and rotate */
      var zoom = 1,
          rotate = 0;
    
    /* Grab the necessary DOM elements */
      var stage = document.getElementById('stage'),
          v = document.getElementsByTagName('video')[0],
          controls = document.getElementById('controls');
      
    /* Array of possible browser specific settings for transformation */
      var properties = ['transform', 'WebkitTransform', 'MozTransform',
                        'msTransform', 'OTransform'],
          prop = properties[0];
    
    /* Iterators and stuff */    
      var i,j,t;
      
    /* Find out which CSS transform the browser supports */
      for(i=0,j=properties.length;i<j;i++){
        if(typeof stage.style[properties[i]] !== 'undefined'){
          prop = properties[i];
          break;
        }
      }
    
    /* Position video */
      v.style.left = 0;
      v.style.top = 0;
    
    /* If there is a controls element, add the player buttons */
    /* TODO: why does Opera not display the rotation buttons? */
      if(controls){
        controls.innerHTML =  '<button class="play">play</button>'+
                              '<div id="change">' +
                                '<button class="zoomin">+</button>' +
                                '<button class="zoomout">-</button>' +
                                '<button class="left">⇠</button>' +
                                '<button class="right">⇢</button>' +
                                '<button class="up">⇡</button>' +
                                '<button class="down">⇣</button>' +
                                '<button class="rotateleft">&#x21bb;</button>' +
                                '<button class="rotateright">&#x21ba;</button>' +
                                '<button class="reset">reset</button>' +
                              '</div>';
      }
    
    /* If a button was clicked (uses event delegation)...*/
      controls.addEventListener('click',function(e){
        t = e.target;
        if(t.nodeName.toLowerCase()==='button'){
    
    /* Check the class name of the button and act accordingly */    
          switch(t.className){
    
    /* Toggle play functionality and button label */    
            case 'play':
              if(v.paused){
                v.play();
                t.innerHTML = 'pause';
              } else {
                v.pause();
                t.innerHTML = 'play';
              }
            break;
    
    /* Increase zoom and set the transformation */
            case 'zoomin':
              zoom = zoom + 0.1;
              v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
            break;
    
    /* Decrease zoom and set the transformation */
            case 'zoomout':
              zoom = zoom - 0.1;
              v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
            break;
    
    /* Increase rotation and set the transformation */
            case 'rotateleft':
              rotate = rotate + 5;
              v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
            break;
    /* Decrease rotation and set the transformation */
            case 'rotateright':
              rotate = rotate - 5;
              v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
            break;
    
    /* Move video around by reading its left/top and altering it */
            case 'left':
              v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
            break;
            case 'right':
              v.style.left = (parseInt(v.style.left,10) + 5) + 'px';
            break;
            case 'up':
              v.style.top = (parseInt(v.style.top,10) - 5) + 'px';
            break;
            case 'down':
              v.style.top = (parseInt(v.style.top,10) + 5) + 'px';
            break;
    
    /* Reset all to default */
            case 'reset':
              zoom = 1;
              rotate = 0;
              v.style.top = 0 + 'px';
              v.style.left = 0 + 'px';
              v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
            break;
          }        
    
          e.preventDefault();
        }
      },false);
    })();

//     <!DOCTYPE html>
// <html lang="en">
// <head>
  
//     <meta charset="utf-8">
//     <title>Example #1: Geometrical CSS transformations of video player</title>
// </head>
// <body>
//   <div id="boundary">
//   <header>
//     <h1>Geometrical CSS transform</H1>
//   </header>
//   <nav>
//     <ul>
//       <li>
//         <strong>Video player that can be rotated, zoomed etc.</strong>
//       </li>
//     </ul> 
//   </nav>

//   <div id="stage">
//     <video>
//       <source       src="https://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4" 
//               type="video/mp4">         
//       <source src="https://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973.ogv" type="video/ogg">              
//     </video>
//   </div>
//   <div id="controls"></div>
 
//   </div>
// </body>
// </html>

// * {
//     margin:0;
//     padding:0;
//   }
  
//   header,video,footer,nav {
//     display:block;
//   }
   
//   body{
//     padding:3em;
//   }
  
//   nav {
//     padding:.5em;
//     background:#ccc;
//     border-radius:5px;
//   }
  
//   h1 {
//     font-size:20px;
//     margin:0 0 1em 0;
//     color:#393;
//   }
  
//   h2 {
//     font-size:18px;
//     margin:1em 0;
//     color:#363;
//   }
  
//   nav li {
//     display:inline;
//     padding-right:2em;
//   }
  
//   a {
//     color:#369;
//     font-weight:bold;
//   }
  
//   nav a { 
//     color:#333;
//   }
  
//   nav strong {
//     color:#030;
//   }
  
//   footer {
//     font-size:80%;
//     margin:5em 0;
//   }
  
//   footer a img {
//     border:none;
//     display:block;
//     margin:.5em auto;
//   }
  
//   #stage{
//      background:#eee;
//      width:400px;
//      height:300px;
//      overflow:hidden;
//      position:relative;
//      margin:2em 0;
//   }
  
//   #stage span {
//     font-size:20px;
//     color:#666;
//     display:block;
//     padding:2em;
//   }
  
//   video {
//     width:400px;
//     height:300px;
//     position:absolute;
//     top:0;
//     left:0;
//   }
    
//   #controls{
//     position:relative;
//     width:400px;
//   }
  
//   #change{
//     position:absolute;
//     right:-100px;
//     top:-300px;
//     width:100px;
//   }
  
//   button{
//     font-size:150%;
//     text-align:center;
//     display:block;
//   }
  
//   #change button{
//     width:60px;
//     border:none;
//     background:#fff;
//   }

// five - all possible video events

// HTMLResult Skip Results Iframe
// EDIT ON
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset=utf-8 />
// <title>Example #2: how to track all possible events</title>
//   <script>
    
//     function init() {
//         var vid = document.getElementById('vid');
//         addListeners(vid);
//     }
    
//     function toggleNotes() {
//     var notes = document.getElementsByClassName('note');
//     var isShowing =     parseInt(window.getComputedStyle(notes[0],null).getPropertyValue("opacity"));
  
//     for (var i = 0; i < notes.length; i++) {
//         notes[i].style.opacity = isShowing ? 0 : 1;      
//     }
//     // toggle text to "Show Notes" or "Hide Notes"
//     document.getElementById('notes').className = isShowing ? 'off' : 'on';
// }
 
// function addListeners(vid) 
// {
 
//     /* add all event listeners for HTML5 media element events */  
//     vid.addEventListener('loadstart', function(evt) { logEvent(evt,'#000099'); }, false);  
//     vid.addEventListener('canplaythrough',function(evt) {  logEvent(evt,'#66CC33'); }, false);
//     vid.addEventListener('canplay', function(evt) { logEvent(evt,'#66CC33'); }, false);
//     vid.addEventListener('loadeddata', function(evt) { logEvent(evt,'#00CCCC'); }, false); 
//     vid.addEventListener('loadedmetadata', function(evt) { logEvent(evt,'#00CCCC'); }, false);
          
//     vid.addEventListener('abort', function(evt) { logEvent(evt,'red'); }, false);
//     vid.addEventListener('emptied', function(evt) { logEvent(evt,'red'); }, false);
//     vid.addEventListener('error', function(evt) { logEvent(evt,'red'); }, false);
//     vid.addEventListener('stalled', function(evt) { logEvent(evt,'red'); }, false);
//     vid.addEventListener('suspend', function(evt) { logEvent(evt,'red'); }, false);
//     vid.addEventListener('waiting', function(evt) { logEvent(evt,'red'); }, false);
 
//     vid.addEventListener('pause', function(evt) { logEvent(evt,'orange'); }, false);
//     vid.addEventListener('play', function(evt) { logEvent(evt,'orange'); }, false);
//     vid.addEventListener('volumechange', function(evt) { logEvent(evt,'orange'); }, false);
 
//     vid.addEventListener('playing', function(evt) { logEvent(evt,'purple'); }, false);
 
//     vid.addEventListener('seeked', function(evt) { logEvent(evt,'teal'); }, false);    
//     vid.addEventListener('seeking', function(evt) { logEvent(evt,'teal'); }, false);    
//     vid.addEventListener('durationchange', function(evt) { logEvent(evt,'#cc0066'); }, false);
//     vid.addEventListener('progress', function(evt) { logEvent(evt,'#cc0066'); }, false);   
//     vid.addEventListener('ratechange', function(evt) { logEvent(evt,'#cc0066'); }, false);   
 
//     vid.addEventListener('timeupdate', function(evt) { logEvent(evt,'gray'); }, false);
 
//     vid.addEventListener('ended', function(evt) { logEvent(evt,'#000099'); }, false); 
    
//     vid.addEventListener('webkitbeginfullscreen', function(evt) { logEvent(evt,'#FF6666'); }, false); 
//     vid.addEventListener('webkitendfullscreen', function(evt) { logEvent(evt,'#FF6666'); }, false); 
// }
 
 
// function logEvent(evt, color) 
// {
//     var log = document.createElement("div");
//     log.innerHTML = evt.type;
//     log.style.color = color;
 
//     var note = document.createElement("span");
//     note.setAttribute('class', 'note');
//     /* set the opacity of the note on the fly, based on whether notes are currently toggled on or off */
//     note.style.opacity = document.getElementById('notes').className == 'on' ? '1' : '0';
 
//     /* add a note describing what each event does */
//     switch (evt.type) {
//         case 'loadstart' :
//             note.innerHTML = "begin loading media data";
//             break;
//         case 'progress':
//             note.innerHTML = "fetching media...";
//             break;
//         case 'canplay':
//             note.innerHTML = "can play, but will eventually have to buffer";
//             break;
//         case 'canplaythrough':
//             note.innerHTML = "can play, won't have to buffer anymore";
//             break;
//         case 'loadeddata':
//             note.innerHTML = "can render media data at current playback position";
//             break;
//         case 'loadedmetadata':
//             note.innerHTML = "now we know duration, height, width, and more";
//             break;
//         case 'timeupdate':
//             log.innerHTML += " " + evt.target.currentTime.toFixed(3);
//             break;
//         case 'durationchange':
//             note.innerHTML = "new info about the duration";
//             break;
//         case 'volumechange':
//             note.innerHTML = "volume or muted property has changed";
//             break;
//         case 'play':
//             note.innerHTML = "just returned from the play function";
//             break;
//         case 'playing':
//             note.innerHTML = "playback has started";
//             break;
//         case 'pause':
//             note.innerHTML = "just returned from the pause function";
//             break;
//         case 'suspend':
//             note.innerHTML = "loading has stopped, but not all of the media has downloaded";
//             break;
//         case 'waiting':
//             note.innerHTML = "stopped playback because we're waiting for the next frame";
//             break;
//         case 'stalled':
//             note.innerHTML = "fetching media data, but none is arriving";
//             break;
//         case 'webkitbeginfullscreen':
//             note.innerHTML = "entering fullscreen mode";
//             break;
//         case 'webkitendfullscreen':
//             note.innerHTML = "exiting fullscreen mode";
//             break;
//         case 'error':  
//             var error = document.querySelector('video').error;
//             switch (error.code) {
//               case error.MEDIA_ERR_ABORTED:
//                 note.innerHTML = "fetching aborted at the user's request"; 
//                 break;
//               case error.MEDIA_ERR_NETWORK:
//                 note.innerHTML = "a network error caused the browser to stop fetching the media"; 
//                 break;
//               case error.MEDIA_ERR_DECODE:
//                 note.innerHTML = "an error occurred while decoding the media"; 
//                 break;
//               case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
//                 note.innerHTML = "the media indicated by the src attribute was not suitable"; 
//                 break;
//               default:
//                 note.innerHTML = "an error occurred"; 
//                 break;
//             }
//             break;
//     }
 
//     /* create the log message and append it to the events log */
//     log.appendChild(note);
//     var eventslog = document.getElementById('eventslog');
//     eventslog.insertBefore(log, eventslog.firstChild);
// }
//   </script>
// </head>
// <body onload='init();'>
//   <h1>Handling events for the <code>video</code> element</h1>
// <video id="vid" controls> 
//   <!-- I have three versions of the video encoded with
//        different codecs.  The browser will automatically
//        choose the first one it knows it can play. --> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.webm type=video/webm> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.ogg type=video/ogg> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4 type=video/mp4> 
// </video> <p>
//   <div id="notes"></div><p>
//   <div id="eventslog"></div>
// </body>
// </html>

// six - bufferring for slow connection

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8"/>
//     <title>Example #3: how to display a percentage of buffering</title>
//     <script type="text/javascript">
//         function getPercentProg() {
//             var myVideo = document.getElementsByTagName('video')[0];
//             var endBuf = myVideo.buffered.end(0);
//             var soFar = parseInt(((endBuf / myVideo.duration) * 100));
//             document.getElementById("loadStatus").innerHTML =  soFar + '%';
//         }
//        function myAutoPlay() {
//            var myVideo = document.getElementsByTagName('video')[0];
//            myVideo.play();
//        }
//        function addMyListeners(){
//            var myVideo = document.getElementsByTagName('video')[0];
//            myVideo.addEventListener('progress', getPercentProg, false);
//            myVideo.addEventListener('canplaythrough', myAutoPlay, false);
//        }
//     </script>
// </head>
// <body onload="addMyListeners()">
  
//   <h1>Check progression of buffering before playing a movie. Useful with slow connections (3G, etc.)</h1>
//     <div>
//         <video controls>
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.webm type=video/webm> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.ogg type=video/ogg> 
//   <source src=https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4 type=video/mp4> 
//         </video>
//         <p id="loadStatus">MOVIE LOADING...</p>
//     </div>
// </body>
// </html>