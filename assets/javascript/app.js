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
//Initial Values
var nameInput = "";
var destInput = "";
var firstInput = "";
var freqInput = "";
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
    var newRow = $('<tr>').append(
        $('<td>').text(nameInput),
        $('<td>').text(destInput),
        $('<td>').text(freqInput),
        $('<td>').text(),
        $('<td>').text(),
        $('<td>').text()
    )
    $('#trainTable > tbody').append(newRow)
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
// });
