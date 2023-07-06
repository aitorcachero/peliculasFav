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

document.querySelector('ul').addEventListener(
  'mouseover',
  (event) => {
    // highlight the mouseover target
    event.li.style.size = '20%';

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = '';
    }, 500);
  },
  false
);
