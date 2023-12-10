$(document).ready(function () {
    const datePicker = $('#datepicker');
    const container = $('.container');
    const confirmMessage = $('#confirm-message');
    const dateFormat = 'MM/DD/YYYY';

    // Initialize jQuery UI calendar
    datePicker.datepicker({
        onSelect: handleDateSelection,
        showOtherMonths: true,
        selectOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        showWeek: true,
        firstDay: 1,
    });

    function handleDateSelection(dateText) {
        const selectedDate = dayjs(dateText);
        currentDate(selectedDate);
        updateTimeBlockStyles(selectedDate);
        loadTasks(selectedDate.format(dateFormat));
    }

    // Function to update the current date
    function currentDate(date) {
        const formattedDate = date.format('dddd, MMMM D[th], YYYY');
        $('#currentDay').text('Date: ' + formattedDate);
    }

    // Function to generate time blocks
    function generateTimeBlocks() {
        const businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

        businessHours.forEach(hour => {
            const timeBlock = $('<div>').addClass('row time-block');
            const timeElement = $('<div>').addClass('col-2 hour').text(hour);
            const taskInput = $('<textarea>').addClass('col description task-input');
            const saveBtn = $('<button>').addClass('col-1 saveBtn').html('<i class="fa-regular fa-floppy-disk"></i> Save');

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
            const blockDateTime = selectedDate.hour(blockHour);

            if (blockDateTime.isAfter(dayjs())) {
                $(this).addClass('future').removeClass('present past');
            } else if (blockDateTime.isSame(dayjs(), 'hour')) {
                $(this).addClass('present').removeClass('future past');
            } else {
                $(this).addClass('past').removeClass('future present');
            }
        });
    }

    // Save tasks to local storage
    function saveTasks(date, tasks) {
        localStorage.setItem(date, JSON.stringify(tasks));
    }

    // Load tasks from local storage
    function loadTasks(date) {
        let tasks = JSON.parse(localStorage.getItem(date)) || [];
        $('.time-block').each(function (index) {
            $(this).find('.task-input').val(tasks[index] || '');
        });
    }

    // Call the function to generate time blocks
    generateTimeBlocks();

    // Show today's date when the page is loaded
    const today = dayjs();
    currentDate(today);
    updateTimeBlockStyles(today);

    // Set the default date for the datepicker
    datePicker.datepicker('setDate', today.toDate());

    // Load tasks for today
    loadTasks(today.format(dateFormat));

    // Update time block styles when the user scrolls
    $(window).scroll(function () {
        updateTimeBlockStyles(dayjs(datePicker.datepicker('getDate')));
    });

    // Save tasks when the save button is clicked
    container.on('click', '.saveBtn', function () {
        const selectedDate = dayjs(datePicker.datepicker('getDate')).format(dateFormat);

        let tasks = [];

        $('.time-block').each(function () {
            tasks.push($(this).find('.task-input').val());
        });

        saveTasks(selectedDate, tasks);

        // Show confirmation message with icon
        confirmMessage.append('<p id="confirm"><i class="fa-solid fa-clipboard-check"></i>Task added to localStorage!</p>');

        // Set a timeout to clear the confirmation message after 3 seconds
        setTimeout(function () {
            confirmMessage.text('');
        }, 3000);
    });
});
