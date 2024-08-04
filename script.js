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

// cursor.js

document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = 1;
    cursor.classList.remove('glow'); // Remove glow on hover
  });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = 0;
  });
});

// Add swirl effect on hover
document.getElementById('swirl-container').addEventListener('mouseenter', function () {
  const cursor = document.getElementById('custom-cursor');
  cursor.classList.add('glow'); // Add glow on hover
});

document.getElementById('swirl-container').addEventListener('mouseleave', function () {
  const cursor = document.getElementById('custom-cursor');
  cursor.classList.remove('glow'); // Remove glow on hover
});

