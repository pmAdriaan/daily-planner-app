$(document).ready(function () {
    // Constants and initializations
    const today = dayjs();
    const dateFormat = 'MM/DD/YYYY';
    const formattedDateLong = 'dddd, MMMM D[th], YYYY';

    const container = $('.container');
    const datePicker = $('#datepicker');
    const confirmTasksClear = $('#confirm-tasks-clear');
    const clearSelected = $('#clearSelectedDate');
    const clearAll = $('#clearAllTasks');
    const currentDay = $('#currentDay');

    const TIME_BLOCK_CLASS = 'time-block';
    const HOUR_CLASS = 'col-2 hour';
    const DESCRIPTION_CLASS = 'col description task-input';
    const SAVE_BTN_CLASS = 'col-1 saveBtn';

    const MESSAGE_DISPLAY_TIME = {
        CLEAR: 5000, // 5 seconds
        ADD: 3000,   // 3 seconds
    };

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

    // Handle date selection from the datepicker
    function handleDateSelection(dateText) {
        const selectedDate = handleValidDateSelection(dateText);
        if (selectedDate) {
            // Update UI based on the selected date
            currentDate(selectedDate);
            updateTimeBlockStyles(selectedDate);
            loadTasks(selectedDate.format(dateFormat));
        }
    }

    // Handle invalid date selection
    function handleValidDateSelection(dateText) {
        const selectedDate = dayjs(dateText);
        if (!selectedDate.isValid()) {
            console.error('Invalid date selected');
            return null;
        }
        return selectedDate;
    }

    // Update the display of the selected date
    function currentDate(date) {
        currentDay.text('Selected Date: ' + date.format(formattedDateLong));
    }

    // Generate time blocks for business hours
    function generateTimeBlocks() {
        const businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
        businessHours.forEach(hour => {
            const timeBlock = $('<div>').addClass(`row ${TIME_BLOCK_CLASS}`);
            const timeElement = $('<div>').addClass(HOUR_CLASS).text(hour);
            const taskInput = $('<textarea>').addClass(DESCRIPTION_CLASS);
            const saveBtn = $('<button>').addClass(SAVE_BTN_CLASS).append($('<i>').addClass('fa-regular fa-floppy-disk'))
            timeBlock.append(timeElement, taskInput, saveBtn);
            container.append(timeBlock);
        });
    }

    // Update the styles of time blocks
    // based on the selected date and current time
    function updateTimeBlockStyles(selectedDate) {
        $(`.${TIME_BLOCK_CLASS}`).each(function () {
            const blockHour = parseBlockHour($(this).find('.hour').text());
            const blockDateTime = selectedDate.hour(blockHour);
            const timeBlock = $(this);

            timeBlock.toggleClass('future', blockDateTime.isAfter(dayjs()))
                .toggleClass('present', blockDateTime.isSame(dayjs(), 'hour'))
                .toggleClass('past', blockDateTime.isBefore(dayjs()));
        });
    }

    // Parse the hour from the time block text
    function parseBlockHour(hourText) {
        let blockHour = parseInt(hourText.split(' ')[0]);
        if (hourText.includes('PM') && blockHour !== 12) {
            blockHour += 12;
        }
        return blockHour;
    }

    // Save tasks to local storage
    function saveTasks(date, tasks) {
        try {
            localStorage.setItem(date, JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }

    // Load tasks from local storage
    function loadTasks(date) {
        let tasks = []
        try {
            tasks = JSON.parse(localStorage.getItem(date)) || [];
        } catch (error) {
            console.error('Error loading tasks from localStorage:', error);
        }
        $(`.${TIME_BLOCK_CLASS}`).each(function (index) {
            $(this).find('.task-input').val(tasks[index] || '');
        });
    }

    // Clear tasks from local storage and update UI
    function clearTasks(selectedDate = null) {
        const confirmationMessage = selectedDate ?
            `Are you sure you want to clear tasks for ${selectedDate.format(formattedDateLong)}?` :
            'Are you sure you want to clear ALL tasks?';

        if (confirm(confirmationMessage)) {
            if (selectedDate) {
                localStorage.removeItem(selectedDate.format(dateFormat));
            } else {
                localStorage.clear();
                $(`.${TIME_BLOCK_CLASS} .task-input`).val('');
            }

            loadTasks(selectedDate);

            const message = selectedDate ?
                `Tasks for ${selectedDate.format(formattedDateLong)} cleared from localStorage!` :
                'All tasks cleared from localStorage!';

            showConfirmationMessage(confirmTasksClear, 'clear', message, MESSAGE_DISPLAY_TIME.CLEAR);
        }
    }

    // Display a confirmation message with an icon
    function showConfirmationMessage(container, type, message, timeout) {
        const confirmationParagraph = $('<p>').attr('id', `confirm-${type}`);
        const icon = $('<i>').addClass(`fa-solid fa-${type === 'clear' ? 'trash' : 'clipboard-check'}`);
        confirmationParagraph.append(icon).append(` ${message}`);
        container.append(confirmationParagraph);

        setTimeout(function () {
            container.text('');
        }, timeout);
    }

    // Event handler for saving tasks
    container.on('click', '.saveBtn', function () {
        try {
            const selectedDate = handleValidDateSelection(datePicker.datepicker('getDate'));
            if (selectedDate) {
                const tasks = $(`.${TIME_BLOCK_CLASS} .task-input`).map(function () {
                    return $(this).val();
                }).get();

                saveTasks(selectedDate.format(dateFormat), tasks);

                const confirmTasksAdd = $('<div>').addClass('confirm-tasks-add');
                $(this).closest(`.${TIME_BLOCK_CLASS}`).before(confirmTasksAdd);

                showConfirmationMessage(confirmTasksAdd, 'add', 'All Tasks saved!', MESSAGE_DISPLAY_TIME.ADD);
            }

        } catch (error) {
            console.error('Error in saveBtn click event:', error);
        }
    });

    // Event handler for clearing tasks for the selected date
    clearSelected.on('click', function () {
        const selectedDate = handleValidDateSelection(datePicker.datepicker('getDate'));
        if (selectedDate) {
            clearTasks(selectedDate);
        }
    });

    // Event handler for clearing all tasks
    clearAll.on('click', function () {
        clearTasks();
    });

    // Initial setup when the page is loaded
    currentDate(today);
    generateTimeBlocks();
    updateTimeBlockStyles(today);
    datePicker.datepicker('setDate', today.toDate());
    loadTasks(today.format(dateFormat));

    // Update time block styles when the user scrolls
    $(window).scroll(function () {
        updateTimeBlockStyles(handleValidDateSelection(datePicker.datepicker('getDate')));
    });
});
