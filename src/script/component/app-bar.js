class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #E97777;
          color: white;
        }
        :host {
          display: block;
          width: 100%;
        }
        h2 {
          padding: 16px;
        }
      </style>
      
      <h2>Search Meals</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
