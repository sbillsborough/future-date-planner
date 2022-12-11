// current day displayed
// table or rows that have the hour, text area and save button
// save button links to corresponding text area
// saves to local storage
// onclick/active/current state add past, present, future css class
// popup message on save, hidden class that temporarily removes when save button is pressed (set interval??)

// Global Variables
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentHour = 10;
var momentHour = moment().hour();

console.log(currentHour);
console.log(momentHour);
momentHourFormatted = moment().format("HA");
console.log(momentHourFormatted);
// $('10').each(function)
