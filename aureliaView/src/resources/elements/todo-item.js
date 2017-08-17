import { bindable, inject, TaskQueue } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { TodoUpdated } from '../messages/todo-messages';

@inject(Element, TaskQueue, Router, EventAggregator)
export class TodoItem {
    @bindable todo;
    @bindable removeCallback;
    @bindable updateCallback;

    todoClass = '';
    constructor(element, taskQueue, router, eventAggregator) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.router = router;
        this.eventAggregator = eventAggregator;
    }

    update(todo) {
        this.eventAggregator.publish(new TodoUpdated(this.todo));
        this.updateCallback(todo);
    }

    makeUpdatable(todo) {
        todo.editMode = true;
        this.taskQueue.queueMicroTask(() => {
            this.titleInput.focus();
        });
        // this.todo.title += ' Alterado';
        this.eventAggregator.publish(new TodoUpdated(this.todo));
    }
    updateInDetailPage(todo) {
        this.router.navigate(this.router.generate('todo', { id: todo.id }));
    }

    attached() {
        this.todoClass = this.todo.completed ? 'strikeout' : '';
    }
}

