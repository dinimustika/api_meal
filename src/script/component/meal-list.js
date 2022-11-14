import './meal-item.js';

class MealList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._meals.forEach(meal => {
      const clubItemElement = document.createElement('meal-item');
      clubItemElement.meal = meal;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('meal-list', MealList);
