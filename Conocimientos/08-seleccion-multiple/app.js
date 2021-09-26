const listItemsSelected = document.getElementsByTagName('li');
console.log(listItemsSelected);
for (const listItem of listItemsSelected) {
  console.dir(listItem);
}

const h1 = document.querySelector('h1');
h1.textContent = 'Nuevo texto';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:first-of-type');
li.textContent = 'Texto cambiado';

const inputEl = document.querySelector('input');
const padre = inputEl.parentElement;

const elemento = document.body.firstElementChild.nextElementSibling;
const elFirst = elemento.firstElementChild;
const elLast = elemento.lastElementChild;
const elMiddle = elemento.firstElementChild.nextElementSibling;
const elMiddleP = elemento.lastElementChild.previousElementSibling;

const input = document.querySelector('input');
input.style.fontSize = '30px';
input.className = 'inputBg';
input.className = input.className + ' inputBgNew';
input.className += ' inputBgNew';

input.classList.add('inputBgNew');
input.classList.remove('inputBgNew');
input.classList.toggle('inputBgNew');
