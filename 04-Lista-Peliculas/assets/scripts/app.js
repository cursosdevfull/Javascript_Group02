const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
/* const addMovieModal = document.querySelector('#add-modal');
const addMovieModal = document.body.children[1];
const addMovieModal = document.body.firstElementChild.nextElementSibling */
const startAddMovieModal = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const listMoviesRoot = document.getElementById('movie-list');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeleteButton = deleteMovieModal.querySelector(' .btn--passive');
let confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const showViewModal = () => {
  // addMovieModal.className += ' visible';
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const resetMovieModal = () => {
  clearMovieInputs();
  closeMovieModal();
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  resetMovieModal();
};

const closeMovieDeleteModal = () => {
  deleteMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const deleteMovieHandler = (movieId) => {
  console.log('movieId', movieId);
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  movies.splice(movieIndex, 1);

  listMoviesRoot.children[movieIndex].remove();
  closeMovieDeleteModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  cancelDeleteButton.addEventListener('click', closeMovieDeleteModal);

  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));
  confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
  confirmDeleteButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  // newMovieElement.classList.add("movie-element")
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 estrellas</p>
    </div>
  `;

  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );

  listMoviesRoot.append(newMovieElement);
};

const updateUI = () => {
  entryTextSection.style.display = movies.length === 0 ? 'block' : 'none';
  /*   if (movies.length===0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  } */
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert(
      'Por favor ingrese valores válidos. El rating debe estar entre 1 y 5.'
    );
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue.trim(),
    image: imageUrlValue.trim(),
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  resetMovieModal();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieModal.addEventListener('click', showViewModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
