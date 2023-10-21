// gets the element with an id of 'currentDay' and stores it in a variable
var currentDay = $('#currentDay');

// gets the element with a class of 'saveBtn' and stores it in a variable
var saveButton = $('.saveBtn');

// gets the element with a class of 'time-block' and stores it in a variable
var timeBlock = $('.time-block');

// gets the element with an id of 'currentTime' and stores it in a variable
var currentTime = document.getElementById('currentTime');

// gets the hour from dayjs
var dayjsHour = dayjs().format('H');







// function for displaying the date to the header
function displayDate() {
  var today = dayjs();
  $(currentDay).text(today.format('dddd, MMM D, YYYY'));
  return;
};


// function for displaying the current time to the header
function displayTime() {
  var time = dayjs().format('hh:mm:ss A');
  currentTime.innerText = time;
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
$(timeBlock).each(function () {
  var hour = $(this).attr('id');
  var value = localStorage.getItem(hour);
  $(this).children('.description').val(value);
});


// colors are changed according to past, present, or future
$(function pastPresentFuture() {
  $(timeBlock).each(function () {
    var timeBlockHour = parseInt(this.id);
    $(this).toggleClass('present', timeBlockHour === dayjsHour);
    $(this).toggleClass('past', timeBlockHour < dayjsHour);
    $(this).toggleClass('future', timeBlockHour > dayjsHour);
    return;
  })
}
);

// function removes and adds classes according to the time
function addClasses() {
  $(timeBlock).each(function () {
    var timeBlockHour = parseInt(this.id);
    if (timeBlockHour === dayjsHour) {
      $(this).removeClass('past future').addClass('present');
    } else if (timeBlockHour < dayjsHour) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
}




// calls the function for displaying the date to the header
$(displayDate());

// calls the function for the save button and saves the user input to local storage
$(userSave());

// calls the function for displaying the time to the header and uses "setInterval()" to update time
$(setInterval(displayTime));

