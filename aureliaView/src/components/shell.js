import { InMemoryTodoService } from '../services/inmemory-todo-service';
import { Todo } from '../models/todo';

export class Shell {
    constructor() {
        console.log('hello');
        this.todoService = new InMemoryTodoService();
        this.filterText = '';
        this.todos = this.todoService.getAllTodos();
    }

    addTodo(value) {
        let todo = new Todo(value.title, value.completed);
        this.todoService.addTodo(todo);
    }

    removeTodo(value) {
        console.log(`value.id: ${value.id}`);
        this.todoService.deleteTodoById(value.id);
        this.todos = this.todoService.getAllTodos();
    }
    updateTodo(value) {
        console.log(`updating: ${JSON.stringify(value)}`);
        this.todoService.updateTodoById(value.id, value);
        value.editMode = false;
    }
}
