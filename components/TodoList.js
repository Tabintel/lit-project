import { css, html, LitElement } from 'lit';
import './TodoItem.js';

export class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  static get styles() {
    return css`
   /* styles here */
    `;
  }

  constructor() {
    super();
    this.todos = []
  }

  render() {
    return html`
      <h2>To-Do List</h2>
      ${this.todos.length === 0
        ? html`<div class="no-todos">You have no to-do items</div>`
        : this.todos.map(
            (todo) =>
              html`<todo-item task=${todo.task} .completed=${todo.completed}></todo-item>`
          )}
    `;
  }
}

customElements.define('todo-list', TodoList);