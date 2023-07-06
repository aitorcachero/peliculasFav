const nameMovie = document.querySelector('#name-movie');
const img = document.querySelectorAll('img');

img.forEach((element) => {
  // element.addEventListener('mouseenter', () => {
  //   nameMovie.innerHTML = element.getAttribute('data-value');
  // });
  // element.addEventListener('mouseleave', () => {
  //   nameMovie.innerHTML = '';
  // });
  element.addEventListener('mouseover', (x) => {
    nameMovie.innerHTML = x.getAttribute('data-value');
  });
});
