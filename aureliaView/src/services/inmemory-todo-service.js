import _ from 'lodash';
import { Todo } from '../models/todo';

export class InMemoryTodoService {
    // todos = _.times(10, (i) => new Todo(`Task ${i}`));

    constructor() {
        this.todos = _.times(10, (i) => new Todo(`Task ${i}`));
    }

    getAllTodos() {
        return this.todos;
    }

    getTodoById(id) {
        return this.todos.filter(todo => todo.id === id).pop();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodoById(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    updateTodoById(id, values = {}) {
        let todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }
}
