import { css, html, LitElement } from 'lit';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      task: { type: String },
      completed: { type: Boolean },
    };
  }

  static get styles() {
    return css`
     /* styles here */
    `;
  }

  constructor() {
    super();
    this.task = '';
    this.completed = false;
  }

  render() {
    return html`
      <div class="todo">
        <input type="checkbox" .checked=${this.completed} @change=${this._handleCheckboxChange} />
        <div class="todo-text ${this.completed ? 'completed' : ''}">${this.task}</div>
      </div>
    `;
  }

  _handleCheckboxChange(e) {
    this.completed = e.target.checked;
  }
}

customElements.define('todo-item', TodoItem);