'use strict';
let elShowModal = document.querySelector('.show-modal');
let elModal = document.querySelector('.modal');
let elOverlay = document.querySelector('.overlay');
let elCloseModal = document.querySelector('.close-modal');

function addClass() {
  elModal.classList.add('hidden');
  elOverlay.classList.add('hidden');
}
function removeClass() {
  elModal.classList.remove('hidden');
  elOverlay.classList.remove('hidden');
}
addClass();

elShowModal.addEventListener('click', function () {
  removeClass();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    addClass();
  }
});

elCloseModal.addEventListener('click', function () {
  addClass();
});
elOverlay.addEventListener('click', function () {
  addClass();
});
