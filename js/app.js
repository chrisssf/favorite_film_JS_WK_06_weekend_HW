document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmission)






});


const handleFormSubmission = function (event) {
  event.preventDefault();
  // console.log('form submitted');

  const filmItem = document.createElement('li');
  filmItem.textContent = `${event.target.title.value}`;

  const filmList = document.querySelector('#film-list');
  filmList.appendChild(filmItem);

  document.querySelector('.form').reset();
};
