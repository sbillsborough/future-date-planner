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

var store = [];

function setColor(element, color) {
  element.style.background = color;
}

var saveBtn9 = $("#save-9");

saveBtn9.on("click", function (event) {
  var inputText = $("#9").val();
  store.push(inputText);
  localStorage.setItem("9am", inputText);
});

var saveBtn10 = $("#save-10");

saveBtn10.on("click", function (event) {
  var inputText10 = $("#10").val();
  store.push(inputText10);
  localStorage.setItem("10am", inputText10);
});

var saveBtn11 = $("#save-11");

saveBtn11.on("click", function (event) {
  var inputText10 = $("#11").val();
  store.push(inputText11);
  localStorage.setItem("11am", inputText11);
});

var saveBtn12 = $("#save-12");

saveBtn11.on("click", function (event) {
  var inputText12 = $("#12").val();
  store.push(inputText12);
  localStorage.setItem("12pm", inputText12);
});

var saveBtn13 = $("#save-13");

saveBtn13.on("click", function (event) {
  var inputText13 = $("#13").val();
  store.push(inputText13);
  localStorage.setItem("1pm", inputText13);
});

var saveBtn14 = $("#save-14");

saveBtn14.on("click", function (event) {
  var inputText14 = $("#14").val();
  store.push(inputText14);
  localStorage.setItem("2pm", inputText14);
});

var saveBtn15 = $("#save-15");

saveBtn15.on("click", function (event) {
  var inputText15 = $("#15").val();
  store.push(inputText15);
  localStorage.setItem("3pm", inputText15);
});

var saveBtn16 = $("#save-16");

saveBtn16.on("click", function (event) {
  var inputText16 = $("#16").val();
  store.push(inputText16);
  localStorage.setItem("4pm", inputText16);
});

var saveBtn17 = $("#save-17");

saveBtn17.on("click", function (event) {
  var inputText17 = $("#17").val();
  store.push(inputText17);
  localStorage.setItem("5pm", inputText17);
});
