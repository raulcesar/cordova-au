import  _ from 'lodash';
import { Todo } from './models/todo';

export class App {
    constructor() {
        this.todos = _.times(10, (i) => new Todo(`Task ${i}`));
        this.message = 'Hello World!';
        console.log(JSON.stringify(this.todos));
    }
}
