// one

function getLocation(e) { 
    e.preventDefault();
    if (!navigator.geolocation) {
      alert("Browser doesn't support geolocation");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

//   <html>
// <head>
// <meta charset="utf-8">
// <title>OpenStreetMap Example</title>
// <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css">
// <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>  
// </head>
// <body>
//   <button class="btn" onclick="getLocation(event)">Click to show your location with OpenStreetMap</button>
//   <div id="map" class="map"></div> 
// </body>
// </html>

// html, body {
//     height: 100%
//   }
  
//   .map {
//     height: 300px;
//   }
  
//   .btn {
//     background-color: rgba(10, 10, 230, .5);
//     border: 0;
//     color: #fff;
//     padding: 10px;
//     text-shadow: 0 0 1px rgba(0, 0, 0, .3);
//     text-decoration: none;
//     margin: 0.5rem 0 1rem;
//     display: inline-block;
//   }

// two - reverse geolocation from latitude and longtiude

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Leaflet Control Geocoder</title>

//     <meta charset="utf-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, user-scalable=no initial-scale=1, maximum-scale=1"
//     />

//     <link rel="stylesheet" href="https://unpkg.com/leaflet@latest/dist/leaflet.css" />
//     <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />

//     <script src="https://unpkg.com/leaflet@latest/dist/leaflet-src.js"></script>
// <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
//     <style type="text/css">
//       body {
//         margin: 0;
//       }
//       #map {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="map"></div>

//     <script type="text/javascript">
//       var map = L.map('map').setView([0, 0], 2);

//       var geocoder = L.Control.Geocoder.nominatim();
//       if (URLSearchParams && location.search) {
//         // parse /?geocoder=nominatim from URL
//         var params = new URLSearchParams(location.search);
//         var geocoderString = params.get('geocoder');
//         if (geocoderString && L.Control.Geocoder[geocoderString]) {
//           console.log('Using geocoder', geocoderString);
//           geocoder = L.Control.Geocoder[geocoderString]();
//         } else if (geocoderString) {
//           console.warn('Unsupported geocoder', geocoderString);
//         }
//       }

//       var control = L.Control.geocoder({
//         query: 'Moon',
//         placeholder: 'Search here...',
//         geocoder: geocoder
//       }).addTo(map);
//       var marker;

//       setTimeout(function() {
//         control.setQuery('Earth');
//       }, 12000);

//       L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(map);

//       map.on('click', function(e) {
//         console.log(e.latlng)
//         geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
//           var r = results[0];
//           if (r) {
//             if (marker) {
//               marker
//                 .setLatLng(r.center)
//                 .setPopupContent(r.html || r.name)
//                 .openPopup();
//             } else {
//               marker = L.marker(r.center)
//                 .bindPopup(r.name)
//                 .addTo(map)
//                 .openPopup();
//             }
//           }
//         });
//       });
//     </script>
//   </body>
// </html>

