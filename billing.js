document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var planButtons = document.querySelectorAll('.plan-button');
    var closeBtn = document.querySelector('.popup-close');

    // Show the popup when clicking any Plan button
    planButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            popup.style.display = 'block'; // Show the popup
        });
    });

    // Close the popup when clicking the close button
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Hide the popup
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none'; // Hide the popup
        }
    });
});
