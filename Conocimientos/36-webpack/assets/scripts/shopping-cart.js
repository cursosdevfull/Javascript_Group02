import { Component } from './component.js';

export class ShoppingCart extends Component {
  items = [];

  constructor(renderHookId) {
    super(renderHookId);
  }

  cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `Total Sale: $${this.totalAmount().toFixed(
      2
    )}`;
  }

  totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currItem) => prevValue + currItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems(updateItems);
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
       <h2>Total Sale: 0</h2>
       <button>Order Now</button> 
      `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}
