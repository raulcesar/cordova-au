import { generator } from '../utilities/sequenceGenerator';

export class Todo {
    constructor(title, completed = false) {
        this.id = generator.getNext();
        this.title = title;
        this.completed = completed;
    }
}
