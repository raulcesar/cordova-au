import { bindable, inject, TaskQueue } from 'aurelia-framework';

@inject(Element, TaskQueue)
export class TodoItem {
    @bindable todo;
    @bindable removeCallback;
    @bindable updateCallback;

    todoClass = '';
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
    }


    makeUpdatable(todo) {
        todo.editMode = true;
        this.taskQueue.queueMicroTask(() => {
            this.titleInput.focus();
        });
    }

    attached() {
        this.todoClass = this.todo.completed ? 'strikeout' : '';
    }
}

