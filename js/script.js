// current day displayed
// table or rows that have the hour, text area and save button
// save button links to corresponding text area
// saves to local storage

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
