// one

function search() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.json();
            })
            .then(function (users) {
                // users is a JavaScript object here
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}

function displayUsersAsATable(users) {
    // users is a JavaScript object

    // empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    // iterate on the array of users
    users.forEach(function (currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });

    // adds the table to the div
    usersDiv.appendChild(table);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>Working with remote data - Example #1</title>
//   <meta charset="utf-8"/>
//   <!-- Polyfill in case your browser does not support the fetch API -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.js"></script>

// </head>
// <body>
//   <button onclick="search();">Get remote list of users' names and emails using the fetch API</button>
//   <div id="users"></div>
// </body>
// </html>

// table {
//     margin-top: 20px;
//   }
//   table, tr, td {
//     border: 1px solid;
//   } 


// two 

function search() {    
    var queryURL = "https://jsonplaceholder.typicode.com/users";
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);

    // called when the response is arrived
    xhr.onload = function(e) {
      var jsonResponse = xhr.response;

      // turn the response into a JavaScript object
      var users = JSON.parse(jsonResponse);
      displayUsersAsATable(users);
    }
    
    // in case of error
    xhr.onerror = function(err) {
      console.log("Error: " + err);
    }
    
    // sends the request
    xhr.send();
} 
  
function displayUsersAsATable(users) {
    // users is a JavaScript object
  
    // empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";
  
    // creates and populate the table with users
    var table = document.createElement("table");
          
    // iterate on the array of users
    users.forEach(function(currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
     });
  
     // adds the table to the div
     usersDiv.appendChild(table);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>Working with remote data suing XhR2</title>
//   <meta charset="utf-8"/>
// </head>
// <body>
//   <p>Working with remote data suing XhR2</p>
//   <button onclick="search();">Get a remote list of users' names and emails</button>
//   <div id="users"></div>
// </body>
// </html>

// table {
//     margin-top: 20px;
//   }
//   table, tr, td {
//     border: 1px solid;
//   } 

// three 

function search() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.json();
            })
            .then(function (users) {
                // users is a JavaScript object here
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}

function displayUsersAsATable(users) {
    // users is a JavaScript object

    // empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    // iterate on the array of users
    users.forEach(function (currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });

    // adds the table to the div
    usersDiv.appendChild(table);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>Working with remote data - Example #1</title>
//   <meta charset="utf-8"/>
//   <!-- Polyfill in case your browser does not support the fetch API -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.js"></script>

// </head>
// <body>
//   <button onclick="search();">Get remote list of users' names and emails using the fetch API</button>
//   <div id="users"></div>
// </body>
// </html>

// table {
//     margin-top: 20px;
//   }
//   table, tr, td {
//     border: 1px solid;
//   } 

// four - localStorage and sesionStorage - data stays until it is deleted in localStorage while it is deleted
// when the tab is closed in sessionStorage

localStorage.lastName = "Bunny";
localStorage.firstName = "Bugs";
localStorage.location = "Earth";
// retrieve data
var lastName = localStorage.lastName;
var firstName = localStorage.firstName;
var location = localStorage.location;

