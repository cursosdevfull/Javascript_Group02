class Product {
  /*     title
    imageUrl
    description
    price */

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      'Almohada',
      'https://m.media-amazon.com/images/I/31OpSzWDFrL._AC_SY580_.jpg',
      'Almohada de lujo',
      300
    ),
    new Product(
      'Sábanas',
      'https://pmcasa.com/wp-content/uploads/2019/09/sabanas-de-seda.jpg',
      'Sábanas de seda egipcia',
      500
    ),
  ];

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
