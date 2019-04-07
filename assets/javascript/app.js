//Linking the page to the firebase DB
var config = {
    apiKey: "AIzaSyBco5wXDUaqnmvKYBqqDWIeOeCseXRlm4o",
    authDomain: "train-scheduler-6c030.firebaseapp.com",
    databaseURL: "https://train-scheduler-6c030.firebaseio.com",
    projectId: "train-scheduler-6c030",
    storageBucket: "train-scheduler-6c030.appspot.com",
    messagingSenderId: "647816207294"
};

firebase.initializeApp(config);

var database = firebase.database();

var connectionsref = database.ref();

//Varibles set w/ initial values
var nameInput = "";
var destInput = "";
var firstInput = "";
var freqInput = "";

var currentTime = moment().format("HH:mm");
console.log(currentTime);


//Capture Button Click
$("#inputSubmit").on("click", function (event) {
    event.preventDefault();
    nameInput = $("#nameInput").val().trim();
    destInput = $("#destInput").val().trim();
    firstInput = $("#firstInput").val().trim();
    freqInput = $("#freqInput").val().trim();

    database.ref().push({
        nameInput: nameInput,
        destInput: destInput,
        firstInput: firstInput,
        freqInput: freqInput,
        //firebase.database.ServerValue.TIMESTAMP
    });
    
    var firstInputConverted = moment(firstInput, "HH:mm").subtract(1, "years");
    console.log(firstInputConverted);

    var diffTime = moment().diff(moment(firstInputConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % freqInput;
    console.log(tRemainder);

    // Minute Until Train
    var minutesAway = freqInput - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minutesAway);

    // Next Train
    var nextArrival = moment().add(minutesAway, "minutes");
    var nextTrain = moment(nextArrival).format("HH:mm");

    var newRow = $('<tr>').append(
        $('<td>').text(nameInput),
        $('<td>').text(destInput),
        $('<td>').text(freqInput),
        $('<td>').text(nextTrain),
        $('<td>').text(minutesAway)
    )
    $('#trainTable > tbody').append(newRow)

    $("#nameInput").val('');
    $("#destInput").val('');
    $("#firstInput").val('');
    $("#freqInput").val('');


    
});





// dataRef.ref().on("child_added", function (childSnapshot) {
//     console.log(childSnapshot);
//     console.log(childSnapshot.val());
//     //full list of items to the wall
//     $("#employeeData").append(nameInput)
//     var empName = childSnapshot.val().name;
//     var empRole = childSnapshot.val().role;
//     var empStart = childSnapshot.val().start;
//     var empRate = childSnapshot.val().date;
//     var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
//     var empMonth = moment().diff(moment(empstart, "X"), "months");
//     var empBilled = empMonths * empRate;
//  });
