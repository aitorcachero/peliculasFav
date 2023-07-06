const nameMovie = document.querySelector('#name-movie');
const img = document.querySelectorAll('img');

img.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    nameMovie.innerHTML = element.getAttribute('data-value');
  });
  element.addEventListener('mouseleave', () => {
    nameMovie.innerHTML = '';
  });
});

img.forEach((element) => {});
