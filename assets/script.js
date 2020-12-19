// Time function
function scheduleTime() {
    var scheduleDate = $("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm a");
    scheduleDate.html(date);
}
function scheduleFormat() {
    var containerDiv = $(".container");

    for (let i = 9; i <= 17; i++) {
        var currentDiv = $("<div " + "style='display:flex;'>" + "</div>");
        if (i <= 11) var labelHour = $("<p id='hourLable'>" + i + ":00" + "</p>");
        else {
            var labelHour = $("<p id='hourLable'>" + i + ":00" + "</p>");
        }
        var labelHour = $("<p id='hourLable'>" + i + ":00" + "</p>");
        var inputText = $("<input id=" + "txt" + i + " class='inputText'></input>");

        //console.log(localStorage.getItem("hour-"+i));
        var savedtxt = localStorage.getItem("hour-" + i);
        inputText.val(savedtxt);
        var saveBtn = $(`<button id='hour-${i}' class='saveBtn'> Save  </button>`);

        currentDiv.append(labelHour);
        currentDiv.append(inputText);
        currentDiv.append(saveBtn);
        containerDiv.append(currentDiv);
    }
};

function saveStorage(hour, textValue) {
    localStorage.setItem(hour, textValue)
    //pull array
    if (JSON.parse(localStorage.getItem("todos")))
        var todosArray = JSON.parse(localStorage.getItem("todos"));
    else var todosArray = [8];
    todosArray[index - 9] = textValue;

    //save array
    localStorage.setItem("todos", JSON.stringify(todosArray));
    console.log();
};


//every element with this class will call this function using jQuery
$(document).ready(function () {
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var saveBtn = $(event.target);
        var userInput = saveBtn.siblings("input").val();
        saveStorage(saveBtn.attr("id"), userInput)
    });
});
// variable for current time
var currentTime = moment().hour();
// funtion to input row entry into local storage
function scheduleDis() {
    var nineA = localStorage.getItem("9a");
    $('#9').val(nineA);
    var tenA = localStorage.getItem("10a");
    $('#10').val(tenA);
    var elA = localStorage.getItem("11a");
    $('#11').val(elA);
    var twP = localStorage.getItem("12p");
    $('#12').val(twP);
    var oneP = localStorage.getItem("1p");
    $('#1').val(oneP);
    var twoP = localStorage.getItem("2p");
    $('#2').val(twoP);
    var thrP = localStorage.getItem("3p");
    $('#3').val(thrP);
    var fourP = localStorage.getItem("4p");
    $('#4').val(fourP);
    var fiveP = localStorage.getItem("5p");
    $('#5').val(fiveP);
};
// function to check if current time is equal to planner time, and color codes according to future, past or present.
function timeCheck() {
    $(".row").each(function () {
        var hour = parseInt($(this).attr("id"))
        console.log(hour)
        // check if we’ve moved past this time
        if (hour < currentTime) {
            $(this).addClass("past");
        }
        else if (hour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
// call functions
timeCheck();
scheduleDis();

scheduleTime();
scheduleFormat();

