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

document.querySelectorAll('li').addEventListener(
  'mouseover',
  (event) => {
    // highlight the mouseover target
    event.target.style.color = 'orange';

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = '';
    }, 500);
  },
  false
);
