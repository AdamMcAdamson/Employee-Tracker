// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsnA4ikH4MWEr81ERGiNdph28E7Tihdqw",
    authDomain: "employee-tracker-722e2.firebaseapp.com",
    databaseURL: "https://employee-tracker-722e2.firebaseio.com",
    storageBucket: "employee-tracker-722e2.appspot.com",
    messagingSenderId: "987085544007"
};

firebase.initializeApp(config);


// Variable to reference the database
var database = firebase.database();

// Employee details as variables to reference the database
var name = "";
var role = "";
var rate = "";
var start = "";
// All of our employees will be stored in this directory.
var connectionsRef = database.ref("/employees");

connectionsRef.on("child_added", function(snapshot){
  var elemName = snapshot.val().name;
  var elemRole = snapshot.val().role;
  var elemRate = snapshot.val().rate;
  var elemStart = snapshot.val().start;
  var elemDateAdded = snapshot.val().dateAdded;
  //var elemBilled = ---snapshot.val().dateAdded---;
  console.log();
});


//This takes the form input and adds to the database
// Capture Button Click
$("#enter-data").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();

    // Get inputs
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    rate = $("#rate-input").val().trim();
    start = $("#start-input").val().trim();
    dateAdded = "Time";
    // Change what is saved in firebase
    connectionsRef.push({
        name: name,
        role: role,
        rate: rate,
        start: start,
        dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
});
dataRef.ref().on("child_added", function(childsnapshot)  {


name = $("<td class="empName">").text(elemName);
role = $("<td class="empRole">").text(elemRole);
rate = $("<td class="monthlyRate">").text(elemRate);
start = $("<td class="empStart">").text(elemStart);
start = $("<td class="totalBilled">").text(elemBilled);
});
