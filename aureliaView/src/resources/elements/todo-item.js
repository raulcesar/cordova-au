import { bindable, inject, TaskQueue } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Element, TaskQueue, Router)
export class TodoItem {
    @bindable todo;
    @bindable removeCallback;
    @bindable updateCallback;

    todoClass = '';
    constructor(element, taskQueue, router) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.router = router;
    }


    makeUpdatable(todo) {
        todo.editMode = true;
        this.taskQueue.queueMicroTask(() => {
            this.titleInput.focus();
        });
    }
    updateInDetailPage(todo) {
        this.router.navigate(this.router.generate('todo', {id: todo.id}));

    }

    attached() {
        this.todoClass = this.todo.completed ? 'strikeout' : '';
    }
}

