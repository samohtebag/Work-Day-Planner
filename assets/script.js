// shows today's date
var todaysDate = moment();
$("#currentDay").text(todaysDate.format("MMMM Do YYYY"));

//current date + time, plus the current hour
var timeNow = moment();
var theHour = timeNow.hours();

$(document).ready(function(){
    hourColor()

    // stores the text for each time slot when save button is clicked
    $('.saveBtn').on("click", function () {
        // pulls the value from the local storage
        var text = $(this).siblings(".description").val();
        var date = $(this).parent().attr("id");

        localStorage.setItem(date, text);
    });
        // retrieves values from local storage
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
});

// function hourColor changes color of schedule items according to time. Grey is past items, Red is present items, and Green is future items
function hourColor() {

    if (theHour > 8) {
        $("#8am").addClass("past");
    } else if (theHour >= 8 && theHour < 9) {
        $("#8am").addClass("present");
    } else if (theHour < 8) {
        $("#8am").addClass("future");
    }
    
    if (theHour > 9) {
        $("#9am").addClass("past");
    } else if (theHour >= 9 && theHour < 10) {
        $("#9am").addClass("present");
    } else if (theHour < 9) {
        $("#9am").addClass("future");
    }

    if (theHour > 10) {
        $("#10am").addClass("past");
    } else if (theHour >= 10 && theHour < 11) {
        $("#10am").addClass("present");
    } else if (theHour < 10) {
        $("#10am").addClass("future");
    }

    if (theHour > 11) {
        $("#11am").addClass("past");
    } else if (theHour >= 11 && theHour < 12) {
        $("#11am").addClass("present");
    } else if (theHour < 11) {
        $("#11am").addClass("future");
    }
    
    if (theHour > 12) {
        $("#12pm").addClass("past");
    } else if (theHour >= 12 && theHour < 13) {
        $("#12pm").addClass("present");
    } else if (theHour < 12) {
        $("#12pm").addClass("future");
    }

    if (theHour > 13) {
        $("#1pm").addClass("past");
    } else if (theHour >= 13 && theHour < 14) {
        $("#1pm").addClass("present");
    } else if (theHour < 13) {
        $("#1pm").addClass("future");
    }

    if (theHour > 14) {
        $("#2pm").addClass("past");
    } else if (theHour >= 14 && theHour < 15) {
        $("#2pm").addClass("present");
    } else if (theHour < 14) {
        $("#2pm").addClass("future");
    }

    if (theHour > 15) {
        $("#3pm").addClass("past");
    } else if (theHour >= 15 && theHour < 16) {
        $("#3pm").addClass("present");
    } else if (theHour < 15) {
        $("#3pm").addClass("future");
    }

    if (theHour > 16) {
        $("#4pm").addClass("past");
    } else if (theHour >= 16 && theHour < 17) {
        $("#4pm").addClass("present");
    } else if (theHour < 16) {
        $("#4pm").addClass("future");
    }

    if (theHour > 17) {
        $("#5pm").addClass("past");
    } else if (theHour >= 17 && theHour < 18) {
        $("#5pm").addClass("present");
    } else if (theHour < 17) {
        $("#5pm").addClass("future");
    }
}





// set interval to update time in real-time, 1000

// make a function that stores the user text content when they press the save button
// get local storage and set item, get item and set item
// make a variable for what you are taking from the text box and the time that you have
// call the colors (classList) for things that have passed, current items, and future items
// when you call a class/id made on the CSS, use jQuery method .addClass();

// save button -> use siblings and parents to get the var for the text/time
// moment.js -> 
// when you get current time, specify in hours to make the function easier (military time is a hint)

// shows date on the header

