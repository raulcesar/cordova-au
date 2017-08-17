export class TodoUpdated {
    constructor(todo) {
        this.todo = todo;
    }
}

export class FilterChanged {
    constructor(filter) {
        this.filter = filter;
    }
}
