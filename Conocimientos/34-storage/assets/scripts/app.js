const btnSave = document.getElementById('button-save');
const btnRetrieve = document.getElementById('button-retrieve');
const btnDelete = document.getElementById('button-delete');

/////////////////////////////////////////////////
/// LocalStorage
/////////////////////////////////////////////////
const saveInLocalStorage = () => {
  localStorage.setItem('userId', 20);
  localStorage.setItem('user', JSON.stringify({ name: 'Pedro' }));
};

const retrieveFromLocalStorage = () => {
  const userid = localStorage.getItem('userId');
  const user = localStorage.getItem('user');

  console.log('userid', userid);
  console.log('user', user);
  console.log('username', JSON.parse(user).name);
};

const deleteFromLocalStorage = () => {
  localStorage.removeItem('userId');
};

/////////////////////////////////////////////////
/// SessionStorage
/////////////////////////////////////////////////
const saveInSessionStorage = () => {
  sessionStorage.setItem('userId', 20);
  sessionStorage.setItem('user', JSON.stringify({ name: 'Pedro' }));
};

const retrieveFromSessionStorage = () => {
  const userid = sessionStorage.getItem('userId');
  const user = sessionStorage.getItem('user');

  console.log('userid', userid);
  console.log('user', user);
  console.log('username', JSON.parse(user).name);
};

const deleteFromSessionStorage = () => {
  sessionStorage.removeItem('userId');
};

/////////////////////////////////////////////////
/// Cookies
/////////////////////////////////////////////////
const saveInCookies = () => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 60000);
  document.cookie = 'userId=20; max-age=60';
  document.cookie =
    'user=' +
    JSON.stringify({ name: 'Claudia' }) +
    '; expires=' +
    expiresDate.toGMTString();
};

const getCookie = (nameCookie) => {
  const pairCookies = document.cookie.split(';').map((el) => el.trim()); // ["userId=20", "user={name:Claudia}"]
  // {userId:20, user: {name: "Claudia"}}

  const cookies = pairCookies.reduce((accum, pair) => {
    const pairValue = pair.split('=');
    if (!accum[pairValue[0]]) {
      accum[pairValue[0]] = pairValue[1];
    }
    return accum;
  }, {});

  return cookies[nameCookie];
};

const retrieveFromCookies = () => {
  //console.log(document.cookie);
  const userId = getCookie('userId');
  const user = getCookie('user');

  console.log('userId', userId);
  console.log('user', user);
};

const deleteCookie = (nameCookie) => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() - 1000);
  document.cookie = nameCookie + '=; expires=' + expiresDate.toGMTString();
};

const deleteFromCookie = () => {
  deleteCookie('user');
  deleteCookie('userId');
};

btnSave.addEventListener('click', saveInCookies);
btnRetrieve.addEventListener('click', retrieveFromCookies);
btnDelete.addEventListener('click', deleteFromCookie);
