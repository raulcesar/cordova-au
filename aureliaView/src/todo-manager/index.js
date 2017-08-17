// import { InMemoryTodoService } from '../services/inmemory-todo-service';
import { PouchDBTodoService } from '../services/pouchdb-todo-service';
import { Todo } from '../models/todo';

export class Shell {
    constructor() {
        console.log('hello');
        this.todoService = new PouchDBTodoService();
        this.filterText = '';
        this.todoService.getAllTodos();
    }

    destroyDB() {
        this.todoService.destroyDB();
    }

    addTodo(value) {
        let todo = new Todo(value.title, value.completed);
        this.todoService.addTodo(todo);
        this.todoTitle = '';
    }

    removeTodo(value) {
        console.log(`value.id: ${value.id}`);
        this.todoService.deleteTodoById(value.id);
        // this.todos = this.todoService.getAllTodos();
    }
    updateTodo(value) {
        console.log(`updating: ${JSON.stringify(value)}`);
        value.editMode = false;
        this.todoService.updateTodoById(value.id, value);
    }
}
