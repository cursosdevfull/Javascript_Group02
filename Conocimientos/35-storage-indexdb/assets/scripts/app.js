const btnSave = document.getElementById('button-save');
const btnRetrieve = document.getElementById('button-retrieve');
const btnRetrieveAll = document.getElementById('button-retrieve-all');
const btnDelete = document.getElementById('button-delete');
const btnUpdate = document.getElementById('button-update');

const dbRequest = indexedDB.open('ProductsDB', 1);

let db;

const addProduct = (product) => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productStore.add(product);
};

dbRequest.onsuccess = (evt) => {
  db = evt.target.result.result;
  console.log('Todo está bien');
};

dbRequest.onupgradeneeded = (evt) => {
  db = evt.target.result;
  const objectStorage = db.createObjectStore('products', { keyPath: 'id' });

  objectStorage.transaction.oncomplete = (evt) => {
    addProduct({ id: 'p1', tittle: 'muy bueno' });
    addProduct({ id: 'p2', tittle: 'muy bueno' });
    addProduct({ id: 'p3', tittle: 'muy bueno' });
    addProduct({ id: 'p4', tittle: 'muy bueno' });
  };
};
