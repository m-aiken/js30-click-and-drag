const slider = document.querySelector('.items');
let isDown = false;
let startX; // X coordinate of click within the div
let scrollLeft; // How far have we've scrolled within the div

function getCoords(e) {
  isDown = true;
  slider.classList.add('active');
  // pageX (x coord on page) minus offset of left of the div, there might be some margin
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function noClick() {
  isDown = false;
  slider.classList.remove('active');
}

function createSlide(e) {
  if (!isDown) return; // Stop the function from running
  e.preventDefault();
  // x variable updates with mousemove event / tells us x coord of moving cursor
  const x = e.pageX - slider.offsetLeft;
  // walk = how far we've moved from the initial click
  // * 2 scales up movement (if mouse move is 20px, slider will move 40px)
  const walk = (x - startX) * 2; // * n optional
  slider.scrollLeft = scrollLeft - walk; // Location in div minus walk
}

slider.addEventListener('mousedown', getCoords);
slider.addEventListener('mouseleave', noClick);
slider.addEventListener('mouseup', noClick);
slider.addEventListener('mousemove', createSlide);