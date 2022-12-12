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
    } else if (currentHour < rowHour && currentHour > rowHour - 6) {
      setColor(row, "green");
    } else if (currentHour > rowHour && currentHour < rowHour + 6) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// add text area content to local storage

$("button").click(function () {
  console.log("test");
});
