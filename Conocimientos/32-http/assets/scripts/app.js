const btnFetchData = document.getElementById('available-posts');

const fetchPostsHandler = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts');
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      console.table(xhr.response);
    } else {
      console.log('algo no está bien');
    }
  };

  xhr.onerror = () => {
    console.log('Ocurrió un error');
  };

  xhr.send();
};

btnFetchData.addEventListener('click', fetchPostsHandler);
