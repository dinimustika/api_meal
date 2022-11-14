class MealItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    this._meals = meal;
    this.render();
  }
  
  render() {
    this.shadowDOM.innerHTML = ` 
    <style>  
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    *{
      font-family: 'Poppins', sans-serif;
      font-size: medium;
    }
    a{
      text-decoration: none;
      color: white;
    }
    button {
      width: 100%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #E97777;
      color: white;
      border: 0;
      border-radius: 10px;
    }
    </style>
      <div class="col-md-3 card" style="padding: 20px;">
        <div class="card-body text-center">
          <img class="image-thumbnail oke" style="border-radius:15px; width:200px;" src="${this._meals.strMealThumb}">
          <div class="meal-info">
            <h6>${this._meals.strMeal}</h6>            
            <button><a href="${this._meals.strYoutube}">Watch on Youtube</a></button>            
        </div>  
      </div>
    `;
  }
}

customElements.define('meal-item', MealItem);

