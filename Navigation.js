// Navigation.js

document.addEventListener('DOMContentLoaded', function () {
    const sportsLink = document.getElementById('sports-link');
    const sportsMenu = document.getElementById('sports-menu');

    // Hide the sports menu initially
    sportsMenu.style.display = 'none';

    // Toggle the sports menu when clicking on the "Sports" link
    sportsLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (sportsMenu.style.display === 'none' || sportsMenu.style.display === '') {
            sportsMenu.style.display = 'block';
        } else {
            sportsMenu.style.display = 'none';
        }
    });
});
