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
    var start = "";
    var rate = "";


    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

  // Input form

  

