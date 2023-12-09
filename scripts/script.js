$(document).ready(function () {
    // Get the current date using day.js
    const currentDate = dayjs().format('dddd, MMMM D[th], YYYY');

    // Display the current date
    $('#currentDay').text('Today is ' + currentDate);

    // Function to generate time blocks
    function generateTimeBlocks() {
        let container = $('.container');
        let businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

        $.each(businessHours, function (_, hour) {
            let timeBlock = $('<div>').addClass('row time-block');
            let timeElement = $('<div>').addClass('col-2 hour').text(hour);
            let taskInput = $('<textarea>').addClass('col description task-input');
            let saveBtn = $('<button>').addClass('col-1 saveBtn').html('<i class="fas fa-save"> Save</i>');

            timeBlock.append(timeElement, taskInput, saveBtn);
            container.append(timeBlock);
        });
    }

    // Function to update time block styles based on the current time
    function updateTimeBlockStyles() {
        let currentHour = dayjs().hour();

        $('.time-block').each(function () {
            let blockHour = parseInt($(this).find('.hour').text().split(' ')[0]);

            if ($(this).find('.hour').text().includes('PM') && blockHour !== 12) {
                blockHour += 12;
            }

            if (blockHour > currentHour) {
                $(this).addClass('future').removeClass('present past');
            } else if (blockHour === currentHour) {
                $(this).addClass('present').removeClass('future past');
            } else {
                $(this).addClass('past').removeClass('future present');
            }
        });
    }

    // Call the functions
    generateTimeBlocks();
    updateTimeBlockStyles();

    // Update time block styles when the user scrolls
    $(window).scroll(updateTimeBlockStyles);
});
