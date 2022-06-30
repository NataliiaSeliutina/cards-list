export default class Card {
    constructor(someProduct = {}) {
      this.state = someProduct;
      this.myRender();
    }
    getTemplate () {
      const result = `
    <div class="wrapper">
    <div class="product-card">
      <img class="card-img" src="${this.state.images[0]}"alt="Laptop-photo">
  
      <div class="card-rating">
  
        <div class="card-rating-number">${this.state.rating}<img src="./Star 1 (Stroke).svg"/></div>
        <div class="card-price">${this.state.price}</div>
      </div>
        <div class="card-category">
          <div class="card-text">${this.state.title}</div>
           <div class="laptop">
            <span>${this.state.category}</span>
           </div>
        </div>
      <div class="card-button">
        <button>ADD TO CART</button>
      </div>
      </div>
    </div>
      `;
      return result
    }
    update(data = {}) {
      this.state = data;
      this.componentElement.innerHTML = this.getTemplate();
    }
    myRender () {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = this.getTemplate();
  
      this.element = wrapper.firstElementChild;
  
    }
  }