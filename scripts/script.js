$(document).ready(function () {
    // Initialize jQuery UI calendar
    $('#datepicker').datepicker({
        onSelect: function (dateText) {
            // Update time block styles based on the selected date
            currentDate(dayjs(dateText));
            updateTimeBlockStyles(dayjs(dateText));
        },
        showOtherMonths: true,
        selectOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        showWeek: true,
        firstDay: 1,
    });

    // Function to update the current date
    function currentDate(date) {
        let formattedDate = date.format('dddd, MMMM D[th], YYYY');
        $('#currentDay').text('Date: ' + formattedDate);
    }

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

    // Update time block styles based on the selected date and current time
    function updateTimeBlockStyles(selectedDate) {
        $('.time-block').each(function () {
            let blockHour = parseInt($(this).find('.hour').text().split(' ')[0]);

            if ($(this).find('.hour').text().includes('PM') && blockHour !== 12) {
                blockHour += 12;
            }

            // Combine selected date with blockHour to get a date time for comparison
            let blockDateTime = selectedDate.hour(blockHour);

            if (blockDateTime.isAfter(dayjs())) {
                $(this).addClass('future').removeClass('present past');
            } else if (blockDateTime.isSame(dayjs(), 'hour')) {
                $(this).addClass('present').removeClass('future past');
            } else {
                $(this).addClass('past').removeClass('future present');
            }
        });
    }

    // Call the function to generate time blocks
    generateTimeBlocks();

    // Show today's date when the page is loaded
    let today = dayjs();
    currentDate(today);
    updateTimeBlockStyles(today);

    // Update time block styles when the user scrolls
    $(window).scroll(function () {
        updateTimeBlockStyles(dayjs($('#datepicker').datepicker('getDate')));
    });
});
