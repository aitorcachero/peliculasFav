const nameMovie = document.querySelector('#name-movie');
const img = document.querySelectorAll('img');

img.forEach((element, index) => {
  element.addEventListener('mouseenter', () => {
    nameMovie.innerHTML = element.getAttribute('data-value');
  });
});

img.forEach((element) => {
  element.addEventListener('mouseleave', () => {
    nameMovie.innerHTML = '';
  });
});
