const btnFetchData = document.getElementById('available-posts');
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');

const sendHTTPRequestFetch = (method, url, data) => {
  /*   return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        const error = new Error('Algo no salió bien');
        reject(error);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Error'));
    };
    xhr.send(JSON.stringify(data));
  }); */

  return fetch(url, { method: 'GET', body: data }).then((res) => res.json());
};

const sendHTTPRequestXHR = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        const error = new Error('Algo no salió bien');
        reject(error);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Error'));
    };
    xhr.send(JSON.stringify(data));
  });
};

const fetchPostsHandler = async () => {
  try {
    const listOfPosts = await sendHTTPRequestXHR(
      'get',
      'https://jsonplaceholder.typicode.com/posts'
    );

    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.appendChild(postEl);
    }
  } catch (error) {
    console.log(error);
  }

  /*   sendHTTPRequestXHR('get', 'https://jsonplaceholder.typicode.com/posts').then(
    (response) => {
      const listOfPosts = response;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.appendChild(postEl);
      }
    }
  ); */

  /* const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts');
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      const listOfPosts = xhr.response;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.appendChild(postEl);
      }
      //console.table(xhr.response);
    } else {
      console.log('algo no está bien');
    }
  };

  xhr.onerror = () => {
    console.log('Ocurrió un error');
  };

  xhr.send(); */
};

const createPost = (title, body) => {
  const userId = Math.random();
  const fd = new FormData();
  fd.append('title', title);
  fd.append('body', body);
  fd.append('userId', userId);

  sendHttpRequest('post', 'https://jsonplaceholder.typicode.com/posts', fd);
};

const submitHandler = (evt) => {
  evt.preventDefault();
  const title = evt.currentTarget.querySelector('#title').value;
  const content = evt.currentTarget.querySelector('#content').value;

  console.log(title, content);
};

form.addEventListener('submit', submitHandler);
btnFetchData.addEventListener('click', fetchPostsHandler);
