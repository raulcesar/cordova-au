// import _ from 'lodash';
// import { Todo } from '../models/todo';
import { InMemoryTodoService } from '../services/inmemory-todo-service';
export class TodoList {
    constructor() {
        // this.todos = _.times(10, (i) => new Todo(`Task ${i}`));
        // this.todos = [];
        this.message = 'Hello World!';
        this.todoService = new InMemoryTodoService();
        this.todos = this.todoService.getAllTodos();
        console.log(JSON.stringify(this.todos));
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
        this.todos = this.todoService.getAllTodos();
    }

    // addTodo() {
    //     this.todos.push(new Todo(this.todoT))
    // }
}
