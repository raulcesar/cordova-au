import { inject, Aurelia } from 'aurelia-framework';
import { PouchDBTodoService } from '../services/pouchdb-todo-service';
import { Todo } from '../models/todo';

@inject(Aurelia)
export class Shell {
    constructor() {
        console.log('hello');
        this.todoService = new PouchDBTodoService();
        this.filterText = '';
        this.todoService.getAllTodos();
    }

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', ':filter'], name: 'todos-filter', moduleId: 'todo-manager/no-selection' },
            { route: 'detail/:id', name: 'todo-detail-id', moduleId: 'todo-manager/detail' }
        ]);

        this.router = router;
    }

    activate(params) {
        this.activeFilter = (params.filter) ? params.filter : 'all';
        console.log(this.activeFilter);

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
