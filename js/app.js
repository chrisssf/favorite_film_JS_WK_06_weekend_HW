document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('.form');
  form.addEventListener('submit', handleFormSubmission);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', deleteItems);

});


const handleFormSubmission = function (event) {
  event.preventDefault();
  // console.log('form submitted');
  // console.log(event.target);

  const filmItem = document.createElement('li');
  filmItem.classList.add('film-list-item');

  const filmList = document.querySelector('#film-list');
  filmList.appendChild(filmItem);

  const title = document.createElement('h2');
  title.textContent = `${event.target.title.value}`;
  filmItem.appendChild(title);

  const director = document.createElement('p');
  director.textContent = event.target.director.value;
  filmItem.appendChild(director);

  const actors = document.createElement('p');
  actors.textContent = event.target.actors.value;
  filmItem.appendChild(actors);

  const genre = document.createElement('p');
  genre.textContent = event.target.genre.value;
  filmItem.appendChild(genre);

  const releaseDate = document.createElement('p');
  releaseDate.textContent = event.target.releaseDate.value;
  filmItem.appendChild(releaseDate);

  const rating = document.createElement('p');
  rating.textContent = event.target.rating.value;
  filmItem.appendChild(rating);

  document.querySelector('.form').reset();
};

const deleteItems = function () {
  const filmList = document.querySelector('#film-list');
  filmList.innerHTML = "";
};
