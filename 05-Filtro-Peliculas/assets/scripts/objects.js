const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const titleInput = document.getElementById('title');
const extraNameInput = document.getElementById('extra-name');
const extraValueInput = document.getElementById('extra-value');
const filterInput = document.getElementById('filter-title');
const movieList = document.getElementById('movie-list');

const movies = [];

const clearInputs = () => {
  titleInput.value = '';
  extraNameInput.value = '';
  extraValueInput.value = '';
};

const renderMovies = (filter = '') => {
  if (movies.length) {
    movieList.classList.add('visible');
  } else {
    movieList.classList.remove('visible');
  }

  movieList.innerHTML = '';

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => {
        for (const key in movie.info) {
          if (key !== 'title') {
            if (movie.info[key].toUpperCase().includes(filter.toUpperCase())) {
              return true;
            }
          }
        }
        return false;
      });

  filterMovies.forEach((movie) => {
    const movieLI = document.createElement('li');
    let { info, getFormattedTitle, ...otherProps } = movie;
    console.log('otherProperties', otherProps);

    getFormattedTitle = getFormattedTitle.bind(movie);

    // let text = getFormattedTitle.call(movie,20, 2, "hola");
    let text = getFormattedTitle();
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text += ` - ${key}:${movie.info[key]}`;
      }
    }
    movieLI.textContent = text;
    movieList.append(movieLI);
  });
};

const addMovieHandler = () => {
  const title = titleInput.value;
  const extraName = extraNameInput.value;
  const extraValue = extraValueInput.value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        console.log('set', val);
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }

        this._title = val.toLowerCase();
      },
      get title() {
        console.log('get', this._title);
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    releaseDate: new Date(),
    getFormattedTitle() {
      return this.info._title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  // newMovie.info[extraName] = extraValue;

  movies.push(newMovie);
  clearInputs();
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = filterInput.value.trim();
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
