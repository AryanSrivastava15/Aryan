document.getElementById('light-btn').addEventListener('click', toggleLightTheme);
document.getElementById('dark-btn').addEventListener('click', toggleDarkTheme);

const text = "Aryan Srivastava";
let index = 0;
const typingSpeed = 100;
const pauseAfterTyping = 2000;

function toggleLightTheme() {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
}

function toggleDarkTheme() {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
}

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(resetTypewriter, pauseAfterTyping);
  }
}

function resetTypewriter() {
  index = 0;
  document.getElementById("typewriter").innerHTML = "";
  setTimeout(typeWriter, typingSpeed);
}

window.onload = function () {
  setTimeout(typeWriter, 1000); // Adjust the initial delay here
};

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  
  menuLinks.classList.toggle('open');
  icon.classList.toggle('open');
}
