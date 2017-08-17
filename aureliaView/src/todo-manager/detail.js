import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { TodoUpdated } from '../resources/messages/todo-messages';

import { PouchDBTodoService } from '../services/pouchdb-todo-service';

@inject(EventAggregator)
export class DetailTodo {
    todo;

    constructor(eventAggregator) {
        this.todoService = new PouchDBTodoService();
        this.eventAggregator = eventAggregator;
    }


    sendMessage() {
        console.log('send a message');
        this.todo.title += ' Alterado';
        this.eventAggregator.publish(new TodoUpdated(this.todo));
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
