// Source: https://stackoverflow.com/a/69367449
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// code by MatthewBaa from https://www.cssscript.com/responsive-fullscreen-carousel/ licensed under MIT license (https://opensource.org/licenses/MIT)
const slidesContainers = document.querySelectorAll('.slide-container');
const wrapper = document.querySelector('.wrapper');
let panAmount = 5;

function init() {
  slidesContainers.style.width = (100 + slidesContainers.length * panAmount) + "%"; // Set wrapper width based on number of slides + panAmount.

  for (var i = 0; i < slidesContainers.length; i++) {
    slidesContainers.style.width = 100 / slidesContainers.length + "%"; // Fit slides into the wrapper.
  }
}

init();
