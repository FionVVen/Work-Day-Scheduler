// load document first before jquery
$(document).ready(function () {
    // getting current time/day appended to page
    $("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"));
    // Saving text to text area local storage
    $(".saveBtn").on("click", saveSche)
    // function to save schedule by entering into text area
    function saveSche() {
        const $button = $(this);
        const hour = $button.val();
        const scheduleIn = $button.siblings("textarea").val();
        // set item to local storage
        localStorage.setItem(hour, scheduleIn);
    }

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
});

