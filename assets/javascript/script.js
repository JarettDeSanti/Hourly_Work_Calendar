// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// gets the element with an id of 'currentTime' and stores it in a variable
var currentTime = document.getElementById('currentTime');
// gets the element with an id of 'currentDay' and stores it in a variable
var currentDay = document.getElementById('currentDay');
// gets the element with a class of 'saveBtn' and stores it in a variable
var saveButton = document.getElementsByClassName('saveBtn');
// gets the element with a class of 'time-block' and stores it in a variable
var timeBlock = document.getElementsByClassName('time-block');




$(function () {

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


});



// function for displaying the date to the header
function displayDate() {
  var today = dayjs();
  $(currentDay).text(today.format('dddd, MMM D, YYYY'));
  return;
};


// function for displaying the current time to the header
function displayTime() {
  let time = dayjs().format('hh:mm:ss A');
  $(currentTime.innerText = time);
  return;
};

// function for adding a listener for click events on the save button and saves the input to local storage
function userSave() {
  $(saveButton).on('click', function () {
    var hour = $(this).parent().attr('id');
    var userTextInput = $(this).siblings('.description').val();
    localStorage.setItem(hour, userTextInput);
    return;
  })
};

// function for getting user input saved in local storage and sets the values to the corresponding textarea elements
$(timeBlock).each(function() {
  var hour = $(this).attr('id');
  var value = localStorage.getItem(hour);
  $(this).children('.description').val(value);
});



// calls the function for displaying the date to the header
$(displayDate());
// calls the function for displaying the time to the header and uses "setInterval()" to update time
$(setInterval(displayTime));
// calls the function for the save button and saves the user input to local storage
$(userSave());
