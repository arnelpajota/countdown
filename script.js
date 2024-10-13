// Typing Animation for the Title
const text = "Capstone Final Defense Countdown.!";
let index = 0;
let typingSpeed = window.innerWidth <= 768 ? 150 : 100; // Adjust speed for smaller screens
let resetDelay = 3000; // Delay before restarting the animation

function typeText() {
    if (index < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(resetText, resetDelay);
    }
}

function resetText() {
    index = 0;
    document.getElementById('typed-text').innerHTML = "";
    typeText();
}

window.onload = typeText;

// Countdown Timer Script
const countdownDate = new Date("October 30, 2024 00:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector('.countdown-container').innerHTML = "The countdown has ended!";
    }
}, 1000);

// Optional: Update typing speed if screen is resized
window.onresize = function () {
    typingSpeed = window.innerWidth <= 768 ? 150 : 100; // Recalculate speed for smaller screens
};
