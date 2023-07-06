const nameMovie = document.querySelector('#name-movie');
const lista = document.querySelectorAll('li');
const img = document.querySelectorAll('img');

const peliculas = [
  'Matrix',
  "Ocean's Eleven",
  'El Gran Lebowsi',
  'Diario de un rebelde',
  'Un dia inesperado',
];

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
