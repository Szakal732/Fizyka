const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const kalorie = form.weight.value;
  const zdrowe = form.height.value;

  let bmr = 0;
  if (zdrowe >= '0') {
    bmr = (kalorie % zdrowe)
  }

  result.textContent = bmr.toFixed(2);
});