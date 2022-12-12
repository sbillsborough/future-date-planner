// current day displayed
// table or rows that have the hour, text area and save button
// save button links to corresponding text area
// saves to local storage
// onclick/active/current state add past, present, future css class
// popup message on save, hidden class that temporarily removes when save button is pressed (set interval??)

// Global Variables
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentHour = moment().hour();

// var currentHour = 10;

var rows = $("textarea");

Array.from(rows).forEach((row) => {
  var rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if (currentHour < rowHour && currentHour > rowHour - 8) {
      setColor(row, "green");
    } else if (currentHour > rowHour && currentHour < rowHour + 8) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.background = color;
}

var saveBtn9 = $("#save-9");

saveBtn9.on("click", function (event) {
  var store = $("#9").val();
  localStorage.setItem("todo", store);
});

var saveBtn10 = $("#save-10");

saveBtn10.on("click", function (event) {
  var store = $("#10").val();
  localStorage.setItem("todo", store);
});

var saveBtn11 = $("#save-11");

saveBtn11.on("click", function (event) {
  var store = $("#11").val();
  localStorage.setItem("todo", store);
});

var saveBtn12 = $("#save-12");

saveBtn12.on("click", function (event) {
  var store = $("#12").val();
  localStorage.setItem("todo", store);
});

var saveBtn13 = $("#save-13");

saveBtn13.on("click", function (event) {
  var store = $("#13").val();
  localStorage.setItem("todo", store);
});

var saveBtn14 = $("#save-14");

saveBtn14.on("click", function (event) {
  var store = $("#14").val();
  localStorage.setItem("todo", store);
});

var saveBtn15 = $("#save-15");

saveBtn15.on("click", function (event) {
  var store = $("#15").val();
  localStorage.setItem("todo", store);
});

var saveBtn16 = $("#save-16");

saveBtn16.on("click", function (event) {
  var store = $("#16").val();
  localStorage.setItem("todo", store);
});

var saveBtn17 = $("#save-17");

saveBtn17.on("click", function (event) {
  var store = $("#17").val();
  localStorage.setItem("todo", store);
});
