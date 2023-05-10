import { LitElement, html, css } from 'lit';
import './components/TodoList.js'

export class TodoApp extends LitElement {
  static properties = {
    todos: { type: Array },
    newTodo: { type: String }
  }
  constructor() {
    super();
    this.todos = [];
    this.newTodo = '';
  }
  static styles = css`
   /* ...styles here... */
  `;
  render() {
    return html`
      <h1>Todo App</h1>
      <form @submit="${this.addTodo}">
        <input type="text" placeholder="New Todo" .value="${this.newTodo}" @input="${this.updateNewTodo}">
        <button type="submit">Add Todo</button>
      </form>
      <todo-list .todos=${this.todos}></todo-list>
    `;
  }
  updateNewTodo(event) {
    this.newTodo = event.target.value;
  }
  addTodo(event) {
    event.preventDefault();
    this.todos = [...this.todos, {task: this.newTodo, completed: false}];
    this.newTodo = '';
  }
}