document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
  
    hamburger.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
    });
  });

//this is the js to run the counter for the countdown on the homepage
  // Set the date for the next event
const eventDate = new Date("June 30, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("counter").innerHTML = "Event has started!";
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      });
});

  