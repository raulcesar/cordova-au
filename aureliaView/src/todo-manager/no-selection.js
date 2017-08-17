import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { TodoUpdated } from '../resources/messages/todo-messages';

@inject(EventAggregator)
export class NoSelection {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(TodoUpdated, msg => {
            this.title = msg.todo.title;
        });
    }

}
