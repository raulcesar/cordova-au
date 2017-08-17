import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PouchDBTodoService } from '../services/pouchdb-todo-service';

@inject( Router)
export class Todo {
    todo;

    todoClass = '';
    constructor( router) {
        this.router = router;
        this.appName = 'Todo List';
        this.self = this;
        this.todoService = new PouchDBTodoService();
    }

    backToList() {
        this.router.navigate(this.router.generate('todos'));
    }

    activate(params, routeConfig) {
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

