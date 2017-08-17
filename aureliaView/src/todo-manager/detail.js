// import { inject, Aurelia } from 'aurelia-framework';
import { PouchDBTodoService } from '../services/pouchdb-todo-service';

export class DetailTodo {
    todo;

    constructor() {
        this.todoService = new PouchDBTodoService();
    }


    sendMessage() {
        console.log('send a message');

    }

    activate(params, routeConfig) {
        console.log('just checking');
        this.routeConfig = routeConfig;
        return this.todoService.getTodoById(params.id).then(todo => {
            this.todo = todo;
            this.previousTitle = this.title;
            this.todo.editMode = true;
            this.routeConfig.navModel.setTitle(todo.title);
            this.todoBeforeEdit = JSON.parse(JSON.stringify(todo));
        });
    }

}
