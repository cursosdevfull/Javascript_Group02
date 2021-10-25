import { Product } from './product.js';
import { ProductItem } from './product-item.js';
import { Component } from './component.js';
import { ElementAttribute } from './element-attribute.js';

export class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.loadData();
  }

  loadData() {
    this.products = [
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
    this.renderProducts();
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }
}
