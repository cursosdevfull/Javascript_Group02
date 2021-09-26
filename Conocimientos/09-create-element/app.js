let ulEl = document.querySelector('ul');
let liNew = document.createElement('li');
liNew.textContent = 'Item4';
liNew.textContent;
ulEl.appendChild(liNew);
ulEl.append(liNew);

let liNew2 = document.createElement('li');
liNew2.textContent = 'Item5';
ulEl.append(liNew2);
ulEl.append('Texto 6');
ulEl.append('<li>Item 7</li>');

ulEl.prepend('Item 0');
let liNew3 = document.createElement('li');
liNew3.textContent = 'Item -1';
ulEl.append(liNew3);

let liNew4 = document.createElement('li');
liNew4.textContent = 'Item 8';
ulEl.lastElementChild.before(liNew4);

let liNew5 = document.createElement('li');
liNew5.textContent = 'Item 9';
ulEl.lastElementChild.after(liNew5);

let liNew6 = document.createElement('li');
liNew6.textContent = 'Item 10';
ulEl.firstElementChild.replaceWith(liNew6);

let liNew7 = document.createElement('li');
liNew7.textContent = 'Item 11';
ulEl.replaceChild(liNew7, newLi6);

let liNew8 = document.createElement('li');
liNew8.textContent = 'Item 12';
ulEl.insertBefore(liNew8, ulEl.children[1]);

let liNew10 = document.createElement('li');
let content = document.createTextNode('Hola');
liNew10.appendChild(content);

let liFirst = document.querySelector('li:first-of-type');
liFirst = ulEl.firstElementChild;
liFirst = ulEl.children[0];
let clone = liFirst.cloneNode(true);

ulEl.append(liNew10, clone);
