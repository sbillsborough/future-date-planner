// MomentJS times
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentHour = moment().hour();

// Sets hourly sections based on past, present, future
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
    } else if (currentHour < rowHour && currentHour > rowHour - 9) {
      setColor(row, "green");
    } else if (currentHour > rowHour && currentHour < rowHour + 9) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.background = color;
}

// series of functions for ever hour to set, save and retrieve data from local storage plus persist on page load

var store = [];

var saveBtn9 = $("#save-9");

saveBtn9.on("click", function (event) {
  var inputText = $("#9").val();
  store.push(inputText);
  localStorage.setItem("9am", inputText);
  unhide();
});

function getNineAm() {
  var nineAmValue = localStorage.getItem("9am");
  var nineAmTextarea = $("#9")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getNineAm();

var saveBtn10 = $("#save-10");

saveBtn10.on("click", function (event) {
  var inputText10 = $("#10").val();
  store.push(inputText10);
  localStorage.setItem("10am", inputText10);
  unhide();
});

function getTenAm() {
  var nineAmValue = localStorage.getItem("10am");
  var nineAmTextarea = $("#10")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getTenAm();

var saveBtn11 = $("#save-11");

saveBtn11.on("click", function (event) {
  var inputText11 = $("#11").val();
  store.push(inputText11);
  localStorage.setItem("11am", inputText11);
  unhide();
});

function getElevenAm() {
  var nineAmValue = localStorage.getItem("11am");
  var nineAmTextarea = $("#11")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getElevenAm();

var saveBtn12 = $("#save-12");

saveBtn12.on("click", function (event) {
  var inputText12 = $("#12").val();
  store.push(inputText12);
  localStorage.setItem("12pm", inputText12);
  unhide();
});

function getTwelvePm() {
  var nineAmValue = localStorage.getItem("12pm");
  var nineAmTextarea = $("#12")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getTwelvePm();

var saveBtn13 = $("#save-13");

saveBtn13.on("click", function (event) {
  var inputText13 = $("#13").val();
  store.push(inputText13);
  localStorage.setItem("1pm", inputText13);
  unhide();
});

function getOnePm() {
  var nineAmValue = localStorage.getItem("1pm");
  var nineAmTextarea = $("#13")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getOnePm();

var saveBtn14 = $("#save-14");

saveBtn14.on("click", function (event) {
  var inputText14 = $("#14").val();
  store.push(inputText14);
  localStorage.setItem("2pm", inputText14);
  unhide();
});

function getTwoPm() {
  var nineAmValue = localStorage.getItem("2pm");
  var nineAmTextarea = $("#14")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getTwoPm();

var saveBtn15 = $("#save-15");

saveBtn15.on("click", function (event) {
  var inputText15 = $("#15").val();
  store.push(inputText15);
  localStorage.setItem("3pm", inputText15);
  unhide();
});

function getThreePm() {
  var nineAmValue = localStorage.getItem("3pm");
  var nineAmTextarea = $("#15")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getThreePm();

var saveBtn16 = $("#save-16");

saveBtn16.on("click", function (event) {
  var inputText16 = $("#16").val();
  store.push(inputText16);
  localStorage.setItem("4pm", inputText16);
  unhide();
});

function getFourPm() {
  var nineAmValue = localStorage.getItem("4pm");
  var nineAmTextarea = $("#16")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getFourPm();

var saveBtn17 = $("#save-17");

saveBtn17.on("click", function (event) {
  var inputText17 = $("#17").val();
  store.push(inputText17);
  localStorage.setItem("5pm", inputText17);
  unhide();
});

function getFivePm() {
  var nineAmValue = localStorage.getItem("5pm");
  var nineAmTextarea = $("#17")[0];
  nineAmTextarea.innerText = nineAmValue;
}

window.onload = getFivePm();

// unhide save message for 1.2 seoonds
function unhide() {
  $(".hidden").show();
  setTimeout(function () {
    $("h6").hide();
  }, 1200);
}
