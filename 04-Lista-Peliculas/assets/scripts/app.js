const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
/* const addMovieModal = document.querySelector('#add-modal');
const addMovieModal = document.body.children[1];
const addMovieModal = document.body.firstElementChild.nextElementSibling */
const startAddMovieModal = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

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
};

startAddMovieModal.addEventListener('click', showViewModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
